import Navbar from "./components/navbar/navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/EcommerceMarsili" element={<ItemListContainer greeting = {'Bienvenidos!'}/>}/>
          <Route path='/EcommerceMarsili/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
          <Route path='/EcommerceMarsili/item/:itemId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
