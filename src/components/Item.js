
import {Card,  CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';

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
          <Typography variant="body2" color="text.secondary"><Link to = {`/item/${producto.id}`}>
            Details
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </>
    )

}
export default Item;


