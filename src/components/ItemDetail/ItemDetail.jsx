import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'

const ItemDetail = ({ id, name, category, img, price, stock, description, envio}) => {
    return (
        <main className={styles.mainDiv}>
            <div style={{display:'flex', justifyContent: 'center'}}>
                <img src={img} alt={name}/>
            </div>
            <div className={styles.details}>
                <h1>{name}</h1>
                <p>${price} ARS</p>
                <h2>{description}</h2>
            </div>      
            <div className={styles.counter}>    
                <p>{envio}</p>
                <ItemCount stock={stock}/>
            </div>
        </main>
    )
}

export default ItemDetail