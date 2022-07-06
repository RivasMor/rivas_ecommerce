import {useParams} from 'react-router-dom';
import { useEffect, useState} from "react";
import ItemList from "./ItemList";
import { collection, getDocs, orderBy,where, query} from "firebase/firestore";
import db from '../json/firebaseConfig';
import { Grid } from '@mui/material';
import Footer from './Footer';

//Se hacen consultas en la BD y establece el grid para contener los items hijos
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
        <>
        <Grid container spacing={1}  sx={{margin: '3%', padding:'4%'}}>         
        <ItemList p1 = {products} />         
        </Grid>
        <Footer/>
        </>     
             
    )
}
export default ItemListContainer;
