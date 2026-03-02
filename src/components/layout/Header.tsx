import { NavLink } from "react-router-dom";
import "./styles/header.css";

function Header() {

    return(
        <nav className="header-container">
            
            <NavLink to="/" className={({ isActive }) => `header-navlink ${isActive ? "active" : ""}`}>
                <div className="header-item">Home</div>
            </NavLink>

            <NavLink to="/map" className="header-navlink" style={({ isActive }) => ({ pointerEvents: isActive ? "none" : "auto" })}>
                <div className="header-item">Map</div>
            </NavLink>

            <NavLink to="/adventure" className="header-navlink" style={({ isActive }) => ({ pointerEvents: isActive ? "none" : "auto" })}>
                <div className="header-item">Adventure</div>
            </NavLink>

        </nav>
    );
}

export default Header;