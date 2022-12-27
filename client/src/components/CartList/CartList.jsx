import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restartCart, removeFromCart, addToCart } from "../../actions/index";
import { Box, Image, Text, Button,  Divider } from '@chakra-ui/react';

export default function CartList() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  function handleOnAdd(p) {
    dispatch(addToCart(p));
  }

  function handleOnRemove(p) {
    dispatch(removeFromCart(p));
  }

  function handleOnRestart() {
    dispatch(restartCart());
  }

  return (
    <Box>
      {Object.values(cartProducts).map((product) => (
        <div key={product.id + "" + product.name}>
          <h1>{product.name}</h1>
          <Box display="flex">
          <Button marginRight="10px" onClick={() => handleOnRemove(product)}>-</Button>
          <Text as="b">{product.quantity}</Text>
          <Button marginLeft="10px" onClick={() => handleOnAdd(product)}>+</Button>
          </Box>
         
        </div>
      ))}
      <div>
        <button onClick={handleOnRestart}>Restart cart</button>
      </div>
    </Box>
  );
}