import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const CartItem = ({item}) => {
    const removeItem = useContext(CartContext);

    return (
        <div className="card">
            <h2 className="card-header-title">{item.name}</h2>
            <p className="content">Cantidad: {item.quantity} | Precio: ${item.price}<br/>
            Subtotal: ${item.quantity * item.price} 
            </p>
            <button className="secondaryOption" onClick={()=>removeItem(item.id)}>Eliminar</button>
        </div>

    )
}

export default CartItem