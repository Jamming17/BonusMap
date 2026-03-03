import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { type BonusShop } from "../../utils/bonusJsonParser";
import bonusPig from "../../assets/bonus.png";
import bonusPigPin from "../../assets/bonus-pin.png";
import "./styles/bonus-marker.css";

type BonusMarkerProps = {
    shop: BonusShop;
}


const bonusIcon = new Icon({
  iconUrl: bonusPigPin,
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [42, 60],
  iconAnchor: [21, 41],
});

function BonusMarker({ shop }: BonusMarkerProps) {
    return(
        <div className="marker-outer">
            <Marker
                key={shop.id}
                position={[shop.latitude, shop.longitude]}
                icon={bonusIcon}
            >
                <Popup minWidth={220}>
                    <div className="marker-popup">
                        <img
                            src={bonusPig}
                            alt="Bónus pig icon"
                            className="marker-popup-image"
                            height="30px"
                        />

                        <div>
                            {shop.name}<br />
                            {`${shop.postcode}, ${shop.city}, ${shop.country}`}
                        </div>
                    </div>
                </Popup>
            </Marker>
        </div>
    );
}

export default BonusMarker;