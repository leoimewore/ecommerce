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
import Welcomepage from './components/Welcomepage';
import Checkout from './components/Checkout';
import { useState,useEffect } from 'react';
import commerce from './lib/commerce';
import { FormControlUnstyledContext } from '@mui/base';
import Payment from './components/Payment';

const linksArray = ["Products", "Favorites", "New Arrivals", "Contact Us"]

function App() {
  const [products, setProducts] = useState([])
  let [loading,setLoading]=useState(true)

  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const[errorMessage,SetErrorMessage]=useState("")


const fetchProducts=async()=>{
  const {data}=await commerce.products.list()
  setProducts(data)
}
console.log(products)

  const fetchCart=async ()=>{
    commerce.cart.retrieve().then((cartItems)=>{
      setCart(cartItems)
    }).catch((error)=>{
      console.log("There was an error fetching the cart",error)
    })
   
  }


const handleAddtoCart= async(productId,quantity)=>{
    const item=await commerce.cart.add(productId,quantity)
    setCart(item.cart)
  }

  const removeFromCart= async(productId)=>{
    const resp=await commerce.cart.remove(productId)

    setCart(resp.cart)


  }

const handleUpdateCartQuantity= async(productId,quantity)=>{
const resp= await commerce.cart.update(productId,{quantity})

setCart(resp.cart)
  }

  const refreshCart=async()=>{
    const newCart=await commerce.cart.refresh()
    setCart(newCart)
  }

  const handleCaptureCheckout=async(checkoutTokenId,newOrder)=>{
try{

  const incomingOrder= await commerce.checkout.capture(checkoutTokenId,newOrder)
  setOrder(incomingOrder)
  refreshCart()
}
catch(error){
SetErrorMessage(error.data.error.message)
}
  }

useEffect(() => {
     
fetchProducts()
fetchCart()
setLoading(false)

      
  },[])

  console.log(cart)

  return (
   <CartContext>
      <BrowserRouter>
       <Navbar links={linksArray} totalItems={cart.total_unique_items}/>
        <Routes>
          {/* <Route path="ecommerce" element={<Products/>}/> */}
          {/* <Route path="/" element={<Welcomepage/>}/> */}
          <Route path="products" element={<Products cart={cart} setCart={setCart} removeFromCart={removeFromCart} products={products} AddToCart={handleAddtoCart} loading={loading}/>}/>
          <Route path="/" element={<Products/>} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="cart" element={<Cart cartItems={cart} updateQty={handleUpdateCartQuantity} setCart={setCart} removeFromCart={removeFromCart}/>}/>
          <Route path="checkout" element={<Checkout 
          cart={cart} 
          order={order}
          onCapture={handleCaptureCheckout}
          error={errorMessage}/>}/>
          <Route path="payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
   </CartContext>

  );
}

export default App;
