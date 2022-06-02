import {Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
const ItemDetail = ({producto}) => {
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