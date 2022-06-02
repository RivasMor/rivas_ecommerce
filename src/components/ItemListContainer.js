import {useParams} from 'react-router-dom';
import { useEffect, useState} from "react";
import ItemList from "./ItemList";
import productsResponse from "../json/products.json";

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
const ItemListContainer = () =>{
    const [products,setProducts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        if(id){
            fetchSearchProduct(productsResponse)            
            .then(response => setProducts(response.results.filter(prod => prod.category === parseInt(id))))
            .catch(err => console.log(err));
        }
        else{
            
            fetchSearchProduct(productsResponse)            
            .then(response => setProducts(response.results))
            .catch(err => console.log(err));
        }
        
    },[id]);

    return (        
        <ItemList p1 = {products} />          
    )
}
export default ItemListContainer;