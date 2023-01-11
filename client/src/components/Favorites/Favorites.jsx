import {
  removeProductFavorite,
  addToCart,
  removeFromCart,
  getAllUserFavs,
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

function Favorites() {
  const dispatch = useDispatch();

  const [productsFavorites, user, cart] = useSelector((state) => [
    state.productsFavorites,
    state.user,
    state.cart,
  ]);




  useEffect(() => {

    //************************************************************
    let item = window.localStorage.getItem('userL');
    let a;
    if (item) {
      a = JSON.parse(item);
    } else {
      a = { email: '' };
    }

    //*************************************************************

    const test = async () => {
      if (a.email) {
        const favoritos = await getAllUserFavs(a.email)(dispatch);
        window.localStorage.setItem('favoritos', JSON.stringify(favoritos))
      }
    }

    test();

  }, [dispatch, user.email, productsFavorites]);

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
        {productsFavorites?.map((p) => (
          <div className="cards-container-fav">
            <div>
              <div className="bt">
                <button
                  onClick={() =>
                    removeProductFavorite({
                      product: p,
                      userId: user.email,
                    })(dispatch)
                  }
                >
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

/* import {
  removeProductFavorite,
  addToCart,
  removeFromCart,
  getAllUserFavs,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box, Text } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import img from "./BannerFav.png";
import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();

  const [productsFavorites, user, cart] = useSelector((state) => [
    state.productsFavorites,
    state.user,
    state.cart,
  ]);
  useEffect(() => {
    if (user.email) getAllUserFavs(user.email)(dispatch);
  }, [dispatch, user.email]);

  return (
    <div className="cont">
      <div>
        <NavBar />
      </div>
      <Link to="/Selectmenu">
        <div>
          <img src={img} alt=""></img>
        </div>
      </Link>
      {productsFavorites?.map((p) => (
        <div className="cards-container-fav" key={p.name}>
          <div>
            <div className="bt">
              <button
                onClick={() =>
                  removeProductFavorite({
                    product: p,
                    userId: user.email,
                  })(dispatch)
                }
              >
                <RiDeleteBin6Line />
              </button>
            </div>
            <img className="detailImg" src={p.image} alt="" />
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

            {!cart.hasOwnProperty(p.id) ? (
              <Button
                size="sm"
                colorScheme="green"
                marginTop="20px"
                marginLeft="140px"
                onClick={() => dispatch(addToCart(p))}
              >
                Add to cart
              </Button>
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginLeft="130px"
                color="green"
                marginTop="15px"
              >
                <Button
                  marginRight="20px"
                  size="sm"
                  onClick={() => dispatch(removeFromCart(p))}
                >
                  -
                </Button>
                <Text as="b" fontSize="3xl">
                  {cart[p.id].quantity}
                </Text>
                <Button
                  marginLeft="20px"
                  size="sm"
                  onClick={() => dispatch(addToCart(p))}
                >
                  +
                </Button>
              </Box>
            )}
          </div>
        </div>
      ))}
      <div className="container-acceso-directo">
        <div className="acceso-directo1">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671118229/mcburger/Prod11_outidc.png"
            alt="Imagen"
          />
          <h4>Classic Burger</h4>
          <Link to="/product/11">
            <button className="button-pediya1">Order Now</button>
          </Link>
        </div>

        <div className="acceso-directo2">
          <img
            src="https://www.freepnglogos.com/uploads/fries-png/premium-french-fries-photos-7.png"
            alt="Imagen"
          />
          <h4>French Fries</h4>
          <Link to="/product/52">
            <button className="button-pediya2">Order Now</button>
          </Link>
        </div>

        <div className="acceso-directo3">
          <img
            src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1671118234/mcburger/Prod64_zhudyu.png"
            alt="Imagen"
          />
          <h4>Offers</h4>
          <Link to="/product/64">
            <button className="button-pediya3">Order Now</button>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Favorites;
 */