import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <header className={classes.header}>
            <h4 style={{color: 'red', fontSize: 30}}>Ecommerce Marsili</h4>
            <nav>
                <ul>
                    <a href="" className='btn btn-primary'>Celulares</a>
                    <a href="">Tablets</a>
                    <a href="">Notebooks</a>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar