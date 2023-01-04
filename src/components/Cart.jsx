import React from 'react'
import {Box, Typography,Paper,Button,Avatar,Divider,Container,IconButton} from '@mui/material'
import { useCartContext } from '../Context/Cart/CartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import useMediaQuery from '@mui/material/useMediaQuery';
import Profile from './Profile';
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"


const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;




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




const Cart=()=>{

  const {cartItems,qty,setShowCart,totalPrice,
   removeFromCart,toggleProductQuantity}=useCartContext()


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
            <Typography variant="h5">SHOPPING CART ({cartItems.length})</Typography>
            <IconButton 
            onClick={()=>setShowCart(true)} component={Link} to="/products"
            >
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cartItems.map((item) => (
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
                      <IconButton onClick={()=>removeFromCart(item)}>
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>{item.attributes.shortDescription}</Typography>
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={"1.5px solid #cfcdcd"}
                      >
                        <IconButton
                         onClick={()=>toggleProductQuantity(item.id,"dec")} 
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography variant='body1'>{item.quantity}</Typography>
                        <IconButton
                         onClick={()=>toggleProductQuantity(item.id,"inc")}
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
              <Typography variant="h5" fontWeight="bold">${(totalPrice).toFixed(2)}</Typography>
            </FlexBox>
            <Button
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
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};




export default Cart