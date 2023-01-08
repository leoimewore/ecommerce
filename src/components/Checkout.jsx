import React from 'react'
import { useState,useEffect } from 'react'
import Address from './Address'
import commerce from '../lib/commerce'

const Checkout = ({cart,order,onCapture,error}) => {

    const [checkoutToken, setCheckoutToken] = useState(null)

    const [customerdata]=useState({})

    

    
    useEffect(()=>{
    const generateToken=async()=>{
      try {
        const token=await commerce.checkout.generateToken(cart.id,{type:"cart"})
        console.log(token)
        setCheckoutToken(token)
      }catch(error){
    
      }
    }
    
    generateToken()
    
    },[cart])

   
    
    
   
    
 


  return (
    <div>{ checkoutToken && <Address
    checkoutToken={checkoutToken}
    onCapture={onCapture} 
    />}</div>
   
  )
}

export default Checkout