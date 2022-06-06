import {Card, Button, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import ItemCount from './ItemCount';
import {Link} from  'react-router-dom';
import {useState} from 'react';
import ButtonCheckOut from './ButtonCheckOut';
const ItemDetail = ({producto}) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (quantAdd) =>{
    console.log(quantAdd)
    setItemCount(quantAdd);

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
        <Link to = '/'><Button size="small" variant="contained">Volver</Button></Link>
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