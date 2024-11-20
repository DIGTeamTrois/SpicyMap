import {Status, Wrapper} from "@googlemaps/react-wrapper";

import {Map} from "./Map";
import {Marker} from "./Marker.tsx";
import {useEffect} from "react";
import {useAtom, useSetAtom} from "jotai";

import {shopsAtom, menusAtom, commentsAtom, categoriesAtom} from "./atom.tsx";

export default function IndexView() {
  const position = {
    lat: 35.17179780732516,
    lng: 136.88172163100913
  } as google.maps.LatLngLiteral;

  const [shops, setShops] = useAtom(shopsAtom)
  const setMenus = useSetAtom(menusAtom)
  const setComments = useSetAtom(commentsAtom)
  const setCategories = useSetAtom(categoriesAtom)


  useEffect(() => {

    fetch("/shops")
        .then(res => res.json())
        .then(data => setShops(data))

    fetch("/menus")
        .then(res => res.json())
        .then(data => setMenus(data))

    fetch("/comments")
        .then(res => res.json())
        .then(data => setComments(data))

    fetch("/categories")
        .then(res => res.json())
        .then(data => setCategories(data))

  }, []);

  const markers:google.maps.LatLngLiteral[] = shops.map((value: object) => {
    return {lat: value.latitude, lng: value.longitude}
  })

    return (
        <div className='flex flex-row w-1/2 justify-center'>
          <Wrapper apiKey='AIzaSyAvSUDOsyJyk9Hotfx0PMVdyKnzSgngHKQ' render={render}>
            <Map style={{ width: '100%', aspectRatio: '16 / 9' }} center={position}>
              {markers.map((value) => {
                return <Marker position={value} />
              })}
            </Map>
          </Wrapper>
        </div>
    )
  }

const render = (status: Status) => {
  return <h1>{status}</h1>
}