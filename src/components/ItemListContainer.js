import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
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
          },3000);
    })
}
const ItemListContainer = () =>{
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetchSearchProduct(productsResponse)            
            .then(response => setProducts(response.results))
            .catch(err => console.log(err));
    },[]);

    return (
        <>
        <p></p>        
        
        </>
    )
}
export default ItemListContainer;