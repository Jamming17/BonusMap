import { Link } from "react-router-dom";
import bonusPig from "../../assets/bonus.png";
import "./styles/textpage.css";

function HomePage() {

    return(
        <div className="textpage-container">
            <div className="textpage-title">Welcome to Bónus Adventures!</div>
            <div className="text">
                This website is the place for all Bónus fans! My name is Jack and I am from England. Iceland is my
                favourite country because it's where my boyfriend Tómas lives. One of Iceland's biggest discount supermarkets
                is Bónus which has an adorable pig mascot and an awesome shopping experience!
            </div>
            <div className="bonus-image-container">
                <img className="bonus-image" src={bonusPig} alt="Bónus's awesome pig mascot" />
            </div>
            <div className="text">
                After visiting Iceland twice and consistently enjoying my experience at several Bónus stores, I decided
                to start this little adventure. The adventure has one goal: <span className="text-bold">to visit every Bónus ever</span>!
            </div>
            <div className="text">
                The adventure begins with the 20 Bónus stores in the capital region, as of the start of 2026. There are 13 more Bónus
                stores further afield around Iceland as far as Egilsstaðir! Then there are 8 more Bónus stores on the Faroe Islands.
                This website covers them all. Tómas and I plan to visit every Bónus store, take a photo in front of it and
                purchase one unique item from each one!
            </div>
            <div className="text">
                Visit the <Link to="/map">Bónus Map</Link> to view an interactive map of all Bónus stores around Iceland and
                the Faroe Islands, including some interesting information about each one and a few tourist attractions nearby.
                Don't think that this is an exclusive list though! There is plenty more to do around Iceland and more may
                be added in future.
            </div>
            <div className="text">
                Visit the <Link to="/adventure">Adventure</Link> page to see my adventure around all Bónus stores with my
                boyfriend Tómas. It will get updated as we travel!
            </div>
            <div className="text">
                Thanks for visiting my site! Hopefully I have inspired you to go out and visit cool places!
            </div>
        </div>
    );
}

export default HomePage;