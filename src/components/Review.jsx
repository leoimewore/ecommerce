import React from 'react'

import { Typography,List,ListItem,ListItemText,Box} from '@mui/material'

const Review = ({checkoutToken}) => {


    console.log(checkoutToken)
  return (
    <Box>
  
    <Typography variant='h5'>
        Order Summary
    </Typography>


   
        <List disablePadding  divider>
        {checkoutToken.live.line_items.map((product)=>(
       <Box sx={{display:"flex"}}>
            <ListItem style={{padding:"10px 0",color:"primary"}} key={product.name}>
                <ListItemText 
                primary={product.name} 
              
                secondary={`Quantity: ${product.quantity}`}/>
                <Typography variant='body2'>{product.price.formatted_with_symbol}</Typography>
            </ListItem>
       </Box>))}
   
       

       <ListItem style={{padding:"10px 0",fontWeight:"bold"}}>
<ListItemText primary="Total" sx={{fontWeight:"bold"}}
secondary={`$ ${checkoutToken.live.total.raw}`} color={"primary"}/>
       </ListItem>
      </List>
    
    
    </ Box>
  )
}

export default Review