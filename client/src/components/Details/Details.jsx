import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { getProductID, addToCart, deleteFromCart } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductID(id));
  }, [id, dispatch]);

  const [product, cart] = useSelector((state) => [state.product, state.cart]);

  return (
    <div>
      <NavBar />
      {product[0] ? (
        <div className="detailContainer">
          <div className="innerDetailContainer">
            <div className="detailImgContainer">
              <img
                className="detailImg"
                src={product[0]?.image}
                alt={product[0]?.name}
              />
            </div>
            <div className="detailTextContainer">
              <h2 className="detailTitle">{product[0]?.name}</h2>

              <div className="detailLabelContainerPrice">
                <p className="detailLabelPrice">Price:</p>
                <p className="detailPrice">{product[0]?.price}</p>
              </div>

              <div className="detailLabelContainer">
                <p className="detailLabel">Details:</p>
                <p>{product[0]?.summary}</p>
              </div>

              <div className="detailLabelContainer">
                <p className="detailLabel">Ingredients:</p>
                <p>{product[0]?.ingredients}</p>
              </div>
            </div>
            {!cart.hasOwnProperty(product[0].id) ? (
              <button onClick={() => dispatch(addToCart(product[0]))}>
                Add to cart
              </button>
            ) : (
              <div>
                <button onClick={() => dispatch(deleteFromCart(product[0]))}>
                  -
                </button>
                <p>{cart[product[0].id].quantity}</p>
                <button onClick={() => dispatch(addToCart(product[0]))}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
<<<<<<< HEAD
      ) : (
        <div className="detailContainer">
          <div className="innerDetailContainer">
            <h1 className="unknownProduct">
              404 Opps, it seems we don't have that product :(
            </h1>
          </div>
=======
      </div> 
      :
      <div className="detailContainer">
        <div className="innerDetailContainer">
          <h1 className="unknownProduct">
            404 Opps, it seems we don't have that product
          </h1>
>>>>>>> 92922a6ad0be9e90aa03e86619adf7afd0c2e700
        </div>
      )}
    </div>
  );
}

export default Details;