import { type BonusShop } from "../../utils/bonusJsonParser";
import bonusPig from "../../assets/bonus.png";
import "./styles/info-card.css";

type InfoCardProps = {
    shop: BonusShop | null;
    onClose: () => void;
}

function InfoCard({ shop, onClose }: InfoCardProps) {

    return (
            <div className={`info-card ${shop ? "open" : ""}`}>
                {shop !== null &&
                    <>
                        <button className="card-close-button" onClick={onClose}>✕</button>
                        <div>
                            <div className="shop-title-container">
                                <img
                                    src={bonusPig}
                                    alt="Bónus pig icon"
                                    className="shop-title-image"
                                    height="40px"
                                />
                                <div className="shop-title">{shop.name}</div>
                            </div>

                            <div className="shop-address-container">
                                <div className="shop-address">
                                    {`${shop.postcode} ${shop.city}, ${shop.country}`}
                                </div>
                                <div className="shop-address-coordinates">
                                    {`Latitude: ${shop.latitude}, Longitude: ${shop.longitude}`}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
    );
}

export default InfoCard;