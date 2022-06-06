
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return (
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path = '/' element = { <ItemListContainer/>}/>
          <Route path = '/category/:id' element = {<ItemListContainer/>}/>
          <Route path = '/item/:id' element = {<ItemDetailContainer/>}/>   
          <Route path = '/Cart' element = {<Cart/>}/>      
        </Routes>         
        </BrowserRouter>  
  );
}
export default App;



