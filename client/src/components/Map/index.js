import React, { useEffect, useRef, useState } from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.css';

const MapClass = (props) => {

  let coordinates = [props.lat, props.lon];
  let setCoords = []
  console.log("coordinates: ", coordinates)
  // console.log("setCoords: ", setCoords)

  useEffect(() => {
    handleCoords()
  })

  function handleCoords() {

    if (coordinates === "") {
      setCoords = [34.05224, -118.24334];
      return setCoords
    } else {
      setCoords = [coordinates]
      return setCoords
    }
  }

  return (
    //since this map is set to London, Ill have to change it to an object that takes in users inputs and changes with state
    <MapContainer center={coordinates} zoom={12} >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <MarkerClusterGroup
                    zoomToBoundsOnClick={true}
                    animate={true}
                    showCoverageOnHover={true}
                    removeOutsideVisibleBounds={true}
                >
                    {crimes.map((crime) => (
                        <Marker
                            key={crime.id}
                            position={[crime.location.latitude, crime.location.longitude]}
                        >
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup> */}
    </MapContainer >
  );

}
export default MapClass;