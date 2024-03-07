import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Productos from "./Components/Productos"
import NuevoProducto from "./Components/NuevoProducto"

import { Provider } from "react-redux"
import store from "./Components/store"
import EditarProducto from "./Components/EditarProducto"

function App() {


  return (
    <>
    <BrowserRouter>
    <Provider store={store} >
    <Header />
      <div className="container">
         <Routes>
          <Route exact path="/" element={<Productos />} />
          <Route exact path="/productos/nuevos" element={<NuevoProducto />} />
          <Route exact path="/productos/nuevos/:id" element={<EditarProducto />} />
         </Routes>
      </div>
      </Provider>
     </BrowserRouter>
    </>
  )
}

export default App
