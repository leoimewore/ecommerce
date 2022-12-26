import React from 'react'
import {Box, Typography,Paper,Button,Avatar,Divider,Container,IconButton} from '@mui/material'
import { useCartContext } from '../Context/Cart/CartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import useMediaQuery from '@mui/material/useMediaQuery';

const IconButtonStyles={
  width:"40%",
  height:"25px",
  border:"1px solid",
  borderRadius:0.5,
  backgroundColor:'rgba(36,0,27,0.8574561403508771)',
  color:"#fff",
  '&:active': {
    boxShadow: 'none',
    color:"black",
    backgroundColor: 'rgba(255,0,151,0.9802631578947368)',
 
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(121,9,94,1)',
  },
}

const Cart = () => {

  const {cartItems,qty,setShowCart,totalPrice,
    removeFromCart,toggleProductQuantity}=useCartContext()

    const showLayout=useMediaQuery("(min-width:600px)")
  return (
<>
<Box display="flex" justifyContent={"center"} marginTop={"20px"} marginBottom={"20px"}>
  <Typography variant="h4">Shopping Cart</Typography>
  
</Box>
   <Container maxWidth="md" sx={{border:"0.01px solid grey",borderRadius:"4px",boxShadow: "0px 2px 0.5px gray"}}>
     {cartItems.map((item)=><Container maxWidth="md"
     sx={{display:"flex",justifyContent:"center",
     alignItems:"center",padding:'25px'}}>
      {<Container maxWidth="md" sx={{display:"flex",borderBottom:"1px solid", flexDirection:(showLayout)?"row":"column",boxShadow: "0px 1px 0.5px gray"}}>
        <Box display={"flex"} padding={"15px"}>
        <Avatar
          alt="productname"
          sx={{width:50,height:50,marginRight:"10px"}}
          src={item.image.url}/>
    
          <Box display="flex" flexDirection={"column"} justifyContent="center">
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="subtitle2">{(item.price.formatted_with_symbol)}</Typography>
          </Box>
        </Box>
  
        <Box display="flex" justifyContent={"space-around"} width >
          <Box display="flex" alignItems={"center"} padding={"2px"}>
            <IconButton 
            aria-label="add"
            sx={IconButtonStyles}
            size="small"
            onClick={()=>toggleProductQuantity(item.id,"dec")}>
              <RemoveIcon sx={{fontSize:"18px"}}/>
            </IconButton>
            <Typography variant="h6" padding={"1px"}>{item.quantity}</Typography>
            <IconButton 
            aria-label="add"
            sx={IconButtonStyles}
            size="small"
            onClick={()=>toggleProductQuantity(item.id,"inc")}
            >
              <AddIcon sx={{fontSize:"18px"}}/>
            </IconButton>
          </Box>
  
          <Box display="flex" flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Typography variant='h5'>Sub-Total:{`$ ${(item.price.raw * item.quantity).toFixed(2)}`}</Typography> 
        {/* <Typography>Sub-Total:{"$599.00"}</Typography> */}
  
         <IconButton aria-label="add"
            
            size="small"
            sx={{color:"rgba(36,0,27,0.8574561403508771)"}}
            onClick={()=>removeFromCart(item)}>
           <DeleteIcon/>
          </IconButton>
          </Box>
  
    
        </Box>
       
    
      </Container>}
   
      
    
     </Container>)}
   
   </Container>

   <Container maxWidth="md" sx={{display:"flex",justifyContent:'flex-end',marginTop:"20px"}}>
  <Typography variant="h4">Total:{`$ ${(totalPrice).toFixed(2)}`}</Typography>
</Container>
</>
  )
}



export default Cart