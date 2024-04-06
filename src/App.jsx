import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";

function App() {

  return (
    <>
        <BrowserRouter>
          <CartProvider>
            <Navbar/>
            <Routes>
              <Route path='/EcommerceMarsili' element={<ItemListContainer greeting = {'Bienvenidos!'}/>}/>
              <Route path='/EcommerceMarsili/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
              <Route path='/EcommerceMarsili/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/EcommerceMarsili/cart' element={<CartView/>}/>
              <Route path='/EcommerceMarsili/checkout' element={<Checkout/>}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
    </>
  )
}

export default App
