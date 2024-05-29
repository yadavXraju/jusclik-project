// Page Owner: Suraj
// Description: Login Main Page

import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Grid, Paper, Typography, InputAdornment, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import LeftLogo from './LeftLogo';
import EnterMobileDialog from '../login/EnterMobileDialog';
import SelectAccount from './SelectAccount';
import PoweredBySection from './PoweredBy';
import MobileLogin from '../login/MobileLogin';
import AppStoreButtonsGroup from './AppStoreLogos';
import CustomTextField from 'components/ui/custom-input/TextField';
import SetupTabs from 'components/tabs/Stepper';


export const Auth = [
  {
    id: '1',
    token: 'dkjfhfdddfdffkfjdkfdfdfdjfd',
    role: 'parent'
  },

  {
    id: '2',
    token: 'dkjfhfdfkfjdkfdfdfdjfd',
    role: 'class-teacher'
  },

  {
    id: '3',
    token: 'dkjfhfdfkfjdkfdfdfdjfd',
    role: 'visitor'
  }
];

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#e64b4c'
    }
  }
});

export default function LoginPage({ LeftLogo }) {
  const theme = useTheme(); // Accessing theme object using useTheme hook
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectAccountOpen, setSelectAccountOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const handleChangeUsername = (event) => {
    const { value } = event.target;
    setUserId(value);
    setUsernameError(false); // Reset username error state
    setUserId(value.trim());
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setUserPassword(value);
    setPasswordError(false); // Reset password error state
    setUserPassword(value.trim());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // static id and pass for parent dashboard
    if (userId === 'jusklik' && userPassword === 'jusklik@123') {
      // Save user role and token in local storage
      const user = Auth.find((user) => user.role === 'parent');
      // localStorage.setItem('userRole', user.role);
      // localStorage.setItem('userToken', user.token);
      sessionStorage.setItem('userRole', user.role);

      // Redirect to parent dashboard after a slight delay
      setTimeout(() => {
        window.location.href = '/parent/dashboard';
      }, 500); // Delay in milliseconds
    }
    // static id and pass for class teacher dashboard
    else if (userId === 'cteacher' && userPassword === 'cteacher@123') {
      // Save user role and token in local storage
      const user = Auth.find((user) => user.role === 'class-teacher');
      // localStorage.setItem('userRole', user.role);
      // localStorage.setItem('userToken', user.token);
      sessionStorage.setItem('userRole', user.role);

      // Redirect to class teacher dashboard after a slight delay
      setTimeout(() => {
        window.location.href = '/class-teacher/dashboard';
      }, 500); // Delay in milliseconds
    }
    // static id and pass for visitor dashboard
    else if (userId === 'visitor' && userPassword === 'visitor@123') {
      // Save user role and token in local storage
      const user = Auth.find((user) => user.role === 'visitor');
      // localStorage.setItem('userRole', user.role);
      // localStorage.setItem('userToken', user.token);
      sessionStorage.setItem('userRole', user.role);
      // Redirect to visitor dashboard after a slight delay
      setTimeout(() => {
        window.location.href = '/erp/visitor/dashboard';
      }, 500); // Delay in milliseconds
    } else {
      // alert('Wrong Credentials');
      setUsernameError(true);
      setPasswordError(true);
    }

    // Check for empty username or password
    if (userId.trim() === '') {
      setUsernameError(true);
      return;
    }

    if (userPassword.trim() === '') {
      setPasswordError(true);
      return;
    }
  };
  const isXs=useMediaQuery(theme.breakpoints.down('xs'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isXl = useMediaQuery(theme.breakpoints.up('lg'));
  const isXXl=useMediaQuery(theme.breakpoints.up('xl'));
  const isSmMobile = useMediaQuery(theme.breakpoints.only('xs'));

  const tabPanelStyles = {
    pt: isSmMobile ? 1 : 3
  };
  let marTop
 
  
  if(isXs)
    marTop=null
if(isMobile)
  marTop='1.5rem'
if(isMd)
  marTop='1.5rem'
if(isLg)
  marTop='4.5rem'
if(isXl)
  marTop='9.5rem'
if(isXXl)
  marTop='14.5rem'

  const commonStyles = {
    fontFamily: 'plus Jakarta sans',
    borderRadius: '50px',
    backgroundColor: '#ffffff',
    color: '#6b6666',
    mb: isMobile ? 1 : 2,
    height: isMobile ? '50px' : '56px',
    fontSize: '15px'
  };

  const tabStyles = {
    paddingTop: '21px',
    textTransform: 'none',
  };

  const buttonStyles = {
    backgroundColor: '#fff',
    color: '#364152b5',
    border: '1px solid #c4c4c4',
    width: isMobile ? '130px' : '170px',
    display: 'flex',
    height: isMobile ? '50px' : '56px',
    alignItems: 'center',
    justifyContent: 'flexStart',
    ...commonStyles,
    '&:hover': {
      backgroundColor: '#e64b4c',
      color: '#fff'
    }
  };
  const playstoreButtonStyles = !isMobile && {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    display: 'block', // Show/hide based on md breakpoint and above
    zIndex: theme.zIndex.tooltip
  };

  const getWidthPercentage = () => {
    if (isMobile) {
      return '100%';
    } else if (isMd) {
      return '80%';
    } else if (isLg) {
      return '80%';
    } else if (isXl) {
      return '60%';
    } else {
      return '100%';
    }
  };

  const widthPercentage = getWidthPercentage();

  const UserLogin = () => {
    return (
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <CustomTextField
          InputProps={{
            style: { ...commonStyles }
          }}
          margin="normal"
          required
          fullWidth
          id="Username"
          placeholder="Username"
          name="Username"
          autoComplete="Username"
          autoFocus
          value={userId}
          error={usernameError}
          helperText={usernameError ? 'Enter the username' : ''}
          onChange={handleChangeUsername}
        />
        <CustomTextField
          InputProps={{
            style: { ...commonStyles, borderRadius: '50px' },
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
          required
          fullWidth
          name="password"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          id="password"
          autoComplete="current-password"
          value={userPassword}
          error={passwordError}
          helperText={passwordError ? 'Enter your password' : ''}
          onChange={handleChangePassword}
        />

        <Grid item xs sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'left', mt: isMobile ? 1 : 2 }}>
          <Button type="submit" sx={buttonStyles}>
            LOGIN
          </Button>
          <EnterMobileDialog open={dialogOpen} onClose={handleDialogToggle} onMobileSubmit={handleMobileSubmit} />
          <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} />
        </Grid>
      </Box>
    );
  };
  const tabPage = [
    {
      id: 0,
      name: 'Username',
      component: UserLogin
    },
    {
      id: 1,
      name: 'Mobile Number',
      component: MobileLogin
    }
  ];
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        height={isMobile ? '100%' : '100vh'}
        width="100%"
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        justifyContent="center"
        minHeight="100vh"
        backgroundColor={(t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900])}
      >
        <CssBaseline />
        {/* Left Side Logo ==================================================================  */}
        <Grid item xs={12} sm={6} md={6} paddingBottom="1rem">
          {/* <LeftLogo /> */}
          {LeftLogo}
        </Grid>
        {/* Right Side component */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          component={Paper}
          elevation={6}
          square
          backgroundColor="#ffecec"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundRepeat="no-repeat"
          borderRadius={isMobile ? '20px 20px 0px 0px' : '20px 0px 0px 20px'}
          padding={isMobile ? '0px 0px 0px 0px' : '0px 35px'}
          height="100%"
          pt={1}
        >
          <Box height="100%" width={widthPercentage} padding={isMobile ? '1.5rem' : '0px'} display="flex" flexDirection="column">
            {/* Label: Login To Your Dashboard =========================================================================== */}
            <Box height={isMobile ? null : '100%'}>
              {/* header and tabs */}
              <Box  display="flex" flexDirection="column" justifyContent="start" 
              // position={!isMobile&&'fixed'} top='30%'
              marginTop={marTop}
              >
                <Box display="flex" flexDirection="column" alignItems="flex-start" marginBottom='8px' >
                  <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                      color: '#3a3a3a',
                      fontWeight: 500,
                      fontSize: { xs: '20px', md: '30px' },
                      fontFamily: 'plus Jakarta sans',
                      paddingBottom: '5px'
                    }}
                  >
                    Login to
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h4"
                    sx={{ color: '#3a3a3a', fontWeight: 500, fontSize: { xs: '19px', md: '30px' }, fontFamily: 'plus Jakarta sans' }}
                  >
                    your dashboard!
                  </Typography>
                </Box>
                <Box 
                // borderBottom={1} borderColor="divider"
                >
                  <SetupTabs
                    tabPage={tabPage}
                    numberShow={false}
                    iconShow={false}
                    value={value}
                    handleChange={handleChange}
                    variant="fullWidth"
                    tabsProps={{ textColor: 'secondary', indicatorColor: 'secondary' }}
                    customTabsStyle={tabStyles}
                    customBoxStyle={tabPanelStyles}
                    customtabPanelStyle={{backgroundColor:'#ffecec',padding:'0'}}
                    customtabWrapper={{marginTop:'0'}}
                    tabNameStyle={{color:'#e64b4c'}}
                    customTabFont={{color:'#00000099'}}
                    
                  />
                </Box>
              </Box>
            </Box>
            {isMobile && (
              <Grid item flex="auto" alignContent="flex-end">
                <Box pt={1}>
                  <PoweredBySection />
                  <Box pt={1}></Box>
                  <AppStoreButtonsGroup />
                </Box>
              </Grid>
            )}

            {!isMobile && (
              <>
                <Box>
                  <PoweredBySection />
                </Box>
                <Box sx={playstoreButtonStyles}>
                  <AppStoreButtonsGroup />
                </Box>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
