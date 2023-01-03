import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import{ Button} from  '@mui/material'
import Products from './Products'

const Logout = () => {

    const {logout,isAuthenticated}=useAuth0()
  return (
    isAuthenticated &&
        <Button variant='contained' sx={{ marginLeft: "auto",
        background: "rgba(36,0,27,0.8574561403508771)",color:"white" }} 
        onClick={()=>logout()}>Sign Out</Button>
  )
}

export default Logout