import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css";
import {getDocs, collection, query, where} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig.js';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error=> {
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            <h3>{greeting}</h3>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer