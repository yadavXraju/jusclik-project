import React, { useState, useRef } from 'react';
import { Box, Button, Grid, TextField, InputAdornment, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SelectAccount from './SelectAccount';

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#e64b4c'
    }
  }
});

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectAccountOpen, setSelectAccountOpen] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [step, setStep] = useState(0);
  const otpInputsRef = useRef(Array(4).fill(null));

  const handleSelectAccountToggle = () => {
    setSelectAccountOpen(!selectAccountOpen);
  };

  const handleMobileSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    console.log(`Submitted Mobile Number: ${mobileNumber}`);
    setStep(1); // Move to the next step
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Validate OTP
    const isValidOTP = otp.every((digit) => /^[0-9]{1}$/.test(digit));
    if (isValidOTP) {
      console.log('Valid OTP:', otp.join(''));
      setStep(2); // Move to the next step
      handleSelectAccountToggle(); // Open the SelectAccount dialog
    } else {
      alert('Invalid OTP');
      // Handle invalid OTP, e.g., show an error message
    }
  };

  const handleResendOtp = () => {
    // Logic for resending OTP
    alert('Resend OTP');
  };

  const handleMobileNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(input);
  };

  const handleOtpChange = (index, value, e) => {
    // If the backspace key is pressed and the field is empty, move focus to the previous input field
    if (e.keyCode === 8 && value === '') {
      if (index > 0) {
        otpInputsRef.current[index - 1].focus();
      }
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value.replace(/\D/g, '').slice(0, 1);
    setOtp(newOtp);

    // Move focus to the next input field if available
    if (index < 3 && value !== '' && value.match(/^\d+$/)) {
      otpInputsRef.current[index + 1].focus();
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
        <Box component="form" noValidate onSubmit={step === 0 ? handleMobileSubmit : handleSubmit}>
          {step === 0 && (
            <TextField
              InputProps={{
                style: { borderRadius: '50px', fontSize: '15px', fontFamily: 'plus Jakarta sans' },
                startAdornment: <InputAdornment position="start" style={{ width: '10px' }} />
              }}
              margin="normal"
              variant="outlined"
              required
              fullWidth
              id="Mobilenumber"
              placeholder="Mobile Number"
              name="Mobilenumber"
              autoComplete="Mobilenumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              autoFocus={step === 0}
              sx={{ borderRadius: '50px', backgroundColor: '#ffffff', color: '#6b6666', mb: 2 }}
            />
          )}
          {step > 0 && <Typography variant="subtitle1">Enter OTP code sent to +91 976xxxx78</Typography>}
          {step > 0 && (
            <Grid container spacing={1}>
              {otp.map((digit, index) => (
                <Grid item key={index}>
                  <TextField
                    InputProps={{
                      style: { borderRadius: '5px', fontSize: '15px', fontFamily: 'plus Jakarta sans' }
                    }}
                    margin="normal"
                    variant="outlined"
                    required
                    autoFocus={step === 1 && index === 0}
                    value={digit}
                    onChange={(event) => handleOtpChange(index, event.target.value, event)}
                    onKeyDown={(event) => handleOtpChange(index, digit, event)}
                    error={!/^[0-9]{1}$/.test(digit)}
                    inputProps={{ maxLength: 1 }}
                    sx={{
                      backgroundColor: '#ffffff',
                      width: '56px',
                      color: '#6b6666',
                      fontSize: '15px',
                      fontFamily: 'plus Jakarta sans',
                      '& .MuiInputBase-input': {
                        textAlign: 'center', // Center the text within the input field
                        cursor: 'text' // Ensure cursor appears in the center
                      }
                    }}
                    inputRef={(input) => {
                      otpInputsRef.current[index] = input;
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          <Grid item xs sx={{ cursor: 'pointer', display: 'block', alignItems: 'center', mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {step > 0 && <Typography>Didn’t receive OTP?</Typography>}
              {step > 0 && (
                <Button
                  sx={{ display: 'block', alignItems: 'center', justifyContent: 'flexStart', cursor: 'pointer' }}
                  onClick={handleResendOtp}
                >
                  Resend OTP
                </Button>
              )}
            </Box>
            <Button
              type="submit"
              sx={{
                backgroundColor: '#fff',
                color: '#364152b5',
                borderRadius: '50px',
                border: '1px solid #c4c4c4',
                width: '170px',
                height: '56px',
                fontSize: '15px',
                fontFamily: 'plus Jakarta sans',
                '&:hover': {
                  backgroundColor: '#e64b4c',
                  color: '#fff'
                }
              }}
            >
              {step === 0 ? 'Next' : 'Submit'}
            </Button>
            {/* Render the SelectAccount component only in step 2 */}
            {step === 2 && (
              <Grid item xs>
                <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} onSubmit={handleSelectAccountToggle} />
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
