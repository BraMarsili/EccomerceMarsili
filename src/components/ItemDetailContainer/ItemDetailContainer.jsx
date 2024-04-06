import { useState, useEffect, memo } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { getProductById } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"
import styles from './ItemDetailContainer.module.css'

const ItemDetailMemoized = memo (ItemDetail)

const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const asyncFunction = () => getProductById(itemId)

    const { data: product, loading, error } = useAsync(asyncFunction, [itemId])

    if (loading) {
        return <img className={styles.spin} width="96" height="96" src="https://img.icons8.com/material-two-tone/96/spinner-frame-5.png" alt="spinner-frame-5"/>
    }

    if (error) {
        return <h1>Hubo un erro al cargar los productos...</h1>
    }

    return (
        <div style={{backgroundColor: 'rgba(0, 0, 0, .1)', paddingTop: '30px', display: 'flex', justifyContent: 'center'}}>
            <ItemDetailMemoized {...product} />
        </div>
    )
}

export default ItemDetailContainer