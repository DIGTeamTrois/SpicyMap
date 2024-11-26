import { useEffect, useRef, useState } from "react";
// import { useAtom } from "jotai";
// import { originAtom, destinationAtom } from "./atom.tsx";
import H from "@here/maps-api-for-javascript";

export const HereMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null); // 地図を描画する要素の参照
  // const [platform, setPlatform] = useState<any>(null); // HEREプラットフォーム
  const [map, setMap] = useState<H.Map>(); // 地図インスタンス
  // const [origin] = useAtom(originAtom); // 出発地点の緯度経度
  // const [destination] = useAtom(destinationAtom); // 到着地点の緯度経度

  useEffect(() => {
    // APIキーでプラットフォームインスタンスを作成

    const platformInstance = new H.service.Platform({
      apikey: process.env.VITE_API_KEY || "",
    });
    // setPlatform(platformInstance);

    // カスタムスタイル設定
    const baseUrl = "https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/";
    const customStyle = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);

    const omvService = platformInstance.getOMVService({
      path: "v2/vectortiles/core/mc",
    });

    const omvProvider = new H.service.omv.Provider(omvService, customStyle);
    const customLayer = new H.map.layer.TileLayer(omvProvider, { max: 22 });

    // const mapInstance = new H.Map(mapRef.current!, customLayer);
    const mapInstance = new H.Map(mapRef.current!, customLayer, {
      center: { lat: 35.1709, lng: 136.8815 }, // 名古屋駅
      zoom: 17, // ズームレベル
    });
    setMap(mapInstance);

    // ユーザー操作を有効化
    new H.mapevents.Behavior(new H.mapevents.MapEvents(mapInstance));

    // UI（ズームボタンなど）を追加
    H.ui.UI.createDefault(mapInstance, customLayer);

    // コンポーネントがアンマウントされるときに地図を破棄
    return () => {
      mapInstance.dispose();
    };
  }, []);

  interface ShopInterface {
    id: number;
    shop: string;
    average_spicy: number;
    category_id: number;
    latitude: number;
    longitude: number;
  }

  interface ShopLocationInterface {
    name: string;
    location: { lat: number; lng: number };
  }

  useEffect(() => {
    if (!map) return;

    const fetchShops = async () => {
      await fetch(`/shops`)
        .then(async (shopsJson) => await shopsJson.json())
        .then((shops) => {
          const shopsLocation: ShopLocationInterface[] = shops.map(
            (shopData: ShopInterface): ShopLocationInterface => {
              return {
                name: shopData.shop,
                location: { lat: shopData.latitude, lng: shopData.longitude },
              };
            },
          );

          shopsLocation.forEach((shop) => {
            const marker = new H.map.Marker(shop.location);
            marker.setData(shop.name);

            marker.addEventListener("click", () => {
              alert(`${shop.name}が選択されています。`);
            });

            map.addObject(marker);

            // 余白を追加する比率（10% 余白）
            const paddingRatio = 0.1;

            const latitudes = shopsLocation.map((r) => r.location.lat);
            const longitudes = shopsLocation.map((r) => r.location.lng);

            // 緯度と経度の範囲
            const maxLat = Math.max(...latitudes);
            const minLat = Math.min(...latitudes);
            const maxLng = Math.max(...longitudes);
            const minLng = Math.min(...longitudes);

            // 余白の計算
            const latPadding = (maxLat - minLat) * paddingRatio;
            const lngPadding = (maxLng - minLng) * paddingRatio;

            const boundingBox = new H.geo.Rect(
              maxLat + latPadding, // 北端
              minLng - lngPadding, // 西端
              minLat - latPadding, // 南端
              maxLng + lngPadding, // 東端
            );

            // 余白を追加した範囲を地図のビューに設定
            map.getViewModel().setLookAtData({ bounds: boundingBox });
            map.getViewModel().setLookAtData({ bounds: boundingBox });
          });
        });
    };

    fetchShops();
  }, [map]);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "500px" }} // 地図の表示サイズ
      id="mapContainer"
    />
  );
};
