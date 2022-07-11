import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);  
  const [loading,setLoading] = useState(true);

  const changeLoading = (val) =>{
    setLoading(val);
  }
    
  //Funciones comunes a todo mi proyecto como añadir ,eliminar. 
  const addToCart = (producto, cantidad) => {
    let item = {
      prod: producto,
      cant: cantidad,
    };
    let exist = cartList.find((item) => item.prod.id === producto.id);

    if (exist === undefined) {
      setCartList([...cartList, item]);
    } else {
      let auxArray = cartList.filter((item) => item.prod.id !== producto.id);
      exist.cant += cantidad;
      auxArray.push(exist);
      setCartList(auxArray);
    }
  };
  const removeProduct = (eve, id) => {
    eve.preventDefault();
    let newArray = cartList.filter((item) => item.prod.id !== id);
    setCartList(newArray);
  };
  const removeList = () => {
    setCartList([]);
  };
  
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeProduct, removeList, loading, changeLoading }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
