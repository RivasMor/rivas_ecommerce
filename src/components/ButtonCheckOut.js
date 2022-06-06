import { Button } from "@mui/material";
import {Link} from 'react-router-dom';
const ButtonCheckOut = () =>{
    return(
    <Link to= '/Cart'><Button variant="contained" > CHECKOUT</Button></Link>
    )
}
export default ButtonCheckOut;