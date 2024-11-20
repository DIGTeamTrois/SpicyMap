import {Status, Wrapper} from "@googlemaps/react-wrapper";

import {Map} from "./Map";
import {Marker} from "./Marker.tsx";

export default function IndexView() {
  const position = {
    lat: 35.05236,
    lng: 137.158124
  } as google.maps.LatLngLiteral;

  const markers:google.maps.LatLngLiteral[] = [{ lat: 35.05248012132195, lng: 137.15799662136962},
    { lat: 35.05174504529129, lng: 137.1601670570198},
    { lat: 35.05294216575714, lng: 137.1574732539703},
    { lat: 35.051598029287405, lng: 137.155898020568},
    { lat: 35.049829616046765, lng: 137.16082383185855}]

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