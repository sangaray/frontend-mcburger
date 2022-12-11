import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { getProductID } from "../../store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductID(id));
  }, [id, dispatch]);

  const product = useSelector((state) => state.products.products[0]);

  return (
    <div>
      <NavBar />
      {
        product ? 
        <div className="detailContainer">
        <div className="innerDetailContainer">
          <div className="detailImgContainer">
            <img
              className="detailImg"
              src={product?.image}
              alt={product?.name}
            />
          </div>
          <div className="detailTextContainer">
            <h2 className="detailTitle">{product?.name}</h2>

            <div className="detailLabelContainerPrice">
              <p className="detailLabelPrice">Price:</p>
              <p className="detailPrice">{product?.price}</p>
            </div>

            <div className="detailLabelContainer">
              <p className="detailLabel">Details:</p>
              <p>{product?.summary}</p>
            </div>

            <div className="detailLabelContainer">
              <p className="detailLabel">Ingredients:</p>
              <p>{product?.ingredients}</p>
            </div>
          </div>
        </div>
      </div> 
      :
      <div className="detailContainer">
        <div className="innerDetailContainer">
          <h1 className="unknownProduct">
            404 Opps, it seems we don't have that product :(
          </h1>
        </div>

      </div>
      }
    </div>
  );
}

export default Details;
