import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
//Icono Cart
const CartWidget = () => {
  const context = useContext(CartContext);
  const addCartWidget = () => {
    let cant = 0;
    context.cartList.forEach((element) => {
      cant += element.cant;
    });
    return cant;
  };
  return (
    <Badge color="secondary" badgeContent={addCartWidget()}>
      <Link to="/Cart" style={{ textDecoration: "none", color: "white" }}>
        <ShoppingCartIcon />
      </Link>
    </Badge>
  );
};
export default CartWidget;
