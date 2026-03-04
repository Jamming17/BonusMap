import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import BonusMarker from "./BonusMarker";
import { parseJSON, type BonusShop } from "../../utils/bonusJsonParser";
import "./styles/bonus-map.css";

import RawIcelandData from "../../data/bonus-is.json";
import RawFaroeIslandsData from "../../data/bonus-fo.json";
import InfoCard from "./InfoCard";

type BonusMapProps = {
    country: "Iceland" | "Faroe Islands";
}

const ICELAND_ZOOM: number = 17;
const ICELAND_BOUNDS: [[number, number], [number, number]] = [
    [63.0, -25.5], //southwest
    [66.7, -12.0]  //northeast
]
const ICELAND_DATA: BonusShop[] = parseJSON(JSON.stringify(RawIcelandData["bonus-locations"]));

const FAROE_ISLANDS_ZOOM = 17;
const FAROE_ISLANDS_BOUNDS: [[number, number], [number, number]] = [
    [61.35, -7.75], // southwest
    [62.45, -6.20]  // northeast
]
const FAROE_ISLANDS_DATA: BonusShop[] = parseJSON(JSON.stringify(RawFaroeIslandsData["bonus-locations"]));

function BonusMap({ country }: BonusMapProps) {

    const [ selectedShop, setSelectedShop ] = useState<BonusShop | null>(null);

    const countryIsIceland = country === "Iceland";
    const data = (countryIsIceland) ? ICELAND_DATA : FAROE_ISLANDS_DATA;

    function handleClose() {
        setSelectedShop(null);
    }

    return (
        <>
            <div className="map-container">
                {/* Map */}
                <MapContainer
                    key={country}
                    bounds={(countryIsIceland) ? ICELAND_BOUNDS : FAROE_ISLANDS_BOUNDS}
                    maxBounds={(countryIsIceland) ? ICELAND_BOUNDS : FAROE_ISLANDS_BOUNDS}
                    maxBoundsViscosity={1.0}
                    minZoom={6}
                    maxZoom={(countryIsIceland) ? ICELAND_ZOOM : FAROE_ISLANDS_ZOOM}
                    className="map-view"
                >
                    <TileLayer 
                        attribution="&copy; OpenStreetMap contributors & Carto"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {(data.map((shop) => (
                        <BonusMarker shop={shop} onClick={() => {setSelectedShop(shop)}}/>
                    )))}

                </MapContainer>
            </div>

            <div className={`backdrop ${selectedShop ? "show" : ""}`}
                onClick={handleClose}
            />
            
            {/* Popup Card */}
            <InfoCard shop={selectedShop} onClose={handleClose}/>
        </>
    )
}

export default BonusMap;