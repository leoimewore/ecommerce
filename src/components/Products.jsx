import React from 'react'
import { useState,useEffect } from 'react'
import { Grid } from '@mui/material'
import{ Link,Outlet }from "react-router-dom"


import commerce from '../lib/commerce'
import Product from './Product'

const Products = () => {
  
    const [products, setProducts] = useState([])

    useEffect(() => {
        commerce.products.list()
          .then(res => {
            setProducts(res.data)
           
          })
          .catch(err => console.log(err))
    },[])

    console.log(products)





  return (
    
       <Grid container spacing={4} py={3}
       sx={{ padding:"50px"
       }}> 
        {products.map((item)=><Grid item xs={12} sm={6} lg={3} key={item.id} ><Product product={item} products={products}/></Grid>)}
       <Outlet/>
       </Grid>
       
    
    
  )
}

export default Products
