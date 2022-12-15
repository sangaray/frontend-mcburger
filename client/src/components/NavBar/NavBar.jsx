import React, { useState }  from "react"
import "./NavBar.css"
import BurgerLogo from "./BurgerLogo.png"
import { Link } from "react-router-dom"
import { BsCart2 } from 'react-icons/bs'
import CartList from "../CartList/CartList"
export default function NavBar() {

    const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

    return (
        <div>
            <div className="nav-container">
                <img src={BurgerLogo} alt="." />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Selectmenu">Menu</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
                <button onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>{hover ?
                    <div>
                        <BsCart2 />
                        <CartList />
                    </div>
                        : <BsCart2 />
                }
                </button>
            </div>
        </div>
    )
}