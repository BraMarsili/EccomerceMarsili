import { Navigate, useNavigate } from "react-router-dom"
import styles from './Item.module.css'

const Item = ({ id, name, img, price, envio}) => {

    const navigate = useNavigate()

    return (
        <div className={styles.itemCard} onClick={() => navigate (`/EcommerceMarsili/item/${id}`)}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={img}/>
                </div>
                <h3>${price} ARS</h3>
                <p>{envio}</p>
                <h2>{name}</h2>
        </div>
    )
}

export default Item