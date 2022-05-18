import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@material-ui/core/Badge";
const CartWidget = () =>{
    return (
        <Badge color="secondary" badgeContent={4}>
            <ShoppingCartIcon/>
        </Badge>
        
    )
}
export default CartWidget;