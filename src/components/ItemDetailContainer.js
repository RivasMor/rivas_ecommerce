
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react"
import productsResponse from "../json/products.json"
let encontrado = true;


const fetchSearchProduct = (task) =>{
    return new Promise((resolve,reject) => { 
          setTimeout(()=>{
              if(encontrado){
                  resolve(task);
              }else{
                  reject("Error")
              }
          },1000);
    })
}
const ItemDetailContainer = () =>{
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetchSearchProduct(productsResponse)            
            .then(response => setProducts(response.results[2]))
            .catch(err => console.log(err));
    },[]);

    return (
        <>
         <ItemDetail producto = {products} /> 
        </>
    )
}
export default ItemDetailContainer
