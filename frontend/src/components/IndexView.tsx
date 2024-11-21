import {Status, Wrapper} from "@googlemaps/react-wrapper";
// import 'dotenv/config'

import {Map} from "./Map";
import {Marker} from "./Marker.tsx";
import {useAtom} from "jotai";

import {shopsAtom} from "./atom.tsx";
import {ShopInfo} from "./ShopInfo.tsx";

export default function IndexView() {

  const [shops] = useAtom(shopsAtom)

  const position = {
    lat: 35.17100383703858,
    lng: 136.88064007022157
  } as google.maps.LatLngLiteral;

    const markers:google.maps.LatLngLiteral[] = shops.map((shop) => {
      return {lat: shop.latitude, lng: shop.longitude}
    })

  // console.log(process.env.REACT_APP_APIKEY)

    return (
      <div className='flex flex-row w-1/2 justify-center'>
        <Wrapper apiKey='AIzaSyAvSUDOsyJyk9Hotfx0PMVdyKnzSgngHKQ' render={render}>
          <Map style={{ width: '100%', aspectRatio: '16 / 9' }} center={position}>
            {markers.map((value, index) => {
              return <Marker key={index} position={value} />
            })}
          </Map>
            <ShopInfo />
        </Wrapper>
      </div>
  )
}

const render = (status: Status) => {
  return <h1>{status}</h1>
}