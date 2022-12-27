import { useDispatch, useSelector } from 'react-redux';
import { addProductsToCart, removeFromCart, addToCart, deleteProductsCart } from '../../actions/index';
import { Box, Image, Text, Button,  Divider } from '@chakra-ui/react';
import CartCards from '../CartCards/CartCards';
import NavBar from '../NavBar/NavBar';
import { auto } from '@popperjs/core';


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
        console.log(arrProducts)
        addProductsToCart();
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
                <Box textAlign="center" bg="#D9D9D9" marginTop="10px" borderRadius="10px" height="auto" width="1500px" marginBottom="20px" >
                <Text as="b" fontSize='3xl'>Carrito</Text>
                <hr style={{border:"grey solid 1px"}}></hr>
                    {Object.values(cartProducts).map(p => {
                        return (
                            <Box display="flex" alignItems="center">
                                
                                <CartCards name={p.name} image={p.image} price={p.price} quantity={p.quantity} description={p.description} />
                                <Button onClick={e => handleOnAdd(p)}>+</Button>
                                <Text marginLeft="10px" marginRight="10px" as="b" fontSize='2xl'>{p.quantity}</Text>
                                <Button onClick={e => handleOnRemove(p)}>-</Button>
                                <Button marginLeft="10px" onClick={e => handleOnDelete(p)}>Eliminar</Button>
                                <Text as="b" color="green" fontSize='3xl' marginLeft="800px">{p.price}</Text>
                            </Box>
                        )
                    })
                    }
                    
                    <hr style={{border:"grey solid 1px"}}></hr>
                    <Box marginLeft="1300px" marginBottom="50px" marginTop="40px">
                        <Button size='lg' colorScheme='green' onClick={e => handleOnPay()}>Pagar</Button>
                    </Box>
                </Box>
            </Box>
        </Box>


    )
}