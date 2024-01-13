import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const ForgetPasswordComponent = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSendOtp = () => {
    console.log(`Sending OTP to: ${emailOrPhone}`);
    setStep(2);
  };

  const handleVerifyOtp = () => {
    console.log(`Verifying OTP: ${otp}`);
    setStep(3);
  };

  const handleResetPassword = () => {
    console.log(`Resetting password to: ${newPassword}`);
    onComplete();
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {step === 1 && (
        <>
          <Typography component="h1" variant="h5" sx={{ color: 'white', fontWeight: '700', fontSize: '30px' }}>
            Forget Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSendOtp} sx={{ mt: 1 }}>
            <TextField
              InputProps={{
                style: {
                  borderRadius: '50px',
                },
              }}
              margin="normal"
              required
              fullWidth
              id="emailOrPhone"
              label="Email or Phone"
              name="emailOrPhone"
              autoComplete="emailOrPhone"
              autoFocus
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              sx={{ backgroundColor: '#fff' }}
            />
            <Button
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#fff', color: '#364152b5', borderRadius: '50px', width: "200px", height: '50px', display: 'flex' }}
              onClick={handleSendOtp}
            >
              Send OTP
            </Button>
          </Box>
        </>
      )}

      {step === 2 && (
        <>
          <Typography component="h1" variant="h5" sx={{ color: 'white', fontWeight: '700', fontSize: '30px' }}>
            Verify OTP
          </Typography>
          <Box component="form" noValidate onSubmit={handleVerifyOtp} sx={{ mt: 1 }}>
            <TextField
              InputProps={{
                style: {
                  borderRadius: '50px',
                },
              }}
              margin="normal"
              required
              fullWidth
              id="otp"
              label="OTP"
              name="otp"
              autoComplete="otp"
              autoFocus
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              sx={{ backgroundColor: '#fff' }}
            />
            <Button
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#fff', color: '#364152b5', borderRadius: '50px', width: "200px", height: '50px', display: 'flex' }}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </Button>
          </Box>
        </>
      )}

      {step === 3 && (
        <>
          <Typography component="h1" variant="h5" sx={{ color: 'white', fontWeight: '700', fontSize: '30px' }}>
            Reset Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleResetPassword} sx={{ mt: 1 }}>
            <TextField
              InputProps={{
                style: {
                  borderRadius: '50px',
                },
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
                ),
              }}
              margin="normal"
              required
              fullWidth
              id="newPassword"
              label="New Password"
              name="newPassword"
              type={showPassword ? 'text' : 'password'}
              autoComplete="newPassword"
              autoFocus
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ backgroundColor: '#fff' }}
            />
            <Button
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#fff', color: '#364152b5', borderRadius: '50px', width: "200px", height: '50px', display: 'flex' }}
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ForgetPasswordComponent;
