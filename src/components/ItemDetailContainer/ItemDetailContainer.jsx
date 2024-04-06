import { useState, useEffect, memo } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailMemoized = memo (ItemDetail)

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...data}

                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])


    return (
        <div style={{backgroundColor: 'rgba(0, 0, 0, .1)', paddingTop: '30px', display: 'flex', justifyContent: 'center'}}>
            <ItemDetailMemoized {...product} />
        </div>
    )
}

export default ItemDetailContainer