import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restartCart, deleteFromCart, addToCart } from "../../actions/index";

export default function CartList() {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart);

    function handleOnAdd(p) {
        dispatch(addToCart(p));
    }

    function handleOnRemove(p) {
        dispatch(deleteFromCart(p));
    }

    function handleOnRestart() {
        dispatch(restartCart());
    }

    return (
        <div>
            {Object.values(cartProducts).map((product) => (
                <div key={product.id + "" + product.name}>
                    <h1>{product.name}</h1>
                    <button onClick={() => handleOnRemove(product)}>-</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => handleOnAdd(product)}>+</button>
                </div>
            ))}
            <div>
                <button onClick={handleOnRestart}>Restart cart</button>
            </div>
        </div>
    );
}