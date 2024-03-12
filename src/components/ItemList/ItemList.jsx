import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {
                products?.map((product) => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList