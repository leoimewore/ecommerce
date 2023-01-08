import React from 'react'

import { Grid } from '@mui/material'

import Spinner from './Spinner'



import Product from './Product'

const Products = ({products,AddToCart,loading,removeFromCart,cart,setCart}) => {
  
    
   





  return (
    
       <Grid container spacing={4} py={3}
       sx={{ padding:"50px"
       }}> 
        {loading?<div style={{display:"flex",justifyContent:"center",height:"100vh",width:"100%",alignItems:"center"}}><Spinner loading={loading}/></div>: products.map((item)=><Grid item xs={12} sm={6} lg={3} key={item.id} >
          <Product 
        product={item} AddToCart={AddToCart} 
        removeFromCart={removeFromCart}
        cart={cart} 
        setCart={setCart} /></Grid>)}
       
       </Grid>
       
    
    
  )
}

export default Products
