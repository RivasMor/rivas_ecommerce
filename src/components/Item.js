import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({producto}) =>{
    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={producto.image}
          alt=""
        />
        <CardContent>
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
export default Item;


