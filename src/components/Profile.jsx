import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Avatar, Typography} from "@mui/material"


const Profile = () => {

    const {user,isAuthenticated}=useAuth0()
    console.log(user)
  return (
      
       
            isAuthenticated && 
           <>
                <Avatar
                alt="productname"
                sx={{width:40,height:40,marginLeft:"2px"}}
                src={user?.picture}/>
                <Typography>Welcome {user?.given_name}</Typography>
           </>
    
    )
}

export default Profile