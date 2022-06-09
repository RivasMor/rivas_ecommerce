import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@material-ui/core/Badge";
import {Link} from  'react-router-dom';
const CartWidget = () =>{

    return (
        
        <Badge color="secondary" badgeContent={4}>
            <Link to = '/Cart' style={{textDecoration: 'none', color: 'white'}}><ShoppingCartIcon/></Link>
        </Badge>
        
    )
}
export default CartWidget;