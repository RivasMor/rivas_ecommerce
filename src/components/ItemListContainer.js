import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, orderBy, where, query } from "firebase/firestore";
import db from "../json/firebaseConfig";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { CartContext } from "./CartContext";
import Footer from "./Footer";

//Se hacen consultas en la BD y establece el grid para contener los items hijos
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const context = useContext(CartContext);
  const { id } = useParams();
  const firestoneFetch = async (idCategory) => {
    let q;
    if (idCategory) {
      q = query(
        collection(db, "products"),
        where("category", "==", parseInt(idCategory))
      );
    } else {
      q = query(collection(db, "products"), orderBy("name"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestone = querySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));

    return dataFromFirestone;
  };

  useEffect(() => {
    //context.changeLoading(true)
    firestoneFetch(id)
      .then((result) => {
        setProducts(result);
        context.changeLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent='center'
        sx={{
          margin: "3%",
          padding: "4%",
        }}
      >
        {context.loading ? <CircularProgress size='6%'   sx={{color: "#ab6f45"
               }} /> : <ItemList p1={products} />}
      </Grid>{" "}
      {!context.loading ? <Footer /> : <> </>}{" "}
    </>
  );
};
export default ItemListContainer;
