import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import Example from "../carousel/carousel";
import { Link } from "react-router-dom";
import "./Home.css" 



export default function Home(){

    return(
        <div className="main-container-home">
            <div>
                <NavBar/>
            </div>
            <div className="carousel">
               <Example/>
            </div>
          {/*   <div className="p-b-main">
             <div className="phrase-button">
                <div className="phrase">
                    <h1 className="phrase-home">¿QUÉ TE APETECE PEDIR</h1>
                    <span className="phrase-span">HOY?</span>
                </div>

                <div>
                    <Link to="/Selectmenu">
                    <button className="button-pediya">Order Now</button>
                    </Link>
                </div>
             </div>   
            </div>    */} 

            <div className="container-acceso-directo">
                <div className="acceso-directo1">
                    <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671118229/mcburger/Prod11_outidc.png" alt="Imagen" />
                    <h4>Classic Burger</h4>
                    <Link to="/product/11">
                    <button className="button-pediya1">Order Now</button>
                    </Link>
                </div>

                <div className="acceso-directo2">
                    <img src="https://www.freepnglogos.com/uploads/fries-png/premium-french-fries-photos-7.png" alt="Imagen" />
                    <h4>French Fries</h4>
                    <Link to="/product/52">
                    <button className="button-pediya2">Order Now</button>
                    </Link>
                </div>

                <div className="acceso-directo3">
                    <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671118234/mcburger/Prod64_zhudyu.png" alt="Imagen" />
                    <h4>Offers</h4>
                    <Link to="/product/64">
                    <button className="button-pediya3">Order Now</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>

      
    )
}