import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import "./News.css"
import { Box, Text, Button, Input } from "@chakra-ui/react";

export default function News() {
    return (
        <Box>
            <Box>
                <NavBar />
            </Box>

            <Box display={"flex"} justifyContent={"space-around"} mt={"100px"} >
                <Box className="art-1">
                    <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/novedeades-muzzasticks.png" alt="imagen" />
                    <p>Our McBurger Muzzarella Sticks Nuggets are coming!</p>
                </Box>

                <Box className="art-1">
                    <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/NovedadesBanner_KINGVEGETAL.jpg" alt="imagen" />
                    <p>you will see our new line of vegan food soon #Environment</p>
                </Box>

                <Box className="art-1">
                    <img src="https://img.freepik.com/vector-premium/entrega-rapida-estilo-plano-servicio-entrega-alimentos-mensajero-monta-moto-mercancias_194782-1002.jpg?w=2000" alt="imagen" />
                    <p>Home delivery coming soon at McBurger!!!</p>
                </Box>
            </Box>

            <Box display={"flex"} justifyContent={"space-around"} mt={"100px"} >
                <Box className="art-1">
                    <img src="https://res.cloudinary.com/djthhahkr/image/upload/v1672663961/cb361650-4730-4f5e-b796-b0fddc37a041_hnqypa.jpg" alt="imagen" />
                    <p>Burger coming for mcBurger with new XL sandwich!</p>
                </Box>

                <Box className="art-1">
                    <img src="https://res.cloudinary.com/djthhahkr/image/upload/v1672663835/Burker-King-New-Impossible-King-Burger_jwt9qt.jpg" alt="imagen" />
                    <p>mcBurger to debut 2 new plant-based Impossible offerings</p>
                </Box>

                <Box className="art-1">
                    <img src="https://res.cloudinary.com/djthhahkr/image/upload/v1672663835/man-eating-burger-reading-news-phone-while-sitting-carfast-food-takeaway-snacks-road_332246-341_vd3oun.webp" alt="imagen" />
                    <p>Do you want to eat from your car? Mcburger car coming soon</p>
                </Box>
            </Box>

            <Box mt={"100px"}>
                <Footer />
            </Box>
        </Box>
    )
}