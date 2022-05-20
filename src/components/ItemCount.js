import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';



const ItemCount = () =>{
 let stock = 6;
  let initial = 1;
   const [items,setItems] = useState(1);
    const onAdd = () =>{
      if (items < stock){
        setItems(items + 1);
      }
    }  
    const onLess = () =>{
      if((items <= stock)&&(items>initial)){
        setItems(items - 1);
      }
    }  
        

    return(
      <>
  <ButtonGroup variant="outlined" aria-label="outlined primary button group">
  <Button onClick={onLess}>-</Button>
  <Button>{items}</Button>
  <Button onClick={onAdd}>+</Button>
  
<Button variant="contained" >Add to Cart</Button>
</ButtonGroup>



      </>
)}       
export default ItemCount;

