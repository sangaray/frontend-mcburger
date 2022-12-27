import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductsToCart,
  removeFromCart,
  addToCart,
  deleteProductsCart,
} from "../../actions/index";
import { Box, Image, Text, Button,  Divider } from '@chakra-ui/react';
import CartCards from "../CartCards/CartCards";
import NavBar from "../NavBar/NavBar";
import { auto } from '@popperjs/core';

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const [disableBtns, setDisableBtns] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentLink, setLink] = useState("");

  let arrProducts = [];
  let totalPrice = 0;

  Object.values(cartProducts).map((p) => {
    totalPrice += parseFloat(p.price.match(/\d+/g).join(".")) * p.quantity;
    arrProducts.push({
      title: p.name,
      unit_price: parseFloat(p.price.match(/\d+/g).join(".")),
      currency_id: "ARS",
      quantity: p.quantity,
      picture_url: p.image,
    });
  });

  async function handleOnPay(p) {
    setLoading(true);
    setDisableBtns(true);
    try {
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

  return (
    <Box>
      <Box>
        <NavBar />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          textAlign="center"
          bg="#D9D9D9"
          marginTop="10px"
          borderRadius="10px"
          height="auto"
          width="1500px"
          marginBottom="20px"
        >
        <Text as="b" fontSize='3xl'>Cart</Text>
          <hr style={{border:"grey solid 1px"}}></hr>
          
          {Object.values(cartProducts).map((p) => {
            return (
              <Box display="flex" alignItems="center">
              <Box key={p.id + p.name}>
                <CartCards name={p.name} image={p.image} price={p.price} />
                <Button
                  onClick={(e) => handleOnRemove(p)}
                  isDisabled={disableBtns}
                >-</Button>
                <Text marginLeft="10px" marginRight="10px" as="b" fontSize='2xl'>{p.quantity}</Text>
                <Button 
                  onClick={(e) => handleOnAdd(p)}
                  isDisabled={disableBtns}
                >+</Button>

                <Button marginLeft="10px"
                  onClick={(e) => handleOnDelete(p)}
                  isDisabled={disableBtns}
                >
                  Delete
                </Button>
                <Text as="b" color="green" fontSize='3xl' marginLeft="200px">{"price" + " " + p.price}</Text>
              </Box>
              </Box>
            );
          })}
          <Text as="b" color="green" fontSize='2xl' marginLeft="100px">Location</Text>
          <hr style={{border:"grey solid 1px"}}></hr>
          <Text as="b" color="green" fontSize='2xl' marginLeft="165px">{"Total Price: $" + totalPrice}</Text>
          <Box  marginLeft="-600px" marginBottom="50px" marginTop="40px">
          <Button  marginLeft="1300px" marginBottom="50px" marginTop="40px"
            onClick={(e) => handleOnPay(arrProducts)}
            isDisabled={!disableBtns && arrProducts.length ? false : true}
          >
            {loading ? <p>Loading</p> : <p>Pay Product</p>}
          </Button>
          {paymentLink ? <a href={paymentLink}>Go to payment</a> : <></>}
        </Box>
        </Box>
      </Box>
    </Box>
  );
}