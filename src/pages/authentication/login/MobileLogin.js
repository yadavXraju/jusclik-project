// Page Owner: Suraj
// Description: Mobile login Page

import React, { useState, useRef } from 'react';
import { Box, Button, Grid, TextField, InputAdornment, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SelectAccount from './SelectAccount';
import { withStyles } from '@mui/styles';

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#e64b4c'
    }
  }
});

// Define custom styles for the Select component
const styles = {
  select: {
    '&:before': {
      borderBottom: 'none' // Remove the underline
    },
    '&:after': {
      borderBottom: 'none' // Remove the underline after selection
    }
  }
};

function CountrySelect({ country, handleCountryChange, classes }) {
  return (
    <Select value={country} onChange={handleCountryChange} variant="standard" className={classes.select}>
      <MenuItem selected value="India">
        IN (+91)
      </MenuItem>
      <MenuItem value="Dubai">UAE (+971)</MenuItem>
      <MenuItem value="USA">USA (+1)</MenuItem>
    </Select>
  );
}

// Apply styles to CountrySelect component
const StyledCountrySelect = withStyles(styles)(CountrySelect);

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectAccountOpen, setSelectAccountOpen] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [step, setStep] = useState(0);
  const otpInputsRef = useRef(Array(4).fill(null));
  const [mobileError, setMobileError] = useState(false);
  const [country, setCountry] = React.useState('India');
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSelectAccountToggle = () => {
    setSelectAccountOpen(!selectAccountOpen);
  };

  const handleMobileSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    if (mobileNumber.length === 10) {
      console.log(`Submitted Mobile Number: ${mobileNumber}`);
      setStep(1); // Move to the next step
    } else {
      setMobileError(true); // Show error if mobile number is not 10 digits
    }
  };

  const handleResendOtp = () => {
    // Logic for resending OTP
    alert('OTP Sent Successfully!');
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
      console.log('Enter Your OTP');
      // Handle invalid OTP, e.g., show an error message
    }
  };

  // Function to handle changing mobile number
  const handleMobileNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, '').slice(0, 10); // Remove non-digit characters and limit to 10 digits
    setMobileNumber(input);
    setMobileError(false); // Reset mobile number error
  };

  // Function to handle changing OTP input
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

  const theme = useTheme(); // Accessing theme object using useTheme hook

  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}> */}
        <Box component="form" noValidate onSubmit={step === 0 ? handleMobileSubmit : handleSubmit}>
          {step === 0 && (
            <Box>
              <TextField
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <StyledCountrySelect country={country} handleCountryChange={handleCountryChange} />
                    </InputAdornment>
                  ),
                  style: { borderRadius: '50px', fontSize: '15px', fontFamily: 'plus Jakarta sans', backgroundColor: '#ffffff' }
                }}
                margin="normal"
                variant="outlined"
                required
                fullWidth
                error={mobileError} // Set error state
                id="Mobilenumber"
                helperText={mobileError ? 'Mobile number must be 10 digits' : 'Enter your registered mobile number'} // Error message
                placeholder="Mobile Number"
                name="Mobilenumber"
                autoComplete="Mobilenumber"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                autoFocus={step === 0}
                sx={{ borderRadius: '50px', color: '#6b6666', mb: isMobile ? 2 : 0 }}
              />
            </Box>
          )}
          {step > 0 && (
            <Typography sx={{ fontFamily: 'plus Jakarta sans', fontSize: '15px', color: '#878787', fontWeight: 500, mt: 1, textAlign:isMobile?'center':'left' }}>
              Enter OTP code sent to +91 9761xxxx78
            </Typography>
          )}
          {step > 0 && (
            <Grid container spacing={1} sx={{justifyContent:isMobile?'center':'flex-start'}}>
              {otp.map((digit, index) => (
                <Grid item key={index}>
                  <TextField
                    InputProps={{
                      style: { borderRadius: '10px', fontSize: '15px', fontFamily: 'plus Jakarta sans' }
                    }}
                    margin="normal"
                    variant="outlined"
                    required
                    autoFocus={step === 1 && index === 0}
                    value={digit}
                    onChange={(event) => handleOtpChange(index, event.target.value, event)}
                    onKeyDown={(event) => handleOtpChange(index, digit, event)}
                    // error={!/^[0-9]{1}$/.test(digit)}
                    inputProps={{ maxLength: 1 }}
                    sx={{
                      backgroundColor: '#ffffff',
                      width: '56px',
                      color: '#6b6666',
                      fontSize: '15px',
                      borderRadius: '10px',
                      fontFamily: 'plus Jakarta sans',
                      '& .MuiInputBase-input': {
                        textAlign: 'center',
                        cursor: 'text',
                        fontSize: '15px',
                        color: ''
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
          <Grid item xs sx={{ display: 'block', mt: isMobile ? 1 : 3 }}>
            <Box
              sx={{
                display: isMobile ? 'block' : 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: isMobile ? 'center' : 'left'
              }}
            >
              <Button
                type="submit"
                sx={{
                  backgroundColor: '#fff',
                  color: '#364152b5',
                  borderRadius: '50px',
                  border: '1px solid #c4c4c4',
                  width: isMobile ? '130px' : '170px',
                  height: isMobile ? '50px' : '56px',
                  fontSize: '15px',
                  fontFamily: 'plus Jakarta sans',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#e64b4c',
                    color: '#fff'
                  }
                }}
              >
                {step === 0 ? 'Next' : 'Submit'}
              </Button>
              {step > 0 && (
                <Typography
                  sx={{
                    pt: isMobile ? 1 : 0,
                    color: '#E64B4C',
                    fontSize: '15px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    paddingLeft: isMobile ? '0px' : '30px',
                    fontFamily: 'plus Jakarta sans'
                  }}
                  onClick={handleResendOtp}
                >
                  Resend OTP
                </Typography>
              )}
            </Box>
            {/* Render the SelectAccount component only in step 2 */}
            {step === 2 && (
              <Grid item xs>
                <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} onSubmit={handleSelectAccountToggle} />
              </Grid>
            )}
          </Grid>
        </Box>
      {/* </Box> */}
    </ThemeProvider>
  );
}
