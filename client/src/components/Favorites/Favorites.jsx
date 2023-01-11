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
    if (user.email) getAllUserFavs(user.email)(dispatch);
  }, [dispatch, user.email]);

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
