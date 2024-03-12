import React from 'react'
import {Typography,Box, Paper,Button}from '@mui/material';


const selfieCheckin = () => {










 return (
    <>
   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , height:'90vh' }}>
   <Box>
   <Box >
        <Box variant="h3" >
      
      <Typography variant='h4' sx={{display:'flex', justifyContent: 'center' , mb:'20px', fontWeight:'600'}}>Self Check-In
      </Typography>
      <Typography variant='h2'>Shaurya Software, Hermitage Plaza </Typography>
      <Typography variant='h3' sx={{display:'flex', justifyContent: 'center' , marginTop:'20px', fontWeight:'400'}}>Managed by jusklik</Typography>
         </Box>   
   </Box>
   <Box sx={{ display: 'flex'}}>
   <Paper sx={{ p:'90px', textAlign: 'center', width:'100' , height:'100 '}} elevation={4}>
    <Box>
   <Typography variant="h4" sx={{}}>please upload your selfie</Typography>
   </Box>
   <Paper sx={{ p:'90px', textAlign: 'center', width:'100' , height:'100 '}} elevation={2}>
    select selfie
   </Paper>

   <Button variant="contained" size="large" color="primary" sx={{mt:'50px', bgcolor:'red', width:'100%'}}>SUBMIT</Button>
   </Paper>
   </Box>
   </Box>
   </Box>



          </>
 )
}
export default selfieCheckin; 