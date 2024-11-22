import {Status, Wrapper} from "@googlemaps/react-wrapper";

import {Map} from "./Map";
import {Marker} from "./Marker.tsx";
import {useAtom} from "jotai";

import {shopsAtom} from "./atom.tsx";
import {ShopInfo} from "./ShopInfo.tsx";
import {useEffect} from "react";

export default function IndexView() {

  const [shops, setShops] = useAtom(shopsAtom)

  const position = {
    lat: 35.17100383703858,
    lng: 136.88064007022157
  } as google.maps.LatLngLiteral;

  const API_URL = process.env.VITE_API_URL!;

  useEffect(() => {
    fetch(`${API_URL}/shops`)
        .then(res => res.json())
        .then(data => setShops(data))
  }, []);

    const markers:google.maps.LatLngLiteral[] = shops.map((shop) => {
      return {lat: shop.latitude, lng: shop.longitude}
    })


  const API_KEY: string = process.env.VITE_API_KEY!;

  return (
      <div className='flex flex-row w-1/2 justify-center'>
        <Wrapper apiKey={API_KEY} render={render}>
          <div className={"main_screen"}>
            <Map style={{ width: '100%', aspectRatio: '16 / 9' }} center={position}>
              {markers.map((value, index) => {
                return <Marker key={index} position={value} />
              })}
            </Map>
            <ShopInfo />
          </div>
        </Wrapper>
      </div>
  )
}

const render = (status: Status) => {
  return <h1>{status}</h1>
}