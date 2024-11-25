import React, { useEffect, useRef } from "react";

export const HereMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const H = window.H;

    // HEREプラットフォームの初期化
    const platformInstance = new H.service.Platform({
      apikey: process.env.VITE_API_KEY, // 必ず有効なAPIキーを設定
    });

    // カスタムスタイルの指定
    const baseUrl = "https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/";
    const customStyle = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);

    // OMVサービスを作成
    const omvService = platformInstance.getOMVService({
      path: "v2/vectortiles/core/mc",
    });

    // プロバイダーを作成
    const omvProvider = new H.service.omv.Provider(omvService, customStyle);

    // カスタムレイヤーを作成
    const customLayer = new H.map.layer.TileLayer(omvProvider, { max: 22 });

    // 地図のインスタンス作成
    const mapInstance = new H.Map(mapRef.current!, customLayer, {
      center: { lat: 35.6895, lng: 139.6917 }, // 東京の初期位置
      zoom: 10,
    });

    // 地図のユーザー操作を有効化
    new H.mapevents.Behavior(new H.mapevents.MapEvents(mapInstance));

    // UI（ズームボタンなど）を追加
    H.ui.UI.createDefault(mapInstance, platformInstance.createDefaultLayers());

    // 地図の破棄処理（アンマウント時）
    return () => {
      mapInstance.dispose();
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "500px" }} // 地図のサイズ
      id="mapContainer"
    />
  );
};
