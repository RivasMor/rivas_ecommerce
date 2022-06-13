import { useContext } from "react";
import {CartContext}  from './CartContext';
import { Button } from "@mui/material";
import {Link} from  'react-router-dom';


const Cart = () =>{
    
    const productsAdd = useContext(CartContext);
    
    return (
        
        <>
        <Link to='/'>   
        <Button variant="outlined" >
            Seguir Comprando 
        </Button></Link>
            {            
                productsAdd.cartList.length === 0 ?  <p>Tu carro esta vacio</p> 
                :productsAdd.cartList.map((p) =>                 
                        <ul style={{listStyleType: 'none'}}>
                            <li>
                                {p.prod.name}
                            </li>
                            <li>
                                <span> Color </span>{p.prod.color}
                            </li>
                            <li>
                                <span>Precio </span>{p.prod.price}
                            </li>
                            <li>
                                <span>Cantidad </span>{p.cant}
                            </li>
                            <li>
                                <Link to='/'><Button variant = 'contained' onClick={(eve) => productsAdd.removeProduct(eve, p.prod.id)}>Eliminar</Button></Link>
                            </li>
                            
                        </ul>
                    )
            }
        </>
    )
}
export default Cart;