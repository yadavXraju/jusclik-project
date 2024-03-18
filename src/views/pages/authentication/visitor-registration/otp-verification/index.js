import React, { useState, useRef } from 'react';
import { Typography, Button, Paper, TextField, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import { css } from '../css';


const OtpVerification = ({step,handleSteps}) => {
const navigate = useNavigate();
const [otp, setOtp] = useState(['', '', '', '']);
const inputRefs = useRef([]);
const secureOtp=['1','1','1','1']
const newOtp = [...otp];


const handleOtpChange = (index, value) => {
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


  const handleVerify = () => {
    // Check if otp matches secureOtp
    const isOtpValid = otp.every((digit, index) => digit === secureOtp[index]);
    if (isOtpValid) {
      handleSteps(step);
    } else {
      // Handle invalid OTP
      console.log('Invalid OTP');
    }
  };

console.log(newOtp===secureOtp);
return (
    <Box sx={{...css.center }}>
      <Paper sx={{ ...css.mobilePaper,width:'100%'}} elevation={4}>
        <Typography variant="h6" sx={{ ...css.formTextColor,padding:'1rem 0',sm:'14px',...css.horizontalCenter }}>Verification</Typography>
        <Typography sx={{ ...css.formTextColor,py:'1rem', fontWeight: '400',...css.horizontalCenter }}>OTP has been sent to 87xxxxx531</Typography>
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
            ...css.center, ...css.marginAuto,
            ...css.submitButton,...css.button
          }}
          onClick={handleVerify}
        >VERIFY</Button>
        <Typography variant="body1" sx={{ ...css.formTextColor,pt:'1rem',...css.horizontalCenter }}>
          Didnt Receive the Verification OTP?{' '}
        </Typography>
          <Typography variant='span' sx={{ ...css.formTextColor,fontWeight: "500", "&:hover": { textDecoration: 'underline', cursor: 'pointer' },...css.horizontalCenter,py:'1rem' }} onClick={() => navigate('/parent/dashboard')}>
            Resend again
          </Typography>
      </Paper>
    </Box>
  );
}
export default OtpVerification;