import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState, useContext } from "react";
import {db} from "../../services/firebase/firebaseConfig"
import { addDoc, collection, doc, documentId, getDocs, query, Timestamp, writeBatch, where } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email, address}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email, address
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'productos')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const {docs} = productsAddedFromFirestore
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }                
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("Hay productos que no tienen stock");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se está generando tu orden...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId} </h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )    
}


export default Checkout