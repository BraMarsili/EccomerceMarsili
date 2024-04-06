import styles from './ItemListContainer.module.css'
import { useState, useEffect, memo } from 'react'
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemListMemoized = memo(ItemList)

const ItemListContainer = () => {

    const [products, setProducts] = useState()

    const [render, setRender] = useState(false)

    const { categoryId } = useParams()

    const notifyError = () => {
        toast.error("Error al cargar los productos");
    }

    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev)
        }, 500)
    }, [])

    useEffect (() => {
        
        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            query(collection(db, 'products'), orderBy('price','asc'))
        )

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data}
                })

                setProducts(productsAdapted)
            })
            .catch(() => {
                notifyError()
            }) 
    },[categoryId])

    return (
        <div className={styles.listContainer}>
            <ItemListMemoized products={products}/>
            <ToastContainer />
        </div>
    )
}

export default ItemListContainer