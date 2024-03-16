import cart from './assets/icons8-cart-24.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart'>
            <img src={cart} alt="cart-widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget