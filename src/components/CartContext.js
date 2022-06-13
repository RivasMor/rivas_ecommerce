import { createContext, useState } from "react";
export const CartContext = createContext();
   
const CartContextProvider = ({children}) =>{
    const [cartList,setCartList] = useState([]);
    const addToCart = (producto,cantidad) =>{        
        let item = {
                    prod: producto,
                    cant: cantidad
                }
        setCartList([...cartList, item])
        
    }
    const removeProduct = (eve, id) =>{
        eve.preventDefault();
        let newArray = cartList.filter (item => item.prod.id !== id)
        setCartList(newArray);
    }
    return(
        <CartContext.Provider value= {{cartList, addToCart,removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;
