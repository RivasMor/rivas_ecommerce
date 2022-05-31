import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { margin } from '@mui/system';
const ItemDetail = ({producto}) => { console.log({producto})
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
      </CardActionArea>
    </Card>
        </>
    )
    
}
export default ItemDetail;