import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Button} from  '@mui/material'

const LoginButton = () => {

    const {loginWithRedirect,isAuthenticated}=useAuth0()
  return (
      
        !isAuthenticated && <Button variant='contained' 
        sx={{ marginLeft: "auto",background: "rgba(36,0,27,0.8574561403508771)",color:"white" }} 
        onClick={()=>loginWithRedirect()}>Login</Button>
    )
}

export default LoginButton