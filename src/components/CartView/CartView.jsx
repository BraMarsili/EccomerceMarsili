import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import styles from './CartView.module.css'

const CartView = () => {
    const { cart, removeItem, clearCart, total } = useContext(CartContext)

    return (
        <div className={styles.mainDiv}>
            <section>
            {
                cart.map(prod => {

                    const unitTotal = prod.quantity * prod.price

                    return (
                        <article className={styles.itemCart} key={prod.id}>
                            <div>
                                <img src={prod.img} alt={prod.name} />
                            </div>
                            <div>
                                <h2 className={styles.name}>{prod.name}</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <h2>${unitTotal}</h2>
                            <button className='btn btn-secondary' onClick={() => removeItem(prod.id)}>Eliminar</button>
                            </div>
                        </article>
                    )
                })
            }
            </section>
            <div className={styles.cartButtons}>
                <h2>Total: ${total}</h2>
                <button style={{marginRight: 30, marginLeft: 30}} className='btn btn-secondary' onClick={clearCart}>Vaciar carrito</button>
                <Link className='btn btn-primary' to='/checkout'>Checkout</Link>
            </div>
        </div>
    )
}

export default CartView