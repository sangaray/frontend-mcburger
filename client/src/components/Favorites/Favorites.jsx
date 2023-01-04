import {
  removeProductFavorite,
  addToCart,
  removeFromCart,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box, Text, Image } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import img from "./BannerFav.png";
import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();

  const [productsFavorites] = useSelector((state) => [state.productsFavorites]);
  const [product, cart] = useSelector((state) => [state.product, state.cart]);

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
                <Button size='lg' colorScheme='orange' marginLeft={"40"}>Detail</Button>
              </Link>
                {/* {!cart.hasOwnProperty(product[0].id) ? (
                  <Button
                    size="sm"
                    colorScheme="green"
                    marginLeft="150px"
                    onClick={() => dispatch(addToCart(product[0]))}
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
                      onClick={() => dispatch(removeFromCart(product[0]))}
                    >
                      -
                    </Button>
                    <Text as="b" fontSize="3xl">
                      {cart[product[0].id].quantity}
                    </Text>
                    <Button
                      marginLeft="20px"
                      size="sm"
                      onClick={() => dispatch(addToCart(product[0]))}
                    >
                      +
                    </Button>
                  </Box>
                )} */}
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
