import { Status, Wrapper } from "@googlemaps/react-wrapper";

import { HereMap } from "./HereMap.tsx";
import { Marker } from "./Marker.tsx";
import { useAtom } from "jotai";

import { shopsAtom } from "./atom.tsx";
import { ShopInfo } from "./ShopInfo.tsx";
import { useEffect } from "react";

export default function IndexView() {
  const [shops, setShops] = useAtom(shopsAtom);

  const position = {
    lat: 35.17100383703858,
    lng: 136.88064007022157,
  } as google.maps.LatLngLiteral;

  const API_URL = process.env.VITE_API_URL!;

  // useEffect(() => {
  //   fetch(`${API_URL}/shops`)
  //       .then(res => res.json())
  //       .then(data => setShops(data))
  // }, []);

  const API_KEY: string = process.env.VITE_API_KEY!;

  return (
    <>
      <h1>HERE Map</h1>
      <HereMap />
    </>
  );
}
