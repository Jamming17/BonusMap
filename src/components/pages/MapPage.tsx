import { useState } from "react";
import BonusMap from "../maps/BonusMap";
import "./styles/mappage.css";

function MapPage() {

    const [ selectedCountry, setSelectedCountry ] = useState<"Iceland" | "Faroe Islands">("Iceland");

    function handleSelectIceland() {
        setSelectedCountry("Iceland");
    }

    function handleSelectFaroeIslands() {
        setSelectedCountry("Faroe Islands");
    }

    return(
        <>
            <div className="map-buttons-container">
                <div className={`map-button ${selectedCountry === "Iceland" ? "selected" : "unselected"}`} onClick={handleSelectIceland}>
                    Iceland 🇮🇸
                </div>
                <div className={`map-button ${selectedCountry !== "Iceland" ? "selected" : "unselected"}`} onClick={handleSelectFaroeIslands}>
                    Faroe Islands 🇫🇴
                </div>
            </div>
            <BonusMap country={selectedCountry}/>
        </>
    );
}

export default MapPage;