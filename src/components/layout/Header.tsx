import { NavLink } from "react-router-dom";
import "./styles/header.css";

function Header() {

    return(
        <div className="header-container">
            
            <NavLink to="/" className={({ isActive }) => `header-navlink ${isActive ? "active" : ""}`}>
                <div className="header-item">Home</div>
            </NavLink>

            <NavLink to="/map" className="header-navlink" style={({ isActive }) => ({ pointerEvents: isActive ? "none" : "auto" })}>
                <div className="header-item">Map</div>
            </NavLink>

            <NavLink to="/adventure" className="header-navlink" style={({ isActive }) => ({ pointerEvents: isActive ? "none" : "auto" })}>
                <div className="header-item">Adventure</div>
            </NavLink>

        </div>
    );
}

export default Header;