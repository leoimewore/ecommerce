import React from 'react'
import { Button,Card,IconButton, CardActions, CardMedia, CardHeader} from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite';

import { useCartContext } from '../Context/Cart/CartContext';
import { styled } from '@mui/material/styles';
import StyledButton from '../StyledButton';
import Cart from './Cart';
import commerce from '../lib/commerce';



const Product = ({product,AddToCart,cart,setCart}) => {




  const {qty,onAdd,handleFavorite,favorite}=useCartContext()

  
const changeColor=(ele)=>{
  return favorite.find((item)=>item.id===ele.id)
}
console.log(cart.line_items)

const remove=async(productId)=>{
  let bool=cart.line_items.find((item)=>item.product_id===product.id)
  let index=cart.line_items.findIndex((item)=>item.product_id===product.id)

  
  

  if(bool){
    let resp=await commerce.cart.remove(cart.line_items[index].id)

    setCart(resp.cart)
  }
}


 

  return (
   <div>
        <Card variant='outlined' sx={{ minWidth: 275,boxShadow: 1,}}>
        <CardMedia 
        component="img"
        height="194"
        image={product.image.url}
        alt="Shop"/>
        <CardHeader 
        title={product.name}
        subheader={product.price.formatted_with_symbol}/>

        <CardActions sx={{display:"flex",justifyContent:"center"}}>
       
       <IconButton onClick={()=>handleFavorite(product)} style={{ color:(changeColor(product))?'rgba(255,0,151,0.9802631578947368)':"#fff",backgroundColor:'rgba(36,0,27,0.8574561403508771)'}}>
        <FavoriteIcon/>
       </IconButton>
       <StyledButton variant="contained" disableRipple onClick={()=>AddToCart(product.id,1)} >Add</StyledButton>
       
        <StyledButton variant="contained" disableRipple onClick={()=>remove(product.id)}>Remove</StyledButton>
        </CardActions>

        </Card>
   </div>
  )
}

export default Product