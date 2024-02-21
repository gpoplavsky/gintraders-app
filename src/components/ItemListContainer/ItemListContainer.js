import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../../asyncMock.js';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
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