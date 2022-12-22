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
import { isDisabled, onClick } from "@chakra-ui/utils";

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
      setLink(link.split('"')[1]);
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
          bg="#D9D9D9"
          marginTop="10px"
          borderRadius="10px"
          height="700px"
          width="1500px"
        >
          {Object.values(cartProducts).map((p) => {
            return (
              <Box key={p.id + p.name}>
                <CartCards name={p.name} image={p.image} price={p.price} />
                <Button
                  onClick={(e) => handleOnRemove(p)}
                  isDisabled={disableBtns}
                >
                  -
                </Button>
                <Text>{p.quantity}</Text>
                <Button
                  onClick={(e) => handleOnAdd(p)}
                  isDisabled={disableBtns}
                >
                  +
                </Button>
                <Button
                  onClick={(e) => handleOnDelete(p)}
                  isDisabled={disableBtns}
                >
                  Eliminar
                </Button>
              </Box>
            );
          })}
          <Text>Ubicación</Text>
          <Text>Precio</Text>
          <Text>Total</Text>
          <Text>{"Precio Total: $" + totalPrice}</Text>
          <Button
            onClick={(e) => handleOnPay(arrProducts)}
            isDisabled={!disableBtns && arrProducts.length ? false : true}
          >
            {loading ? <p>Loading</p> : <p>Pagar</p>}
          </Button>
          {paymentLink ? <a href={paymentLink}>Go to payment</a> : <></>}
        </Box>
      </Box>
    </Box>
  );
}
