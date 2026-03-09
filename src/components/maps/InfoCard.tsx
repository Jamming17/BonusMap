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
                        <div className="card-information">
                            <div className="shop-title-container">
                                <img
                                    src={bonusPig}
                                    alt="Bónus pig icon"
                                    className="shop-title-image"
                                    height="40px"
                                />
                                <div className="shop-title">{shop.name}</div>
                            </div>

                            <div className="bonus-info-outer-outer-container">
                                <div className="info">
                                    <div className="info-bold">
                                        {`${shop.postcode} ${shop.city}, ${shop.country}`}
                                    </div>
                                    <div className="shop-address-coordinates">
                                        {`Latitude: ${shop.latitude}, Longitude: ${shop.longitude}`}
                                    </div>
                                </div>
                                <div className="bonus-info-outer-container">
                                    <img className="bonus-thumbnail" src={`/shops/${shop.imageName}.jpg`} alt={`Image of ${shop.name}`} />
                                    <div className="bonus-info-container">
                                        <div className="info">Opening times: <span className="info-bold">{shop.openingTimes}</span></div>
                                        {shop.dateOpened && <div className="info">Opened: <span className="info-bold">{shop.dateOpened}</span></div>}
                                        {shop.dateClosed && <div className="info info-red">Closed: <span className="info-bold">{shop.dateClosed}</span></div>}
                                        {shop.info && <div className="info">{shop.info}</div>}
                                    </div>
                                </div>
                            </div>
                            {shop.nearby.length > 0 &&
                                <>
                                    <div className="nearby-title">Nearby:</div>
                                    {shop.nearby &&
                                        <div className="nearby-outer-container">
                                            {shop.nearby.map((n, index) => (
                                                <div key={index} className="nearby-container info">
                                                    <img className="nearby-thumbnail" src={`/nearby/${n.imageName}.jpg`} alt={`Image of ${n.name}`} />
                                                    <div className="nearby-details">
                                                        <div className="info-bold">{n.name}</div>
                                                        <div className="nearby-description">{n.description}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </>
                            }
                        </div>
                    </>
                }
            </div>
    );
}

export default InfoCard;