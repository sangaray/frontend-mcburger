import React from "react";
import NavBar from "../NavBar/NavBar";
import "./News.css"

export default function News(){
    return(
        <div>
            <div>
                <NavBar/>
            </div>

            <div className="news-container">
                <div className="art-1">
                    <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/novedeades-muzzasticks.png" alt="imagen" />
                    <p>Our McBurger Muzzarella Sticks Nuggets are coming!</p>
                </div>

                <div className="art-1">
                    <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/NovedadesBanner_KINGVEGETAL.jpg" alt="imagen" />
                    <p>you will see our new line of vegan food soon #Environment</p>
                </div>

                <div className="art-1">
                    <img src="https://img.freepik.com/vector-premium/entrega-rapida-estilo-plano-servicio-entrega-alimentos-mensajero-monta-moto-mercancias_194782-1002.jpg?w=2000" alt="imagen" />
                    <p>Home delivery coming soon at McBuger!!!</p>
                </div>
            </div>
        </div>
    )
}