import React from 'react';
import './App.css';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewArrivals from './components/NewArrivals';
import Favorite from "./components/Favorite"
import Cart from "./components/Cart"
import Contact from './components/Contact';
import { CartContext } from './Context/Cart/CartContext';
import Homepage from "./components/Homepage"
import { useAuth0 } from '@auth0/auth0-react'


const linksArray = ["Products", "Favorites", "New Arrivals", "Contact Us"]

function App() {
 const {isAuthenticated}=useAuth0()
  return (
   <CartContext>
      <BrowserRouter>
       <Navbar links={linksArray}/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="products" element={<Products />}/>
          <Route path="newarrivals" element={<NewArrivals />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
   </CartContext>

  );
}

export default App;
