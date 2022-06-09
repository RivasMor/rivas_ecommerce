import { useContext } from "react";
import {CartContext}  from './CartContext';   

const Cart = () =>{
    const productsAdd = useContext(CartContext);
    return (
        
        <>
            {
            
                productsAdd.cartList.length === 0 ? <p>Tu carro esta vacio</p>
                :
                    productsAdd.cartList.map((p) => 
                        <p>{p.name}</p>
                    )
            }
        </>
    )
}
export default Cart;