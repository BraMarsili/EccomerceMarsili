import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../context/CartContext';

const notify = () => {
    toast.success("Los productos se han agregado al carrito!");
}

const notifyError = () => {
    toast.error("Por favor, ingrese una cantidad válida");
}


const InputCount = ({ onAdd, stock, initial= 1 }) => {
    const [count, setCount] = useState(initial)


    const handleClick = () => {
        if (count >= 1 && count <= stock) {
            onAdd(count);
        } else {
            notifyError();
        }
    }

    const handleChange = (e) => {
        if (!isNaN(e.target.value) && e.target.value >= 0 && e.target.value <= stock) {
            setCount(parseInt(e.target.value));
        }
    }

    return (
        <div className={styles.inputCounter}>
            <h2>Stock disponible: {stock}</h2>
            <input type='number' className='form-control' onChange={handleChange} value={count}/>
            <button className='btn btn-primary' onClick={handleClick}>Agregar al carrito</button>
        </div>

    )
}

const ItemDetail = ({ id, name, category, img, price, stock, description, envio}) => {

    const [inputType, setInputType] = useState('button')

    const [quantity, setQuantity] = useState(0)

    const ItemCountCh = inputType === 'input' ? InputCount : ItemCount

    const { addItem, isInCart } = useContext(CartContext)



    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, img, name, price, quantity
        }
        console.log(objProductToAdd)

        notify()

        setQuantity(quantity)

        addItem(objProductToAdd)
    }

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
                {
                    !isInCart(id) ? (
                        <ItemCountCh onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <div style={{display:'flex', flexDirection: 'column'}}>
                            <Link style={{marginBottom: 10}}className='btn btn-primary' to='/cart'>Finalizar compra</Link>
                            <Link to='/' className='btn btn-primary'>Ver otros productos</Link>
                        </div>
                    )
                }
                {!isInCart(id) && (
                    <button className='btn btn-light' onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                        Cambiar contador
                    </button>
                )}
            </div>
        </main>
    )
}

export default ItemDetail