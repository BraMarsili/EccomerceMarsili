import styles from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const [products, setProducts] = useState()

    const { categoryId } = useParams()

    useEffect (() => {
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
    },[categoryId])

    return (
        <div className={styles.listContainer}>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer