import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useSwr from "swr";
import "./map.css"

const fetcher = (...args) => fetch(...args).then(response => response.json());


//The url currently provide is of a crime report in London lol. Once I have the user data ill be able to plug that in and change the map
export default function leafMap() {
    const url =
        "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    const { data, error } = useSwr(url, { fetcher });
    const crimes = data && !error ? data.slice(0, 300) : [];

    return (
        //since this map is set to London, Ill have to change it to an object that takes in users inputs and changes with state
        <MapContainer center={[52.6376, -1.135171]} zoom={12}>
            {/* This gives us the design of the map. There different stylings if we dont like this one */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/*This maps through the json provided in the url and creates a pin on the map. Once the user data is provide, Ill plug it in and map it like so */}
            {crimes.map(crime => (
                <Marker
                    key={crime.id}
                    position={[crime.location.latitude, crime.location.longitude]}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
                </Marker>

            ))}
        </MapContainer>
    );
}