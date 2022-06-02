import Item from "./Item";
const ItemList = ({p1}) =>{
    return(
        p1.map(prod => {
            
             return <Item key={prod.id} producto = {prod}/>
        })       
    )
}
export default ItemList;