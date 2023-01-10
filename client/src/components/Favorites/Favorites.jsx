import {
  removeProductFavorite,
  addToCart,
  removeFromCart,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box, Text, Image } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import img from "./BannerFav.png";
import "./Favorites.css";
import { useState } from "react";
import { ReactDOM } from "react-dom";
//import { useLocalStorage } from "../../useLocalStorage";

function Favorites() {
  const dispatch = useDispatch();

  const [productsFavorites] = useSelector((state) => [state.productsFavorites]);
 

  
  return (
    <div className="cont">
      
      <div>
        <NavBar />
      </div>
      <Link to="/Selectmenu">
        <Box display={"flex"} justifyContent={"center"}>
          <Image w={"700px"} src={img}></Image>
        </Box>
        <hr style={{ border: "grey solid 1px" }} />
      </Link>
   
      <div className="cont-fav-cards">
        {productsFavorites.map((p) => (
          
        
            <div className="cards-container-fav">
              
              <div>
               
                <div className="bt">
                  <button onClick={() => dispatch(removeProductFavorite(p))}>
                    <RiDeleteBin6Line />
                  </button>
                </div>
                <img className="detail-Img" src={p.image} />
              </div>
              <div className="detail-Text-Container">
                <Box textAlign={"center"}>
                  <Text className="detail-Title">{p.name}</Text>
                </Box>
                <div className="detail-Label-Container-Price">
                  <p className="detailLabelPrice">Price: </p>
                  <p>&nbsp;&nbsp;</p>
                  <p className="detailPrice">{p.price}</p>
                </div>
                <div className="detailLabelContainer"></div>
              <Link to={"/product/" + p.id} key={p.id}>
                <Button size='md' colorScheme='orange' marginLeft={"39%"} marginBottom={"5%"}>Detail</Button>
              </Link>
              </div>
            </div>
          
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Favorites;
