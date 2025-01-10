import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Example places
const places = [
    { name: "Franklin Barbecue, Austin", lat: 30.2701, lng: -97.7311 },
    { name: "Joe's Bakery, Austin", lat: 30.2602, lng: -97.7197 },
    { name: "La Barbecue, Austin", lat: 30.2499, lng: -97.7331 },
    // Add more places here
];

function foodmap() {
    return (
        <div style={{ height: "500px", width: "100%" }}>
            <Map center={[30.2672, -97.7431]} zoom={10} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {places.map((place, index) => (
                    <Marker key={index} position={[place.lat, place.lng]}>
                        <Popup>{place.name}</Popup>
                    </Marker>
                ))}
            </Map>
        </div>
    );
}

export default foodmap;
