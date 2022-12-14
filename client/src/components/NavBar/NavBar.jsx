import React from "react"
import "./NavBar.css"
import BurgerLogo from "./BurgerLogo.png"
import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div>
            <div className="nav-container">
                <img src={BurgerLogo} alt="" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Selectmenu">Menu</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/delivery">Delivery</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                </ul>

                <button className="button-login">Iniciar Sesión</button>
            </div>
        </div>
    )
}