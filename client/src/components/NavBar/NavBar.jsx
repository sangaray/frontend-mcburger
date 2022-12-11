import React from "react"
import "./NavBar.css"
import BurgerLogo from "./BurgerLogo.png"

export default function NavBar(){
    return(
        <div>
            <div className="nav-container">
                <img src={BurgerLogo} alt="" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/delivery">Delivery</a></li>
                    <li><a href="/locations">Locations</a></li>
                </ul>

                <button className="button-login">Iniciar Sesión</button>
            </div>
        </div>
    )
}