import { useState } from "react"
import styles from './ItemCount.module.css'

const ItemCount = ({ initialValue = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initialValue)
    
    const decrement = () => {
        if(count > 1) {
            setCount(count => count - 1)
        }
    }
    
    const increment = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return (
        <div className={styles.counter}>
            <h2>Stock disponible: {stock}</h2>
            <h1>Cantidad: {count} </h1>
            <div>
                <button className='btn btn-primary' onClick={increment}>Incrementar</button>
                <button className='btn btn-light' onClick={() => onAdd(count)}>Agregar al carrito</button>
                <button className='btn btn-primary' onClick={decrement}>Decrementar</button>
            </div>
        </div>
    )
}

export default ItemCount