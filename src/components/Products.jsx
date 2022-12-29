import React from 'react'
import { useState,useEffect } from 'react'
import { Grid } from '@mui/material'

import Spinner from './Spinner'


import commerce from '../lib/commerce'
import Product from './Product'

const Products = () => {
  
    const [products, setProducts] = useState([])
    let [loading,setLoading]=useState(true)

    useEffect(() => {
        commerce.products.list()
          .then(res => {
            setProducts(res.data)
            setLoading(false)
           
          })
          .catch(err => console.log(err))
    },[])

    console.log(products)





  return (
    
       <Grid container spacing={4} py={3}
       sx={{ padding:"50px"
       }}> 
        {loading?<div style={{display:"flex",justifyContent:"center",height:"100vh",width:"100%",alignItems:"center"}}><Spinner loading={loading}/></div>: products.map((item)=><Grid item xs={12} sm={6} lg={3} key={item.id} ><Product product={item} products={products}/></Grid>)}
      
       </Grid>
       
    
    
  )
}

export default Products
