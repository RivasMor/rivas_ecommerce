import Item from "./Item";
import { Grid } from "@mui/material";
const ItemList = ({p1}) =>{
    return(
        
        p1.map(prod => {
            
             return <Grid item md={4} xs={11} > <Item key={prod.id} producto = {prod}/></Grid> 
        })       
    )
}
export default ItemList;