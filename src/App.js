import React from 'react';
import commerce from './lib/commerce';
import './App.css';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewArrivals from './components/NewArrivals';
import Favorite from "./components/Favorite"
import Cart from "./components/Cart"
import Contact from './components/Contact';
import { CartContext } from './Context/Cart/CartContext';

const linksArray = ["Products", "Favorites", "New Arrivals", "Contact Us"]

function App() {
  return (
   <CartContext>
      <BrowserRouter>
       <Navbar links={linksArray}/>
        <Routes>
          <Route path="/" element={<Products />}/>
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
