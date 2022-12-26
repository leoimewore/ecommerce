import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid, Tabs, Tab, Button, useTheme, useMediaQuery } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom"
import Search from "../Search"
import { Box } from '@mui/system';
import { useState } from 'react';
import Drawerbar from './Drawerbar';
import { useCartContext } from '../Context/Cart/CartContext';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


const Navbar = ({ links }) => {
    const theme = useTheme()
    const {numberOfItems,setShowCart}=useCartContext()

 
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const [value, setValue] = useState(0)
    return (

        <AppBar position="static" sx={{ backgroundImage: "linear-gradient(90deg, rgba(36,0,27,0.8574561403508771) 0%, rgba(121,9,94,1) 45%, rgba(255,0,151,0.9802631578947368) 100%);" ,color:"white"}}>
            <Toolbar>
           
                {isMatch ? <>  <Drawerbar links={links} setValue={setValue} /></>:
                <Grid container sx={{ placeItems: "center" }}>
                    <Grid item xs={1} >
                        
                    </Grid>
                    <Grid item xs={7}>
                        <Tabs value={value} textColor="inherit" indicatorColor='secondary' onChange={(e, val) => setValue(val)}>
                            {links.map((link, index) => (<Tab key={index} label={link} component={Link} to={`/${link.toLowerCase().replace(" ","")}`}/>))}
                           

                        </Tabs>
   

                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <Box display="flex">
                            <Button variant='contained' sx={{ marginLeft: "auto",background: "rgba(36,0,27,0.8574561403508771)",color:"white" }}>Login</Button>
                            <Button variant='contained' sx={{ marginLeft: 1, background: "rgba(36,0,27,0.8574561403508771)",color:"white"  }}>Signup</Button>
                        </Box>
                    </Grid>
                </Grid>}

                <IconButton sx={{color:'white'}} onClick={()=>setShowCart(true)} component={Link} to="/cart">
                <StyledBadge badgeContent={numberOfItems} color="primary" >
                <ShoppingCartRoundedIcon />
                </StyledBadge>
                </IconButton>

               
              
            </Toolbar>
        </AppBar>




    )
}



export default Navbar