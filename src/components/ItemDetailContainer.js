
import { useEffect, useState } from "react"
import {useParams, Link} from 'react-router-dom';
import { Button } from '@mui/material';
import ItemDetail from "./ItemDetail";
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
const ItemDetailContainer = () =>{
    const [product,setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetchSearchProduct(productsResponse)            
            .then(response => setProduct(response.results.find(prod => prod.id === id)))
            .catch(err => console.log(err));
    },[id]);

    return (
        <>
         <ItemDetail producto = {product} /> 
        </>
    )
}
export default ItemDetailContainer
