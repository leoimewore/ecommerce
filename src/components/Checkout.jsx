import React from 'react'
import { useState,useEffect } from 'react'
import Address from './Address'
import commerce from '../lib/commerce'
import Spinner from './Spinner'

const Checkout = ({cart,order,onCapture}) => {

    const [checkoutToken, setCheckoutToken] = useState(null)

    const[spinnerLoad,setSpinnerLoad]=useState(true)


    

    
    useEffect(()=>{
    const generateToken=async()=>{
      try {
        const token=await commerce.checkout.generateToken(cart.id,{type:"cart"})
        console.log(token)
        setCheckoutToken(token)
        setSpinnerLoad(false)
       
      
      }catch(error){
    
      }
    }
    
    generateToken()
 
    
    },[cart])

   
    
    
   
    
 


  return (
    <div>{spinnerLoad?<div style={{display:"flex",justifyContent:"center",height:"100vh",width:"100%",alignItems:"center"}}><Spinner spinnerLoad={spinnerLoad}/></div>:<Address
    checkoutToken={checkoutToken}
    onCapture={onCapture} 
    />}</div>
   
  )
}

export default Checkout