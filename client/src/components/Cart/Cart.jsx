import { useDispatch, useSelector } from 'react-redux';
import { addProductsToCart, removeFromCart, addToCart, deleteProductsCart } from '../../actions/index';
import { Box, Text, Button } from '@chakra-ui/react';
import CartCards from '../CartCards/CartCards';
import NavBar from '../NavBar/NavBar';


export default function Cart() {

    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart);

    let arrProducts = [];

    Object.values(cartProducts).map(p => {
        arrProducts.push({
            "title": p.name,
            "unit_price": p.price,
            "currency_id": "ARS",
            "quantity": p.quantity,
            "picture_url": p.image,
            "description": p.description
        })
    })

    function handleOnPay() {
        addProductsToCart(arrProducts)();
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
                <Box bg="#D9D9D9" marginTop="10px" borderRadius="10px" height="700px" width="1500px" >
                    {Object.values(cartProducts).map(p => {
                        return (
                            <Box>
                                <CartCards name={p.name} image={p.image} price={p.price} quantity={p.quantity} description={p.description} />
                                <Button onClick={e => handleOnAdd(p)}>+</Button>
                                <Text>Cantidad</Text>
                                <Button onClick={e => handleOnRemove(p)}>-</Button>
                                <Button onClick={e => handleOnDelete(p)}>Eliminar</Button>
                            </Box>
                        )
                    })
                    }
                    <Text>Ubicación</Text>
                    <Text>Precio</Text>
                    <Text>Total</Text>
                    <Text>Precio Total</Text>
                    <Button onClick={e => handleOnPay()}>Pagar</Button>
                </Box>
            </Box>
        </Box>


    )
}