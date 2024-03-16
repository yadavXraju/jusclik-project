import React, { useState, useRef } from 'react';
import { Typography, Button, Paper, TextField, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ScreenLockPortraitOutlinedIcon from '@mui/icons-material/ScreenLockPortraitOutlined';
import { Box } from '@mui/system';

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/\D/g, '').slice(0, 1); // Allow only digits
    setOtp(newOtp);

    if (value === '' && index > 0) {
      // Move focus to the previous input field if backspace is pressed and field is empty
      inputRefs.current[index - 1].focus();
    } else if (value && index < otp.length - 1) {
      // Move focus to the next input field if available
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper sx={{ p:'20px', margin: 2, textAlign: 'center' }} elevation={4}>
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
        <Typography sx={{ mt: '30px', fontWeight: '500' }}>You will get an OTP via SMS</Typography>
        <Grid container spacing={1} justifyContent="center">
          {otp.map((digit, index) => (
            <Grid item key={index}>
              <TextField
                InputProps={{
                  style: { borderRadius: '10px', fontSize: '15px', fontFamily: 'plus Jakarta sans' }
                }}
                margin="normal"
                variant="outlined"
                required
                autoFocus={index === 0}
                value={digit}
                onChange={(event) => handleOtpChange(index, event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && digit === '') {
                    event.preventDefault(); // Prevent default backspace behavior
                    handleOtpChange(index, ''); // Handle backspace manually
                  }
                }}
                inputProps={{ maxLength: 1 }}
                inputRef={(el) => (inputRefs.current[index] = el)}
                sx={{
                  backgroundColor: '#ffffff',
                  width: '56px',
                  color: '#6b6666',
                  fontSize: '15px',
                  borderRadius: '10px',
                  fontFamily: 'plus Jakarta sans',
                  '& .MuiInputBase-input': {
                    textAlign: 'center',
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" size="large" color="primary" 
          sx={{
            mt: '20px', backgroundColor: '#fff',
            color: '#364152b5',
            borderRadius: '50px',
            border: '1px solid #c4c4c4',
            width:  '130px',
            height:'50px',
            fontSize: '15px',
            fontFamily: 'plus Jakarta sans',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#e64b4c',
              color: '#fff'
            }
          }}
        >VERIFY</Button>
        <Typography variant="body1" sx={{ mt: '20px' }}>
          Didnt Receive the Verification OTP?{' '}
          <Typography variant='span' sx={{ fontWeight: "600", "&:hover": { textDecoration: 'underline', cursor: 'pointer' } }} onClick={() => navigate('/parent/dashboard')}>
            Resend again
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
}

export default OtpVerification;
