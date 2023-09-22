import './App.css'
import { Routes,Route } from "react-router-dom"
import Home from './roates/Home'
import {Link} from "react-router-dom"
import Cart from './roates/Cart'

function App() {

  return (
    <div>
        <Link to="/cart">Cart</Link>
        <Link to="/">Home</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default App
