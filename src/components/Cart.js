import { useContext } from "react";
import {CartContext}  from './CartContext';
import { Button, CardMedia } from "@mui/material";
import {Link} from  'react-router-dom';
import Avatar from '@mui/material/Avatar'

const Cart = () =>{
    const productsAdd = useContext(CartContext);
    const sumaTotal = () =>{
        let suma = 0;
        productsAdd.cartList.forEach(element => {
            suma += (element.cant * element.prod.price);
        });
        return suma;
    }    
    return (        
        <>
        <Link to='/' style = {{textDecoration:'none', color:'white'}}>   
        <Button variant="outlined" >
            Seguir Comprando 
        </Button></Link>
            {            
                productsAdd.cartList.length === 0 ?  <p>Tu carro esta vacio</p> 
                :productsAdd.cartList.map((p,key) =>                 
                        <ul key={key} style={{listStyleType: 'none'}}>
                            <li>  
                            <Avatar  
                            src={p.prod.image}
                            sx={{ width: 56, height: 56 }}
                            />
                                
                            </li>
                            <li>
                                {p.prod.name}
                            </li>
                            <li>
                                <span> Color </span>{p.prod.color}
                            </li>
                            <li>
                                <span>Precio  $</span>{p.prod.price}
                            </li>
                            <li>
                                <span>Cantidad </span>{p.cant}
                            </li>
                            <li>
                                <Link to='/' style = {{textDecoration:'none', color:'white'}}><Button variant = 'contained' onClick={(eve) => productsAdd.removeProduct(eve, p.prod.id)}>Eliminar</Button></Link>
                            </li>                            
                        </ul>  
                    
                    )
            }
            {
                productsAdd.cartList.length === 0 ?  <p> </p>
                : <span>TOTAL: {sumaTotal()} </span>
            }
            
        </>
    )
}
export default Cart;