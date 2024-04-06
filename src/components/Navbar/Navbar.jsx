import styles from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('order','asc'))
        
        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setCategories(categoriesAdapted)
            })
            .catch(error => {
                console.error('error')
            })
    }, [])

    return (
        <nav className={styles.navbar}>
            <div className={styles.container_fluid}>
                <div className={styles.left_navbar}>
                    <h1>
                        <Link className="navbar-brand" to="/EcommerceMarsili"><img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/logo_large_plus.webp" alt="Mercado Libre"/></Link>
                    </h1>
                </div>
                <div className={styles.searchbar_navbar}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar productos, marcas y más..." aria-label="Search"/>
                        <div className="vr vr-blurry" style={{height: 25, marginTop: 7}}></div>
                        <button className={styles.button} type="submit">
                            <svg width="20" height="23" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" fill="#666"/></svg>
                        </button>
                    </form>
                </div>
                <div className={styles.disney_navbar}>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_867410-MLA73809124353_012024-OO.webp" alt="Por $2499 ¡Suscribite al nivel 6!, Disney+ y Star+ Incluídos" /></a>
                </div>
            </div>
            <div className={styles.container_fluid_subnavbar}>
                <div className={styles.location}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.843 4.568a8.707 8.707 0 1 1 12.314 12.314l-1.187 1.174c-.875.858-2.01 1.962-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.491-3.396c-.439-.431-.806-.794-1.102-1.09a8.707 8.707 0 0 1 0-12.314Zm11.253 1.06A7.207 7.207 0 1 0 6.904 15.822L8.39 17.29a753.98 753.98 0 0 0 3.088 3 .75.75 0 0 0 1.043 0l3.394-3.3c.47-.461.863-.85 1.18-1.168a7.207 7.207 0 0 0 0-10.192ZM12 7.999a3.002 3.002 0 1 1 0 6.004 3.002 3.002 0 0 1 0-6.003Zm0 1.5a1.501 1.501 0 1 0 0 3.004 1.501 1.501 0 0 0 0-3.003Z" fill="#212121"/></svg>
                    <p>Enviar a Braian</p>
                </div>
                <div className={styles.left_navbar_links}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            categories.map(cat => {
                                return (
                                    <li className="nav-item">
                                        <Link className="nav-link active" key={cat.id} to={`/EcommerceMarsili/category/${cat.slug}`}>{cat.name}</Link>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Historial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Supermercado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Moda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Vender</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Ayuda</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar