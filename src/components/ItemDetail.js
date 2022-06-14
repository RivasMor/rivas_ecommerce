import {Card, Button, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import ItemCount from './ItemCount';
import {Link} from  'react-router-dom';
import {useContext, useState} from 'react';
import ButtonCheckOut from './ButtonCheckOut';
import {CartContext} from './CartContext';
const ItemDetail = ({producto}) => {
  const [itemCount, setItemCount] = useState(0);
  const prueba = useContext(CartContext);
  
  const onAdd = (quantAdd) =>{
    setItemCount(quantAdd);
    prueba.addToCart(producto,quantAdd);
  }
    return(
        <>
          <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={producto.image}
          alt=""
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            {producto.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" title="">  
          {producto.name}          
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.price}
          </Typography>
        </CardContent>         
        <Link to = '/' style = {{textDecoration:'none', color:'white'}}><Button size="small" variant="contained">Volver</Button></Link>
      </CardActionArea>
    </Card>
    {
    (itemCount === 0) 
    ? <ItemCount stock = {5} initial = {0}  onAdd = {onAdd}/>
    : <ButtonCheckOut/>      
    }
        
      
    
    
        </>
    )
    
}
export default ItemDetail;