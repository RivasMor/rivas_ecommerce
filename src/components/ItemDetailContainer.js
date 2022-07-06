import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import db from "../json/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then((result) =>
        setProduct({
          id: result.id,
          ...result.data(),
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <ItemDetail producto={product} />
    </>
  );
};
export default ItemDetailContainer;
