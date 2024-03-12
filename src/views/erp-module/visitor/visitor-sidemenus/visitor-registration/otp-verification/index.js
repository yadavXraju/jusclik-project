import React, { useState } from 'react';
import { Typography, Button, Paper, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ScreenLockPortraitOutlinedIcon from '@mui/icons-material/ScreenLockPortraitOutlined';
import { Box } from '@mui/system';

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper sx={{ py: "2rem", margin: 2, textAlign: 'center' }} elevation={4}>
        <ScreenLockPortraitOutlinedIcon sx={{
          width: '100px',
          height: '100px',
          padding: '1rem',
          fontSize: '40px',
          color: 'white',
          borderRadius: '70%',
          bgcolor: 'rgb(30, 136, 229)',
          margin: 'auto'
        }} />

        <Typography variant="h3" sx={{ mt: '25px', letterSpacing: '0.5px' }}>Verification</Typography>
        <Typography sx={{ mt: '30px', fontWeight: '500' }}>You will get a OTP via SMS</Typography>
        <TextField
          type="password"
          sx={{
            display: 'block',
            mt: '20px'
          }}
        />
        <Button variant="contained" size="large" color="primary" sx={{ mt: '20px' }}>VERIFY</Button>
        <Typography variant="body1" sx={{ mt: '20px' }}>
          Didn&apos;t Receive the Verification OTP?{' '}
          <Typography variant='span' sx={{ fontWeight: "600", "&:hover": { textDecoration: 'underline', cursor: 'pointer' } }} onClick={() => navigate('/parent/dashboard')}>
            Resend again
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
}

export default OtpVerification;
