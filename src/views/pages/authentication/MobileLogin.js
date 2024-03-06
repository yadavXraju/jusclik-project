import React, { useState } from 'react';
import { Box, Button, Grid, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SelectAccount from './SelectAccount';

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#e64b4c'
    }
  }
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectAccountOpen, setSelectAccountOpen] = useState(false);
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(0);

  const handleDialogToggle = () => {
    setDialogOpen(!dialogOpen);
    setSelectAccountOpen(false);
  };

  const handleSelectAccountToggle = () => {
    setSelectAccountOpen(!selectAccountOpen);
    setDialogOpen(false);
  };

  const handleMobileSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    console.log(`Submitted Mobile Number: ${mobileNumber}`);
    handleSelectAccountToggle();
    setStep(1); // Move to the next step
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Validate OTP
    if (/^[0-9]{6}$/.test(otp)) {
      console.log('Valid OTP:', otp);
      setStep(2); // Move to the next step
      // If you want to close the dialog after submission, keep the next line
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

  const handleOtpChange = (event) => {
    const input = event.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(input);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left'
        }}
      >
        <Box component="form" noValidate onSubmit={step === 0 ? handleMobileSubmit : handleSubmit}>
          <TextField
            InputProps={{
              style: {
                borderRadius: '50px',
                fontSize: '15px',
                fontFamily: 'plus Jakarta sans'
              },
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
            autoFocus
            sx={{ borderRadius: '50px', backgroundColor: '#ffffff', color: '#6b6666', mb: 2 }}
          />
          <TextField
            InputProps={{
              style: { borderRadius: '50px', fontSize: '15px', fontFamily: 'plus Jakarta sans' },
              startAdornment: <InputAdornment position="start" style={{ paddingLeft: '10px' }} />,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: '#364152b5', marginRight: '2px' }}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            margin="normal"
            variant="outlined"
            fullWidth
            autoFocus={step === 1}
            required={step === 1}
            id="otp"
            name="otp"
            type={showPassword ? 'text' : 'password'} // Set type to 'text' or 'password' based on showPassword state
            style={{ borderRadius: '50px', display: step === 1 ? 'block' : 'none' }}
            value={otp}
            onChange={handleOtpChange}
            error={!/^[0-9]{6}$/.test(otp) && otp.length > 0}
            placeholder="Enter OTP"
            sx={{
              borderRadius: '50px',
              backgroundColor: '#ffffff',
              color: '#6b6666',
              fontSize: '15px',
              fontFamily: 'plus Jakarta sans'
            }}
          />

          <Grid
            item
            xs
            sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
            style={{ cursor: 'pointer' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, justifyContent: 'space-between' }}>
              <Button
                type="submit"
                sx={{
                  backgroundColor: '#fff',
                  color: '#364152b5',
                  borderRadius: '50px',
                  border: '1px solid #c4c4c4',
                  width: '170px',
                  height: '56px',
                  fontSize: '20px',

                  fontFamily: 'plus Jakarta sans',
                  '&:hover': {
                    backgroundColor: '#e64b4c',
                    color: '#fff'
                  },
                  display: step === 2 ? 'none' : 'block'
                }}
              >
                {step === 0 ? 'Next' : 'Submit'}
              </Button>
              {step === 1 && (
                <Typography
                  sx={{ display: 'block', alignItems: 'center', justifyContent: 'flexStart', cursor: 'pointer' }}
                  onClick={handleResendOtp}
                >
                  Resend OTP
                </Typography>
              )}
            </Box>
            {/* Render the SelectAccount component only in step 2 */}
            {step === 2 && (
              <Grid item xs>
                <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} onSubmit={handleDialogToggle} />
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
