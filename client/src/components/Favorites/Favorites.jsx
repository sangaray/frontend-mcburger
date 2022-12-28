import { removeProductFavorite, addToCart, removeFromCart, } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import {  Button, Box, Text } from '@chakra-ui/react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import img from "./BannerFav.png"
import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();

  const [productsFavorites,] = useSelector((state) => [
    state.productsFavorites,
  ]);
  const [product, cart] = useSelector((state) => [state.product, state.cart]);

  return (
    <div className="cont">
      <div>
        <NavBar/>
      </div>
      <Link to="/Selectmenu">
      <div>
        <img src={img}></img>
      </div>
      </Link>
      {productsFavorites.map((p) => (
        <div className="cards-container-fav">
          <div>
          <div className="bt">
              <button onClick={() => dispatch(removeProductFavorite(p))}>
                <RiDeleteBin6Line/>
              </button>
            </div>
            <img className="detailImg" src={p.image}  />
          </div>
          <div className="detailTextContainer">
            <h2 className="detailTitle">{p.name}</h2>
            <div className="detailLabelContainerPrice">
              <p className="detailLabelPrice">Price:</p>
              <p className="detailPrice">{p.price}</p>
            </div>
            <div className="detailLabelContainer">
              <p className="detailLabel">Detail:</p>
              <p className="detailSummary">{p.summary}</p>
            </div>
           {/*  <div className="detailLabelContainer">
              <p className="detailLabel">Ingredients:</p>
              <p>{p.ingredients}</p>
            </div> */}

              {!cart.hasOwnProperty(product[0].id) ? (
              <Button size='sm'  colorScheme='green' marginTop="20px" marginLeft='140px' onClick={() => dispatch(addToCart(product[0]))}>
                Add to cart
              </Button>
            ) : (
              <Box display="flex" justifyContent="center" alignItems="center" marginLeft='130px' color='green'  marginTop="15px"  >
                <Button marginRight="20px"  size='sm' onClick={() => dispatch(removeFromCart(product[0]))}>
                  -
                </Button>
                <Text as="b" fontSize='3xl'>{cart[product[0].id].quantity}</Text>
                <Button marginLeft="20px"  size='sm' onClick={() => dispatch(addToCart(product[0]))}>
                  +
                </Button>
              </Box>
            )}
          </div>
        </div>
      ))}
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
       <div>
        <Footer/>
      </div>
    </div>
  );
}
export default Favorites;