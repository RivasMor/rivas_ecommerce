import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import ButtonCheckOut from "./ButtonCheckOut";
import { CartContext } from "./CartContext";
//Vista del producto elegido con mas detalles, y opcion a elegir cantidad
const ItemDetail = ({ producto }) => {
  const [itemCount, setItemCount] = useState(0);
  const prueba = useContext(CartContext);

  const onAdd = (quantAdd) => {
    setItemCount(quantAdd);
    prueba.addToCart(producto, quantAdd);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
        sx={{ marginTop: "1%" }}
      >
        <Grid item md={4} xs={11}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="600"
                image={producto.image}
                alt=""
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            title=""
            color="#ab6f45"
          >
            {producto.name}
          </Typography>

          <Typography gutterBottom variant="body1" color="#ab6f45">
            {producto.description}
          </Typography>
          <Typography gutterBottom variant="h4" color="#ab6f45">
            ${producto.price}
          </Typography>
          {producto.stock > 0 ? (
            itemCount === 0 ? (
              <ItemCount stock={producto.stock} initial={0} onAdd={onAdd} />
            ) : (
              <Grid item md={4}>
                <ButtonCheckOut />
              </Grid>
            )
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default ItemDetail;
