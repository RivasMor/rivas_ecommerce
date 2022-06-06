import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';



const ItemCount = ({stock,initial,onAdd}) =>{
 
   const [items,setItems] = useState(1);
    const more = () =>{
      if (items < stock){
        setItems(items + 1);
      }
    }  
    const less = () =>{
      if((items <= stock)&&(items>initial)){
        setItems(items - 1);
      }
    }  
    const onAddLocal = () => {
      onAdd(items);

    }
    
        

    return(
      <>
  <ButtonGroup variant="outlined" aria-label="outlined primary button group">
  <Button onClick={less}>-</Button>
  <Button>{items}</Button>
  <Button onClick={more}>+</Button>
  
<Button onClick = {onAddLocal}  variant="contained" >Add to Cart</Button>
</ButtonGroup>



      </>
)}       
export default ItemCount;

