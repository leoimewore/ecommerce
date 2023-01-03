import React from 'react'
import { Typography,Box } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'



const Homepage = () => {
  const {isAuthenticated,user}=useAuth0()


  return (
  <>
     {<Box display={"flex"} justifyContent={"center"}>
      <Typography variant="h4">Welcome to my Shopping store, kindly login to make purchases</Typography>
     </Box>}
  </>
  )
}

export default Homepage