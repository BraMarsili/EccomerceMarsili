import { Navigate, useNavigate } from "react-router-dom"
import styles from './Item.module.css'

const Item = ({ id, name, img, price, envio}) => {

    const navigate = useNavigate()
    
    const handleClick = (e) => {
        e.stopPropagation()
    }

    const handleItemClick = (e) => {
        handleClick(e);
        navigate(`/item/${id}`);
    }


    return (
        <div className={styles.itemCard} onClick={handleItemClick}>
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