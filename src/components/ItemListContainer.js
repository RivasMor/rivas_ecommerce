import {useParams} from 'react-router-dom';
import { useEffect, useState} from "react";
import ItemList from "./ItemList";
import productsResponse from "../json/products.json";
import { collection, getDocs, orderBy,where, query } from "firebase/firestore";
import db from '../json/firebaseConfig';
import { async } from '@firebase/util';
import { ConstructionOutlined } from '@mui/icons-material';


let encontrado = true;

const ItemListContainer = () =>{
    const [products,setProducts] = useState([]);
    const {id} = useParams();
    const firestoneFetch = async (idCategory) =>{
        let q;
        if(idCategory){
            q = query(collection(db, "products"),where('category', '==', parseInt(idCategory)));
        }else{
            q = query(collection(db,"products"),orderBy('name'));
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestone = querySnapshot.docs.map(document =>({
            id: document.id,
            ...document.data()
        }));
        return dataFromFirestone;
    }

    useEffect(() =>{
        firestoneFetch(id)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    },[id])
   
    return (        
        <ItemList p1 = {products} />          
    )
}
export default ItemListContainer;