import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../actions";
import NavBar from "../NavBar/NavBar"
import "./Home.css" 


export default function Home(){

    return(
        <div className="main-container-home">
            <div>
                <NavBar/>
            </div>

            <div className="p-b-main">
             <div className="phrase-button">
                <div className="phrase">
                    <h1 className="phrase-home">¿QUÉ TE APETECE PEDIR</h1>
                    <span className="phrase-span">HOY?</span>
                </div>

                <div>
                    <button className="button-pediya">Pedí Ya</button>
                </div>
             </div>   
            </div>    

            <div className="container-acceso-directo">
                <div className="acceso-directo1">
                    <img src="https://freepngimg.com/thumb/burger/2-2-burger-free-download-png.png" alt="Imagen" />
                    <h4>Classic Burguer</h4>
                    <button className="button-pediya">Pedí Ya</button>
                </div>

                <div className="acceso-directo2">
                    <img src="https://www.freepnglogos.com/uploads/fries-png/premium-french-fries-photos-7.png" alt="Imagen" />
                    <h4>French Fries</h4>
                    <button className="button-pediya">Pedí Ya</button>
                </div>

                <div className="acceso-directo3">
                    <img src="https://mcdonalds.es/api/cms/images/mcdonalds-es/0620332b-4f49-4453-b1cb-0a02b0d475d4_500x500_Cajas-HM.png?auto=compress,format" alt="Imagen" />
                    <h4>Happy Meal</h4>
                    <button className="button-pediya">Pedí Ya</button>
                </div>
            </div>

        </div>

      
    )
}