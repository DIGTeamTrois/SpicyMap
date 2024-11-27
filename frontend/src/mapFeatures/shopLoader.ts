import H from "@here/maps-api-for-javascript";

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

export const loadShops = async (
  map: H.Map,
  setSelectShop: (shop: ShopInterface | undefined) => void,
) => {
  const API_URL = process.env.REACT_APP_API_URL || "/shops";
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
    const markerWrapper = createMarker(shopLocation.shop_name);

    const icon = new H.map.DomIcon(markerWrapper, {
      onAttach: (clonedElement) => {
        clonedElement.addEventListener("click", () => {
          setSelectShop(
            shops.find((shop) => Number(shop.id) === Number(shopLocation.id)),
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

const createMarker = (shopName: string): HTMLElement => {
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
  labelElement.innerHTML = shopName;

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

  return markerWrapper;
};
