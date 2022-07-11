import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button, Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Footer from "./Footer";
import {
  collection,
  serverTimestamp,
  setDoc,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../json/firebaseConfig";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const styleButton = {
    backgroundColor: "#ab6f45",
    "&:hover": { backgroundColor: "#b9935a", opacity: [0.9, 0.8, 0.7] },
  };
  const productsAdd = useContext(CartContext);
  
  const sumaTotal = () => {
    let suma = 0;
    productsAdd.cartList.forEach((element) => {
      suma += element.cant * element.prod.price;
    });
    return suma;
  };
  //Crear orden de compra
  const createOrderBuy = () => {
    const itemForDB = productsAdd.cartList.map((item) => ({
      id: item.prod.id,
      price: item.prod.price,
      title: item.prod.name,
      quant: item.cant,
    }));
    let order = {
      buyer: {
        email: "mRossi@gmail.com",
        name: "Maria Rossi",
        phone: "3512487542",
      },
      date: serverTimestamp(),
      total: sumaTotal(),
      items: itemForDB,
    };
    console.log(order);

    const createOrderInFirestone = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    createOrderInFirestone()
      .then((result) => alert("Tu orden es: " + result.id +  '    No pierdas tu numero de orden. A la brevedad nos comunicamos contigo'))
      .catch((err) => console.log(err));
    //Actualizo stock
    productsAdd.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.prod.id);
      if (item.prod.stock > 0){
        await updateDoc(itemRef, {
          stock: increment(-item.cant),
        });
      }
      
    });
    productsAdd.removeList();
  };
  //Card de cada producto seleccionado por el usuario.Opciones (Buttons) de removerlo, seguir comprando y finalizar compra. 
  return (
    <>
      <Grid
        container
        md={12}
        justifyContent="center"
        sx={{ color: "#ab6f45", marginTop: "3%" }}
      >
        <Grid item md={12} align="center">
          <Typography variant="h5">Carrito de Compras</Typography>
        </Grid>
        <Grid item md={4} xs={11} mt="3%" align="center">
          <Box sx={{ border: "1px solid", paddingTop: "5%" }}>
            {productsAdd.cartList.length === 0 ? (
              <p>Tu carro esta vacio</p>
            ) : (
              productsAdd.cartList.map((p, key) => (
                <ul key={key} style={{ listStyleType: "none" }}>
                  <li>
                    <Avatar
                      src={p.prod.image}
                      sx={{ width: 116, height: 116 }}
                    />
                  </li>
                  <li>{p.prod.name}</li>
                  <li>
                    <span> Color: </span>
                    {p.prod.color}
                  </li>
                  <li>
                    <span>Precio: $</span>
                    {p.prod.price}
                  </li>
                  <li>
                    <span>Cantidad: </span>
                    {p.cant}
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button
                        startIcon={<DeleteIcon sx={{color: '#d68d5a'}} />}
                        variant="text"
                        sx={{
                          marginTop: "4%",
                          backgroundColor: "white",
                          "&:hover": {
                            backgroundColor: "white",
                            opacity: [0.9, 0.8, 0.7],
                          },
                        }}
                        onClick={(eve) =>
                          productsAdd.removeProduct(eve, p.prod.id)
                        }
                      >
                       
                      </Button>
                    </Link>
                  </li>
                </ul>
              ))
            )}

            {productsAdd.cartList.length === 0 ? (
              <p> </p>
            ) : (
              <Typography
                variant="h6"
                mt="5%"
                mb="4%"
                
              >
                TOTAL: ${sumaTotal()}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
      <Grid container md={12} mt="3%" align="center">
        <Grid item md={6} xs={12} mb = '13%'>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button variant="contained" sx={styleButton}>
              Seguir Comprando
            </Button>
          </Link>
        </Grid>
        <Grid item md={6} xs={12}>
          {productsAdd.cartList.length === 0 ? (
            <p> </p>
          ) : (
            <Button
              variant="contained"
              sx={styleButton}
              onClick={createOrderBuy}
              
            >
              Finalizar compra
            </Button>
          )}
        </Grid>
        
      <Footer/>
      </Grid>
    </>
  );
};
export default Cart;
