import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/home.component"
import Cart from "./routes/cart/cart.component"
import Products from "./routes/products/products.component"
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
  )
}

export default App
