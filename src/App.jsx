import Navbar from "./components/navbar/navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = 'Bienvenidos!'/>
    </>
  )
}

export default App
