import React from 'react'
import {Paper,Box, CardMedia, Typography, TextField} from '@mui/material'


const LoginPage = () => {
  return (
    <>
     <Paper elevation="2">
       <Box >
         <CardMedia title="" image="" />

         <Typography variant="h1" color="initial">Hi, Welcome Back</Typography>
         <Typography variant="body1" color="initial">Enter your credentials to continue</Typography>

         <TextField
           id=""
          placeholder='Email address/username'
         />
       </Box>
     </Paper> 
    </>
  )
}

export default LoginPage
