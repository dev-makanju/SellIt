/**
* IMPORTS
* */ 
import { BrowserRouter as Router, Route, Routes , Navigate } from "react-router-dom";
import Home from './pages/Home'
import Product from './pages/Product';
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Cart from './pages/Cart'
import ProductList from './pages/ProductList'

const App = () => {
  const user = true
  return (
    <Router>
      <Routes>   
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/products"  element={<ProductList/>}/>        <Route path="/register" element={ user ? <Navigate to="/" /> : <Register/>}/>
        <Route path="login/" element={ user ? <Navigate to="/" /> : <Login /> }/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route>404 Not Found!!!</Route>
      </Routes>
    </Router>
  );
};

export default App;