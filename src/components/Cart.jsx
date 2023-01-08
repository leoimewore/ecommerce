import React from 'react'
import {Box, Typography,Paper,Button,Avatar,Divider,IconButton} from '@mui/material'
import { useCartContext } from '../Context/Cart/CartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"


const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;




// const IconButtonStyles={
//   width:"40%",
//   height:"25px",
//   border:"1px solid",
//   borderRadius:0.5,
//   backgroundColor:'rgba(36,0,27,0.8574561403508771)',
//   color:"#fff",
//   '&:active': {
//     boxShadow: 'none',
//     color:"black",
//     backgroundColor: 'rgba(255,0,151,0.9802631578947368)',
 
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(121,9,94,1)',
//   },
// }




const Cart=({cartItems,removeFromCart,updateQty})=>{


  


  console.log(cartItems)

  const {qty,setShowCart,totalPrice,
   toggleProductQuantity}=useCartContext()


  return (
    <Box
      display="block"
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h5">SHOPPING CART ({cartItems.line_items.length})</Typography>
            <IconButton 
            onClick={()=>setShowCart(true)} component={Link} to="/products"
            >
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cartItems.line_items.map((item) => (
              <Box key={item.id}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                  <Avatar
            alt="productname"
            sx={{width:50,height:50,marginRight:"10px"}}
           src={item.image.url}/>
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold" variant="subtitle1" >
                        {item.name}
                      </Typography>
                      <IconButton onClick={()=>removeFromCart(item.id)}>
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    {/* <Typography>{item.attributes.shortDescription}</Typography> */}
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={"1.5px solid #cfcdcd"}
                      >
                        <IconButton
                         onClick={()=>updateQty(item.id,item.quantity-1)} 
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography variant='body1'>{item.quantity}</Typography>
                        <IconButton
                         onClick={()=>updateQty(item.id,item.quantity+1)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold" variant='h5'>
                        ${(item.price.raw).toFixed(2)}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography variant="h5" fontWeight="bold">SUBTOTAL</Typography>
              <Typography variant="h5" fontWeight="bold">${(cartItems.subtotal.raw).toFixed(2)}</Typography>
            </FlexBox>
            {cartItems.line_items.length>0 &&<Button
              sx={{
                backgroundColor:"rgba(36,0,27,0.8574561403508771) ",
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              
              component={Link} to="/checkout"
            >
              CHECKOUT
            </Button>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};




export default Cart