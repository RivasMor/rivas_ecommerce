import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Item = ({ producto }) => {
  //Cards que nos permite ver el producto con algunas descripciones iniciales
  return (
    <>
      <Card sx={{ maxWidth: 360 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={producto.image}
            alt=""
          />
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Link
                to={`/item/${producto.id}`}
                style={{ textDecoration: "none", color: "#ab6f45" }}
              >
                <ShoppingBagOutlinedIcon sx={{ color: "#ab6f45" }} />
              </Link>
            </Box>
            <Link
              to={`/item/${producto.id}`}
              style={{ textDecoration: "none", color: "#ab6f45" }}
            >
              <Typography
                align="center"
                color="#ab6f45"
                gutterBottom
                variant="subtitle1"
                component="div"
                title=""
              >
                {producto.name}
              </Typography>
            </Link>
            <Typography
              align="center"
              gutterBottom
              color="#ab6f45"
              variant="body2"
            >
              {" "}
              {producto.stock > 0 ? (
                producto.stock + " unidades"
              ) : (
                <p>Sin stock</p>
              )}
            </Typography>
            <Typography align="center" color="#ab6f45" variant="body1">
              $ {producto.price}
            </Typography>
            <Typography align="center" variant="subtitle2" color="#ab6f45">
              <Link
                to={`/item/${producto.id}`}
                style={{ textDecoration: "none", color: "#ab6f45" }}
              >
                Details
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
export default Item;
