import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import styles from './CartView.module.css'

const CartView = () => {
    const { cart, removeItem, total } = useContext(CartContext)

    return (
        <div className={styles.mainDiv}>
            <section>
            {
                cart.map(prod => {
                    return (
                        <article className={styles.itemCart} key={prod.id}>
                            <div>
                                <img src={prod.img} alt={prod.name} />
                            </div>
                            <div>
                                <h2 className={styles.name}>{prod.name}</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <h2>${total}</h2>
                            <button className='btn btn-secondary' onClick={() => removeItem(prod.id)}>Eliminar</button>
                            </div>
                        </article>
                    )
                })
            }
            </section>
            <div>

                <Link className='btn btn-primary' to='/EcommerceMarsili/checkout'>Checkout</Link>
            </div>
        </div>
    )
}

export default CartView