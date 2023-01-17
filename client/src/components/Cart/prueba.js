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
    <Box>
      <Box>
        <NavBar />
      </Box>

      <Box display={"grid"} width={"100%"} justifyContent={"center"} grid-template-columns="repeat(auto-fill, minmax(250px, 400px))">
        <Box
          display={"grid"} textAlign="center" bg="#D9D9D9" marginTop="10px" borderRadius="10px" height="auto" width="100%" marginBottom="20px"
        >
          <Text as="b" fontSize='3xl'>Cart</Text>
          <hr style={{ border: "grey solid 1px" }}></hr>
          {Object.values(cartProducts).map((p) => {
            return (
              <Box display="flex" marginLeft={"-20px"} alignItems="center" justifyContent={"center"} key={p.id + p.name}>

                <CartCards name={p.name} image={p.image} price={p.price} />

                <Button
                  size={"sm"}
                  marginTop={"320px"}
                  marginLeft={"-220px"}
                  colorScheme='green'
                  onClick={(e) => handleOnRemove(p)}
                  isDisabled={disableBtns}
                >
                  -
                </Button>
                <Text marginLeft="10px" marginRight="10px" as="b" fontSize='2xl' marginTop={"320px"}>{p.quantity}</Text>
                <Button
                  size={"sm"}
                  marginTop={"320px"}
                  colorScheme='green'
                  onClick={(e) => handleOnAdd(p)}
                  isDisabled={disableBtns}
                >
                  +
                </Button>
                <Button /* marginLeft="10px" size={"sm"} marginTop={"-50px"} */
                  backgroundColor="#8888884f"
                  borderRadius="5px"
                  size={"sm"}
                  fontSize={"18"}
                  marginLeft="4.8%"
                  padding={"3px"}
                  paddingTop="2px"
                  marginTop={"-360px"}
                  color="#651616"
                  onClick={(e) => handleOnDelete(p)}
                  isDisabled={disableBtns}
                >
                  <RiDeleteBin6Line />
                </Button>
              </Box>
            );
          })}

          <Text as="b" color="black" fontSize='2xl' marginLeft="30px">{"Total Price: $" + totalPrice}</Text>
          <hr style={{ border: "grey solid 1px" }}></hr>
          <Box marginLeft="1300px" marginBottom="50px" marginTop="40px">
            <Button size='md' colorScheme='green' marginLeft="-1285px"
              onClick={(e) => handleOnPay(arrProducts)}
              isDisabled={!disableBtns && arrProducts.length ? false : true}
            >
              {loading ? <p>Loading</p> : <p>Pay</p>}
            </Button >
            {buttonPayment()}
          </Box>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}