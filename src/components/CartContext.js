import { createContext, useState } from "react";
export const CartContext = createContext();
   
const CartContextProvider = ({children}) =>{
    const [cartList,setCartList] = useState([]);
    const addToCart = (producto,cantidad) =>{
        for (let i=0;i<cantidad;i++){
            setCartList(oldArray => [...oldArray,producto] );
        }
        debugger;
    }
    const removeProduct = (id,producto) =>{
        producto.filter (prod => prod.id == id)
    }
    return(
        <CartContext.Provider value= {{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
