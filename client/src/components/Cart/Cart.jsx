import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductsToCart,
  removeFromCart,
  addToCart,
  deleteProductsCart,
} from "../../actions/index";
import { Box, Text, Button } from "@chakra-ui/react";
import CartCards from "../CartCards/CartCards";
import NavBar from "../NavBar/NavBar";
import { RiDeleteBin6Line } from "react-icons/ri";
import Footer from "../Footer/Footer"
import "./Cart.css"

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const [disableBtns, setDisableBtns] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentLink, setLink] = useState("");

  let arrProducts = [];
  let totalPrice = 0;
  let product_ids = [];
  let quantities = [];
  let products = "";

  Object.values(cartProducts).forEach((p) => {
    totalPrice += parseFloat(p.price.match(/\d+/g).join(".")) * p.quantity;
    arrProducts.push({
      title: p.name,
      unit_price: parseFloat(p.price.match(/\d+/g).join(".")),
      currency_id: "ARS",
      quantity: p.quantity,
      picture_url: p.image,
    });

    product_ids.push(p.id);
    quantities.push(p.quantity);
    products +=
      "<br/>Name: " +
      p.name +
      ", Quantity: " +
      p.quantity +
      ", Total: $" +
      parseFloat(p.price.match(/\d+/g).join(".")) * p.quantity;
  });

  async function handleOnPay(p) {
    setLoading(true);
    setDisableBtns(true);
    try {
      products += "<br/>Total price: $" + totalPrice;
      localStorage.setItem("shippingAddress", "shipping address");
      localStorage.setItem("billingAddress", "billing address");
      localStorage.setItem("productId", product_ids.join("-"));
      localStorage.setItem("quantity", quantities.join("-"));
      localStorage.setItem("totalPrice", totalPrice);
      localStorage.setItem("branchId", "1234");
      localStorage.setItem("msg", products);

      const link = await addProductsToCart(p)();
      setLink(link);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleOnAdd(p) {
    dispatch(addToCart(p));
  }

  function handleOnRemove(p) {
    dispatch(removeFromCart(p));
  }

  function handleOnDelete(p) {
    dispatch(deleteProductsCart(p));
  }

  const buttonPayment = () => {
    if (paymentLink) {
      return (<>
        <Button size='md' colorScheme='green'>
          <a href={paymentLink} >Go to payment</a>
        </Button>
      </>)
    } else {
      <></>
    }
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="total-cart-container">
        <text className="tittle-cart">Cart</text>
        <div className="cards-cart-container">

          <hr style={{ border: "grey solid 1px" }}></hr>
          {Object.values(cartProducts).map((p) => {
            return (
              <div className="card-cart">
                <div className="button-delete-cart">
                  <Button onClick={(e) => handleOnDelete(p)} bg={"#b5b5b5;"}>
                    <RiDeleteBin6Line />
                  </Button>
                </div>
                <CartCards image={p.image} />
                <div className="mid-cart-container">
                  <Text as="b">{p.name}&nbsp;&nbsp;{p.price}</Text>
                  <div className="button-cart-container">
                    <button onClick={(e) => handleOnRemove(p)} className="button-card-cart">
                      -
                    </button>
                    <Text margin={"10px"} as={"b"} color={"white"}>{p.quantity}</Text>
                    <button onClick={(e) => handleOnAdd(p)} className="button-card-cart">
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
        <hr style={{ border: "grey solid 1px" }}></hr>
        <div className="total-price">
          <text as="b" color="black" fontSize='2xl'>{"Total Price: $" + totalPrice}</text>
        </div>
        <hr style={{ border: "grey solid 1px" }}></hr>
        <div>
          <Button size='md' colorScheme='green' margin={"30px"}
            onClick={(e) => handleOnPay(arrProducts)}
            isDisabled={!disableBtns && arrProducts.length ? false : true}
          >
            {loading ? <p>Loading</p> : <p>Pay</p>}
          </Button >
          {buttonPayment()}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}