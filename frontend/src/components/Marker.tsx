import React, {useState, useEffect} from "react";
import {useAtom, useSetAtom} from "jotai";

import {shopsAtom, selectShopAtom} from "./atom.tsx";

export const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  const setSelectShop = useSetAtom(selectShopAtom)
  const [shops] = useAtom(shopsAtom)

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  marker?.addListener('click', () => {
    if (options.map instanceof google.maps.Map) {
      const position = marker.getPosition()
      if (position) {
        options.map.panTo(position)
        setSelectShop(shops.filter(shop => shop.latitude === position.lat() && shop.longitude === position.lng()))
      }
    }
  })

  return null;
}