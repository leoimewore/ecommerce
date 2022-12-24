import React from 'react'
import {Grid,Box,Divider,Avatar,Typography,IconButton, CssBaseline, Button,TextField}from "@mui/material"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useCartContext } from '../Context/Cart/CartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { borderBottom, Container } from '@mui/system';
import { styled } from '@mui/material/styles';




const StyledIconButton= styled(IconButton)(

  {
    boxShadow:"none",
   
   fontSize:"12px",
   fontWeight:"bold",
  
   
  }
)

const StyledButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  
  lineHeight: 1.5,
  
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgba(255,0,151,0.9802631578947368)',
  
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
 
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(121,9,94,1)',
  },
});
const Cart = () => {



const {cartItems,qty,setShowCart,totalPrice,
  removeFromCart,toggleProductQuantity}=useCartContext()

console.log(cartItems)


  return (
  
<>
<Typography variant='h4' marginTop={"20px"} marginBottom={"20px"} color={"rgba(36,0,27,0.8574561403508771)"} paddingLeft={"20px"}>Shopping Cart</Typography>

<Box>
<Divider/>
  {(cartItems.length===0)?<Typography variant='h4' marginTop={"2em"}>Your Shopping Cart is empty</Typography> : cartItems.map((item,index)=><Box display={"flex"} alignItems={"center"} key={index} justifyContent={"space-between"}
  marginTop={"50px"} width={"80%"} marginLeft={"auto"} marginRight={"auto"} padding={"2px"}>
  
  
    <Box display={"flex"} alignItems={"center"} gap={"20px"} width={'20%'}> 
      <Avatar
      alt="productname"
      sx={{width:50,height:50}}
      src={item.image.url}/>
      <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
        <Typography variant='h6'>{item.name}</Typography>
        <Typography variant='subtitle1'>{(item.price.formatted_with_symbol)}</Typography>
      </Box>
    </Box>
  
    <Box display={"flex"} alignItems={"center"} width={"10%"}>
  
    <div  style={{ display: "flex",
       border:"2px solid",
       alignItems: "center",
       justifyContent:"space-between",
       height:"100%",
       borderRadius:"20%",
       marginRight:"50px",
}}>
    <StyledIconButton
      aria-label="minus"
      variant="contained"
      color='primary'
      onClick={()=>toggleProductQuantity(item.id,"dec")}
      >
      <RemoveIcon fontSize="inherit" />
    </StyledIconButton>
   <Typography variant='h5' sx={{width:"33%",border:"1px solid",padding:"4px"}}>{item.quantity}</Typography>
    <StyledIconButton
     aria-label="plus"
     color='primary'
     onClick={()=>toggleProductQuantity(item.id,"inc")}
     >
      <AddIcon fontSize="inherit" />
    </StyledIconButton>
       </div>
  
  
  
    </Box>
  
    <Box>
     <Typography variant='h5'>Sub-Total:{`$ ${(item.price.raw * item.quantity).toFixed(2)}`}</Typography> 
      {/* <Typography>Sub-Total:{"$599.00"}</Typography> */}

       <StyledButton aria-label='remove from cart' size="small" variant='text' onClick={()=>removeFromCart(item)}>
         Remove
        </StyledButton>
      
    </Box>
  
  
  
  
  
  
  
  
  </Box>)}
  <Divider/>
</Box>

<Box marginTop={"2em"} display={"flex"} flexDirection={"row-reverse"} padding={"7em"}>
  <Typography variant='h4' color={"primary"} >Total:{`$ ${(totalPrice).toFixed(2)}`}</Typography>
</Box>


</>

  )
}

export default Cart