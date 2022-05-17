import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import '../../utils/fix-map-icon';

import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {

    return (
        <div className="map">
            <MapContainer center={[50.0211459,22.6680963]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.0211459,22.6680963]}>
                    <Popup>
                        <h2>Miro company</h2>
                        <p>Super firma :)</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}