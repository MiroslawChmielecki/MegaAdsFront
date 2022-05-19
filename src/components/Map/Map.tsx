import React, {useContext, useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from 'types';

import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import {SingleAd} from "./SingleAd";

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    //useEffect czyli zrób efekt uboczny to wszystko co nie jest renderowaniem widoku
    //kod w tym useEffect uruchamia sie za kazdym razem gdy zmienia sie search
    // useEffect(() => {
    //     console.log('Make request to search for', search)
    // }, [search]);

    useEffect(() => {
        (async () => {
          const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const data = await res.json();
            setAds(data);
        })()
    }, [search]);

    return (
        <div className="map">
            <MapContainer center={[50.0211459, 22.6680963]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    ads.map(ad => (
                    <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                        <Popup>
                           <SingleAd id={ad.id}/>
                        </Popup>
                    </Marker>
                ))
                }
            </MapContainer>
        </div>
    )
}