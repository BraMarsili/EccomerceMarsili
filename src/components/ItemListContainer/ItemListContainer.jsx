import styles from './ItemListContainer.module.css'

const ItemListContainer = (props) => {
    return (
        <div className={styles.greetings}>
            <p>{props.greeting}</p>
        </div>
    )
}

export default ItemListContainer