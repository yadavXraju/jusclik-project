import * as React from 'react';
const { useState } = React;
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';  // Add this import
import PoweredBy from './PoweredBy'
import EnterMobileDialog from './EnterMobileDialog';
import SelectAccount from './SelectAccount';
import LeftLogo from './LeftLogo';
// import axios from 'axios';
// import config from "../../../config";
import BottomLoginImg from '../../../assets/images/bottomImg.png';
// import { useNavigate } from 'react-router';
import { Auth } from 'Auth';


const defaultTheme = createTheme();



export default function LoginPage() {
  // const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectAccountOpen, setSelectAccountOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('plain');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleDialogToggle = () => {
    setDialogOpen(!dialogOpen);
    setSelectAccountOpen(false); // Close SelectAccount dialog when opening EnterMobileDialog
  };

  const handleSelectAccountToggle = () => {
    setSelectAccountOpen(!selectAccountOpen);
    setDialogOpen(false); // Close EnterMobileDialog when opening SelectAccount
  };

  const handleMobileSubmit = ({ country, mobileNumber }) => {
    console.log(`Submitted Mobile Number: ${country} ${mobileNumber}`);
    handleSelectAccountToggle();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // static id and pass for parent dashboard
    if (userId === 'parent' && userPassword === 'parent@123') {
      // Save user role and token in local storage
      const user = Auth.find(user => user.role === 'parent');
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userToken', user.token);
  
      // Redirect to parent dashboard after a slight delay
      setTimeout(() => {
        window.location.href = '/parent/dashboard';
      }, 500); // Delay in milliseconds
    }
    // static id and pass for class teacher dashboard
    else if (userId === 'cteacher' && userPassword === 'cteacher@123') {
      // Save user role and token in local storage
      const user = Auth.find(user => user.role === 'class-teacher');
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userToken', user.token);
  
      // Redirect to class teacher dashboard after a slight delay
      setTimeout(() => {
        window.location.href = '/class-teacher/dashboard';
      }, 500); // Delay in milliseconds
    } 
    // static id and pass for visitor dashboard
    else if (userId === 'visitor' && userPassword === 'visitor@123') {
      // Save user role and token in local storage
      const user = Auth.find(user => user.role === 'visitor');
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userToken', user.token);
  
      // Redirect to visitor dashboard after a slight delay
      setTimeout(() => {
        window.location.href = '/erp/visitor/dashboard';
      }, 500); // Delay in milliseconds
    } 
    else {
      alert('Wrong Credentials');
    }
  };
  

  // const fetchData = async (Data) => {
  //     const response = await axios.get(
  //       'https://uat.shauryasoft.com/api/login',
  //       { 
  //         params: {
  //           SCode: 6,
  //           LoginID: Data.get('Username'),
  //           Password: Data.get('password'),
  //           DeviceType: 0,
  //           DeviceID: '',
  //           MobileApp: 0,
  //         },
  //         headers: {
  //           ApiKey: config.ApiKey,
  //         },
         
  //       }
  //     );
  //     var jResponse = JSON.parse(response.data);
  //     if (jResponse.authcode !== null && jResponse.authcode !== '' && jResponse.authcode !== undefined) {
  //     alert('login successfull');
  //       console.log(jResponse);
  //     } else {
  //      alert('login unsuccessfull');
  //     }
  
  // };
  


  const ToggleGroupVariants = () => {
    return (
      <FormControl>
        <Grid container>
          <Grid item>
            <ToggleButtonGroup
              value={selectedVariant}
              exclusive
              onChange={(event, newValue) => {
                setSelectedVariant(newValue);
                if (newValue === 'outlined') {
                  handleDialogToggle(); // Open the EnterMobileDialog
                }
              }}
              style={{
                borderRadius: '50px',
                border: '2px solid #fff',
              }}
            >
              <ToggleButton
                style={{
                  borderRadius: '50px 0px 0px 50px',
                  width: '110px',
                  color: selectedVariant === 'plain' ? '#000' : '#fff',
                  backgroundColor: selectedVariant === 'plain' ? '#fff' : 'initial',
                  border: 'none',
                }}
                value="plain"
              >
                Password
              </ToggleButton>
              <ToggleButton
                style={{
                  borderRadius: '0px 50px 50px 0px',
                  width: '110px',
                  color: selectedVariant === 'outlined' ? '#000' : '#fff',
                  backgroundColor: selectedVariant === 'outlined' ? '#fff' : 'initial',
                  border: 'none',
                }}
                value="outlined"
              >
                OTP
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </FormControl>
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ minHeight: '100vh' }}>
        <CssBaseline />
         {/* Use the LeftLogo component here */}
        <LeftLogo />
        {/* right side background img */}
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square sx={{
          backgroundColor:'#eed43f', display: 'flex',alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${BottomLoginImg} )`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: 'white', fontWeight: '700', fontSize: '30px' }}>
              LOGIN
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {/* phone no. */}
              <TextField
                InputProps={{
                  style: {
                    borderRadius: '50px',
                  },
                }}
                margin="normal"
                required
                fullWidth
                id="Username"
                label="Username"
                name="Username"
                autoComplete="Username"
                autoFocus
                sx={{ backgroundColor: '#fff', borderRadius: '50px' }}
                value={userId}
                onChange={(event) => setUserId(event.target.value)}
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
                  ),
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                sx={{ backgroundColor: '#fff', borderRadius: '50px' }}
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
              />

              {/* Remember me */}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" style={{ color: '#fff' }} />}
                label={<Typography sx={{ color: '#fff' }}>Remember me</Typography>}
              />
              <Grid item xs sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end', mt: -4 }} style={{ cursor: 'pointer' }}>

                <Typography variant="body2" sx={{ cursor: 'pointer', color: '#fff' }} onClick={handleDialogToggle}>
                  Forgot Credentials
                </Typography>
                <EnterMobileDialog open={dialogOpen} onClose={handleDialogToggle} onMobileSubmit={handleMobileSubmit} />
                <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} />
              </Grid>
              <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end', mt: 4 }}>
                <ToggleGroupVariants />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#fff', color: '#364152b5', borderRadius: '50px', width: "150px", margin: '15px', display: 'flex', height: '45px' }}
                  
                >
                  LOGIN
                </Button>
              </Box>
              {/* Powered by start */}
            <PoweredBy/>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}