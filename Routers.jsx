import React,{useState} from 'react'
import { Routes, Route } from "react-router-dom";
import IndexPage from './index';
import Signin from './signin';
import Signup from './signup';
import ForgotPassword from './forgot_password';
import ProductDetails from './product_details';
import Checkout from './checkout';
import Cart from './cart';
import ContactPage from './contactpage';

const Routers = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <Routes>
      <Route path="/Index" element={<IndexPage/>} />
      <Route path="/ProductDetails" element={<ProductDetails addToCart={addToCart}/>}  />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/Checkout" element={<Checkout/>} />
      <Route path="/Cart" element={<Cart cart={cart} />} />
      <Route path="/Contactpage" element={<ContactPage />} /> 
    </Routes>


  );
}

export default Routers;
