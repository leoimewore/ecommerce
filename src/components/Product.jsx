import React from 'react'
import { Button,Card,IconButton, CardActions, CardMedia, CardHeader} from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite';

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


const Product = ({product,products}) => {




  const {qty,onAdd,removeFromCart,handleFavorite,favorite}=useCartContext()

  
const changeColor=(ele)=>{
  return favorite.find((item)=>item.id===ele.id)
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
       {/* <div  style={{ display: "flex",
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
      disableRipple
      onClick={()=>toggleButton(product.id,"dec")}>
      <RemoveIcon fontSize="inherit" />
    </StyledIconButton>
   <Typography variant='h5' sx={{width:"33%",border:"1px solid",padding:"4px"}}>{qty}</Typography>
    <StyledIconButton
     aria-label="plus"
     color='primary'
     disableRipple
 
      onClick={()=>toggleButton(product.id,"inc")}>
      <AddIcon fontSize="inherit" />
    </StyledIconButton>
       </div> */}
       <IconButton onClick={()=>handleFavorite(product)} style={{ color:(changeColor(product))?'rgba(255,0,151,0.9802631578947368)':"#fff",backgroundColor:'rgba(36,0,27,0.8574561403508771)'}}>
        <FavoriteIcon/>
       </IconButton>
       <StyledButton variant="contained" disableRipple onClick={()=>onAdd(product,qty)} >Add</StyledButton>
       
        <StyledButton variant="contained" disableRipple onClick={()=>removeFromCart(product)}>Remove</StyledButton>
        </CardActions>

        </Card>
   </div>
  )
}

export default Product