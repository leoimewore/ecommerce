import React from 'react'
import { Typography,Box } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import Products from './Products'

const Welcomepage = () => {
    const {isAuthenticated,user}=useAuth0()
    return (
       <>
             <Products/>
       </>
       )
}

export default Welcomepage