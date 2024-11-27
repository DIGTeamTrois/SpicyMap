import H from "@here/maps-api-for-javascript";
import { useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import { selectShopAtom } from "./atom.tsx";

const API_URL = process.env.REACT_APP_API_URL || "/shops";

export const HereMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<H.Map | null>(null);
  const setSelectShop = useSetAtom(selectShopAtom);

  useEffect(() => {
    if (!mapRef.current) return;

    const platformInstance = new H.service.Platform({
      apikey: process.env.VITE_API_KEY || "default-api-key",
    });

    const baseUrl = "https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/";
    const customStyle = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);

    const omvService = platformInstance.getOMVService({
      path: "v2/vectortiles/core/mc",
    });

    const omvProvider = new H.service.omv.Provider(omvService, customStyle);
    const customLayer = new H.map.layer.TileLayer(omvProvider, { max: 22 });

    const mapInstance = new H.Map(mapRef.current, customLayer, {
      center: { lat: 35.1709, lng: 136.8815 },
      zoom: 17,
    });

    setMap(mapInstance);

    new H.mapevents.Behavior(new H.mapevents.MapEvents(mapInstance));
    H.ui.UI.createDefault(mapInstance, customLayer);

    window.addEventListener("resize", () => mapInstance.getViewPort().resize());

    return () => {
      mapInstance.dispose();
    };
  }, []);

  interface ShopInterface {
    id: number;
    shop_name: string;
    average_spicy: number;
    category_id: number;
    latitude: number;
    longitude: number;
  }

  interface ShopLocationInterface {
    id: number;
    shop_name: string;
    average_spicy: number;
    category_id: number;
    location: { lat: number; lng: number };
  }

  useEffect(() => {
    if (!map) return;

    const fetchShops = async () => {
      const response = await fetch(`${API_URL}`);
      const shops: ShopInterface[] = await response.json();

      const shopsLocation: ShopLocationInterface[] = shops.map((shop) => ({
        id: shop.id,
        shop_name: shop.shop_name,
        average_spicy: shop.average_spicy,
        category_id: shop.category_id,
        location: { lat: shop.latitude, lng: shop.longitude },
      }));

      shopsLocation.forEach((shopLocation) => {
        const markerWrapper = document.createElement("div");
        markerWrapper.style.position = "relative";
        markerWrapper.style.display = "flex";
        markerWrapper.style.alignItems = "center";
        markerWrapper.style.justifyContent = "center";

        const labelElement = document.createElement("div");
        labelElement.style.position = "absolute";
        labelElement.style.top = "-30px";
        labelElement.style.left = "50%";
        labelElement.style.transform = "translateX(-50%)";
        labelElement.style.backgroundColor = "white";
        labelElement.style.color = "black";
        labelElement.style.padding = "2px 5px";
        labelElement.style.borderRadius = "3px";
        labelElement.style.fontSize = "10px";
        labelElement.style.whiteSpace = "nowrap";
        labelElement.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
        labelElement.innerHTML = shopLocation.shop_name;

        const markerElement = document.createElement("div");
        markerElement.style.position = "absolute";
        markerElement.style.width = "20px";
        markerElement.style.height = "20px";
        markerElement.style.backgroundColor = "#ff0000";
        markerElement.style.border = "2px solid white";
        markerElement.style.borderRadius = "50%";
        markerElement.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
        markerElement.style.cursor = "pointer";

        markerWrapper.appendChild(labelElement);
        markerWrapper.appendChild(markerElement);

        const icon = new H.map.DomIcon(markerWrapper, {
          onAttach: (clonedElement) => {
            clonedElement.addEventListener("click", () => {
              console.log("clicked");
              setSelectShop(
                shops.find(
                  (shop) => Number(shop.id) === Number(shopLocation.id),
                ),
              );
            });
          },
        });

        const marker = new H.map.DomMarker(shopLocation.location, {
          icon,
          data: shopLocation.id,
        });

        map.addObject(marker);
      });
    };

    fetchShops();
  }, [map]);

  return (
    <>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }} />
    </>
  );
};
