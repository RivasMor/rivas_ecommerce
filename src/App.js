
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
function App() {
  return (
    <CartContextProvider>     
      <BrowserRouter>
        <NavBar/> 
        
        <Routes>
          <Route path = '/' element = { <ItemListContainer/>}/>
          <Route path = '/category/:id' element = {<ItemListContainer/>}/>
          <Route path = '/item/:id' element = {<ItemDetailContainer/>}/>   
          <Route path = '/Cart' element = {<Cart/>}/>      
        </Routes>         
        </BrowserRouter>
        </CartContextProvider>
   
  );
}
export default App;



