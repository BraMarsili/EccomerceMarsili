import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
    }, [itemId])


    return (
        <div style={{backgroundColor: 'rgba(0, 0, 0, .1)', paddingTop: '30px', display: 'flex', justifyContent: 'center'}}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer