import styles from './Checkout.module.css'
import { useState, useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const { cart, total, clearCart } = useContext(CartContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const validateForm = () => {
        let errors = {}
        let isValid = true

        if (!formData.name.trim()) {
            errors.name = 'El nombre es requerido'
            isValid = false
        }

        if (!formData.email.trim()) {
            errors.email = 'El correo electrónico es requerido'
            isValid = false
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'El correo electrónico no es válido'
            isValid = false
        }

        if (!formData.phone.trim()) {
            errors.phone = 'El número de contacto es requerido'
            isValid = false
        }

        setFormErrors(errors)
        return isValid
    }

    const createOrder = async (userData) => {

        try {
            setLoading(true)

            if (!validateForm()) {
                setLoading(false)
                return
            }

            const objOrder = {
                buyer: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)
                
                clearCart()
                setOrderId(id)
            } else {
                console.error('Hay productos que no tienen stock disponible')
            }
        } catch (error) {
            console.error('Hubo un error en la generación de la orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1 className={styles.h1Checkout}>Su orden esta siendo generada...</h1>
    }

    if(orderId) {
        return <h1 className={styles.h1Checkout}>El ID de su orden es: {orderId}</h1>
    }

    return  (
        <div className={styles.formCheckout}>
            <form>
                <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Braian Marsili" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                    {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="nombre@ejemplo.com" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                    {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                </div>
                <div class="mb-3">
                    <label class="form-label">Numero de contacto</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="11XXXXXXXX" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                    />
                    {formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
                </div>
                <button type="submit" className='btn btn-primary' onClick={createOrder}>Generar orden de compras</button>
            </form>
        </div>
    )
}

export default Checkout