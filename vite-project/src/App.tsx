import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/home.component"
import Cart from "./routes/cart/cart.component"
import Products from "./routes/products/products.component"
import Header from "./components/header/header.component"
import "./App.css";

function App() {

  return (
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/products' element={<Products/>}/>
        </Route>
      </Routes>
  )
}

export default App
