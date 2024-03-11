import React from 'react';
import { Typography, Button, Paper, TextField } from  '@mui/material';
import { useNavigate } from "react-router-dom";
import ScreenLockPortraitOutlinedIcon from '@mui/icons-material/ScreenLockPortraitOutlined';
import { Box} from '@mui/system';




const OtpVerification = () => {
  const navigate =  useNavigate()

  return (
    <Box  >
      <Paper sx={{ py:"2rem", margin: 2,textAlign:'center' }}>
      <ScreenLockPortraitOutlinedIcon sx={{margin:'auto',
       
      width:'100px', 
      height:'100px',
      padding:'1rem',
      fontSize:'40px',
       color: 'white',
       borderRadius: '70%',
        bgcolor:'rgb(30, 136, 229)',
        display: 'flex',
        justifyContent: 'center'
      }} /> 
      
      <Typography variant="h1" sx={{ mt:'25px'}}>Verification</Typography>
      <Typography variant='h3'sx={{ mt:'30px',fontWeight:'500'}}>You will get a OTP via SMS</Typography>
      <TextField
      type="password"
      sx={{display:'block',
      mt:'20px'}}
    />
      <Button variant="contained" color="primary" sx={{ mt:'20px'}}>VERIFY</Button>
      <Typography variant="body1" sx={{ mt:'20px'}}>Didn&apos;t Receive Verification OTP?   <Typography variant='span' onClick={()=>navigate('/parent/dashboard')}>Resend again</Typography> </Typography>
     
      </Paper>
    </Box>
  );
}

export default OtpVerification