import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    console.log(cart);

    useEffect(() => {
        const calculateTotal = () => {
            let totalAmount = 0;
            cart.forEach(item => {
                totalAmount += item.quantity * item.price;
            });
            setTotal(totalAmount);
        };

        calculateTotal();
    }, [cart]);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev =>[...prev, {...item, quantity}])
        } else {
            console.error("El producto ya fue agregado");
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, total, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}