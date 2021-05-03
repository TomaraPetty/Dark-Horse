import React, { useEffect, useRef, useState } from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './map.css';

const MapClass = (props) => {

  let coordinates = [props.lat, props.lon];

  // console.log("setCoords: ", setCoords)

  // useEffect(() => {
  //     handleCoords()
  // })


  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }
  return (
    //since this map is set to London, Ill have to change it to an object that takes in users inputs and changes with state
    <MapContainer center={coordinates} zoom={12} onChange={props.handleCoords}>

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
      <SetViewOnClick coords={coordinates} />
    </MapContainer >

  );
}
export default MapClass;