import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const icelandBounds: [[number, number], [number, number]] = [
    [63.0, -25.5], //southwest
    [66.7, -12.0]  //northeast
]

function BonusMap() {
    return (
        <>
            <MapContainer
                bounds={icelandBounds}
                maxBounds={icelandBounds}
                maxBoundsViscosity={1.0}
                minZoom={6}
                maxZoom={17}
                style={{ height: "100vh", width: "100%" }}    
            >
                <TileLayer 
                    attribution="&copy; OpenStreetMap contributors & Carto"
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    /*url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/
                />

                {/* Marker Examples */}
                <Marker position={[64.1466, -21.9426]}>
                    <Popup>Reykjavík, Iceland 🇮🇸</Popup>
                </Marker>

                <Marker position={[62.0, -6.8]}>
                    <Popup>Tórshavn, Faroe Islands 🇫🇴</Popup>
                </Marker>

            </MapContainer>
        </>
    )
}

export default BonusMap;