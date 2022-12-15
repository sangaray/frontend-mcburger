import { useDispatch, useSelector } from 'react-redux';
import { restartCart, deleteFromCart, addToCart } from '../../actions/index';



export default function CartList() {

    const dispatch = useDispatch();

    function handleOnAdd(id) {
        dispatch(addToCart(id))
    }

    function handleOnDelete(id) {
        dispatch(deleteFromCart(id))
    }

    function handleOnRestart() {
        dispatch(restartCart())
    }


    const cartProducts = useSelector(state => state.cart);

    return (
        <div>
            <h1></h1>
            {cartProducts.map(p =>
                <div>
                    <h2>{p.name}</h2>
                    <button onClick={e => handleOnAdd(p.id)}>+</button>
                    <button onClick={e => handleOnDelete(p.id)}>-</button>
                </div>

            )}

            <button onClick={handleOnRestart}>restart cart</button>
        </div>
    )
}