import { useEffect, useRef, useState } from "react";
import { useSetAtom, useAtom} from "jotai";
import { selectShopAtom, newLocationAtom, isSubmitShopAtom} from "../components/atom.tsx";
import { initializeMap } from "./mapInitializer";
import { loadShops } from "./shopLoader";


export const HereMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<H.Map | null>(null);
  const [marker, setMarker] = useState<H.map.Marker | null>(null);
  const setSelectShop = useSetAtom(selectShopAtom);
  const setLocation = useSetAtom(newLocationAtom)
  const [isSubmitShop, setIsSubmitShop]= useAtom(isSubmitShopAtom)

  useEffect(() => {
    if (!mapRef.current) return;

    const mapInstance = initializeMap(mapRef.current);
    setMap(mapInstance);

    setIsSubmitShop(false);
    return () => {
      mapInstance.dispose();
    };
  }, [isSubmitShop]);

  useEffect(() => {
    if (!map) return;

    // イベントハンドラー関数を定義
    const handleTap = (evt: any) => {
      const coords: any = map.screenToGeo(
        evt.currentPointer.viewportX,
        evt.currentPointer.viewportY,
      );
      setLocation({
        latitude:coords.lat,
        longitude:coords.lng
      })
      console.log(`Clicked coordinates: ${coords.lat}, ${coords.lng}`);

      if (marker) {
        map.removeObject(marker);
      }

      const newMarker = new H.map.Marker(coords);
      map.addObject(newMarker);

      setMarker(newMarker);
    };

    map.addEventListener("tap", handleTap);

    return () => {
      map.removeEventListener("tap", handleTap);
    };
  }, [map, marker]);

  useEffect(() => {
    if (!map) return;

    loadShops(map, setSelectShop);
  }, [map]);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};
