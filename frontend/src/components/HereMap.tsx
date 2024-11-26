import React, { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { originAtom, destinationAtom } from "./atom.tsx";
import H from "@here/maps-api-for-javascript";

const spicyRestaurantList = [
  {
    name: "四川飯店 名古屋",
    location: { lat: 35.1708, lng: 136.8847 }, // 名古屋駅の東側
  },
  {
    name: "辛麺屋 桝元 名古屋駅前店",
    location: { lat: 35.1712, lng: 136.8803 }, // 名古屋駅の西側
  },
  {
    name: "蒙古タンメン中本 名古屋店",
    location: { lat: 35.1699, lng: 136.8834 }, // 名古屋駅周辺
  },
  {
    name: "赤から 名駅西口店",
    location: { lat: 35.1697, lng: 136.8795 }, // 名古屋駅西口付近
  },
];

export const HereMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null); // 地図を描画する要素の参照
  const [platform, setPlatform] = useState<any>(null); // HEREプラットフォーム
  const [map, setMap] = useState<any>(null); // 地図インスタンス
  const [origin] = useAtom(originAtom); // 出発地点の緯度経度
  const [destination] = useAtom(destinationAtom); // 到着地点の緯度経度

  useEffect(() => {
    // APIキーでプラットフォームインスタンスを作成
    const platformInstance = new H.service.Platform({
      apikey: process.env.VITE_API_KEY,
    });
    setPlatform(platformInstance);

    // カスタムスタイル設定
    const baseUrl = "https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/";
    const customStyle = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);

    const omvService = platformInstance.getOMVService({
      path: "v2/vectortiles/core/mc",
    });

    const omvProvider = new H.service.omv.Provider(omvService, customStyle);
    const customLayer = new H.map.layer.TileLayer(omvProvider, { max: 22 });

    const mapInstance = new H.Map(mapRef.current!, customLayer);
    // const mapInstance = new H.Map(mapRef.current!, customLayer, {
    //   center: { lat: 35.1709, lng: 136.8815 }, // 名古屋駅
    //   zoom: 17, // ズームレベル
    // });
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

  useEffect(() => {
    if (!map) return;

    spicyRestaurantList.forEach((restaurant) => {
      const marker = new H.map.Marker(restaurant.location);
      marker.setData(restaurant.name);

      marker.addEventListener("click", () => {
        alert(`${restaurant.name}が選択されています。`);
      });

      map.addObject(marker);
    });
    // 余白を追加する比率（10% 余白）
    const paddingRatio = 0.1;

    const latitudes = spicyRestaurantList.map((r) => r.location.lat);
    const longitudes = spicyRestaurantList.map((r) => r.location.lng);

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
  }, [map]);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "500px" }} // 地図の表示サイズ
      id="mapContainer"
    />
  );
};
