import React, {useContext, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";

import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {
    const {search} = useContext(SearchContext);

    //useEffect czyli zrób efekt uboczny to wszystko co nie jest renderowaniem widoku
    //kod w tym useEffect uruchamia sie za kazdym razem gdy zmienia sie search
    useEffect(() => {
        console.log('Make request to search for', search)
    }, [search]);

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
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