import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom"; 

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    } 

    return (
        <div>
            <div className="CartMap">
                {cart.map(p => {
                    if (!p || !p.id || !p.name || !p.quantity || !p.price) {
                        return null; // O manejar el error de alguna manera adecuada
                    }
                    return <CartItem key={p.id} item={p}/> 
                })}
            </div>
            <h3>Total: ${total} </h3>
            <div className="cartControls">
                <Link className="Option" to='/checkout'>Checkout</Link>
                <button className="secondaryOption" onClick={()=>clearCart()}>Limpiar carrito</button>
            </div>
        </div>
    )
    
}

export default Cart