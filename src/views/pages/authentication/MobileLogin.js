import React, { useState } from 'react';
import { Box, Button, Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EnterMobileDialog from './EnterMobileDialog';
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
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectAccountOpen, setSelectAccountOpen] = useState(false);
  const [otp, setOtp] = useState('');

  const handleDialogToggle = () => {
    setDialogOpen(!dialogOpen);
    setSelectAccountOpen(false);
  };

  const handleSelectAccountToggle = () => {
    setSelectAccountOpen(!selectAccountOpen);
    setDialogOpen(false);
  };

  const handleMobileSubmit = ({ country, mobileNumber }) => {
    console.log(`Submitted Mobile Number: ${country} ${mobileNumber}`);
    handleSelectAccountToggle();
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    event.preventDefault();
    // Validate OTP
    if (/^[0-9]{6}$/.test(otp)) {
      console.log('Valid OTP:', otp);

      // If you want to close the dialog after submission, keep the next line
      handleClose();
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left'
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextField
            InputProps={{
              style: {
                borderRadius: '50px'
              }
            }}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="Mobilenumber"
            label="Mobile Number"
            name="Mobilenumber"
            autoComplete="Mobilenumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            autoFocus
            sx={{ borderRadius: '50px', backgroundColor: '#ffffff', color: '#6b6666' }}
          />
          <TextField
            InputProps={{
              style: { borderRadius: '50px' },
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
            autoFocus
            required
            id="otp"
            name="otp"
            type="tel"
            style={{ borderRadius: '50px' }}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            error={!/^[0-9]{6}$/.test(otp) && otp.length > 0}
            helperText={!/^[0-9]{6}$/.test(otp) && otp.length > 0 ? 'Enter a valid 6-digit OTP' : ''}
            label="Enter OTP"
            sx={{ borderRadius: '50px', backgroundColor: '#ffffff', color: '#6b6666' }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flexStart' }}>
            <Button onClick={handleResendOtp} color="primary">
              Resend OTP
            </Button>
          </Box>
          <Grid
            item
            xs
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}
            style={{ cursor: 'pointer' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flexStart' }}>
              <Button
                type="submit"
                sx={{
                  backgroundColor: '#fff',
                  color: '#364152b5',
                  borderRadius: '50px',
                  border: '1px solid #c4c4c4',
                  width: '150px',
                  display: 'flex',
                  height: '56px',
                  '&:hover': {
                    backgroundColor: '#e64b4c',
                    color: '#fff'
                  }
                }}
              >
                SUBMIT
              </Button>
            </Box>
            <EnterMobileDialog open={dialogOpen} onClose={handleDialogToggle} onMobileSubmit={handleMobileSubmit} />
            <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} />
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
