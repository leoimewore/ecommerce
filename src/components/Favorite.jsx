import React from 'react'
import { Button,Grid,Card, CardActions, CardMedia, CardHeader, Typography} from '@mui/material'
import { useCartContext } from '../Context/Cart/CartContext';
import { styled } from '@mui/material/styles';



// const StyledIconButton= styled(IconButton)(

//   {
//     boxShadow:"none",
   
//    fontSize:"12px",
//    fontWeight:"bold",
  
   
//   }
// )

const StyledButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'rgba(36,0,27,0.8574561403508771)',
  borderColor: 'rgba(36,0,27,0.8574561403508771)',
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
    borderColor: 'rgba(255,0,151,0.9802631578947368)',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(121,9,94,1)',
  },
});

const Favorite = () => {


  const {favorite,onAdd,removeFromCart,qty}=useCartContext()
  return (
    <>
      <Typography variant='h4' marginTop={"20px"} marginBottom={"20px"} color={"rgba(36,0,27,0.8574561403508771)"} paddingLeft={"20px"}>Your Favorite Items</Typography>
     <Grid container spacing={4} py={3}
     sx={{ padding:"50px"
     }}>
  
    
       {(favorite.length===0)?<Typography variant='h4' marginTop={"2em"} color={"rgba(36,0,27,0.8574561403508771)"}>You do not have any Favorite Item</Typography> :favorite.map((product)=><Grid item xs={12} sm={6} lg={3} key={product.id}>
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
        
         
         <StyledButton variant="contained" disableRipple onClick={()=>onAdd(product,qty)} >Add</StyledButton>
         
          <StyledButton variant="contained" disableRipple onClick={()=>removeFromCart(product)}>Remove</StyledButton>
          </CardActions>
  
          </Card>
       </Grid>)}
     </Grid>
    </>
  )
}

export default Favorite