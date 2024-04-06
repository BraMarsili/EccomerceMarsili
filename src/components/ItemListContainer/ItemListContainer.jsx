import styles from './ItemListContainer.module.css'
import { useState, useEffect, memo } from 'react'
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync';

const ItemListMemoized = memo(ItemList)

const ItemListContainer = () => {

    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])

    if(loading) {
        return <img className={styles.spin} width="96" height="96" src="https://img.icons8.com/material-two-tone/96/spinner-frame-5.png" alt="spinner-frame-5"/>
    }    

    if(error) {
        return <h1>Hubo un error al cargar los productos...</h1>
    }

    return (
        <div className={styles.listContainer}>
            <ItemListMemoized products={products}/>
        </div>
    )
}

export default ItemListContainer