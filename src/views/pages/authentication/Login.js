import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Grid, Paper, TextField, Typography, Tabs, Tab, InputAdornment, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LeftLogo from './LeftLogo';
import EnterMobileDialog from './EnterMobileDialog';
import SelectAccount from './SelectAccount';
import PoweredBySection from './PoweredBy';
import MobileLogin from './MobileLogin';
import { Auth } from 'Auth';

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#e64b4c'
    }
  } 
});

const textFieldStyles = {
  borderRadius: '50px',
  backgroundColor: '#ffffff',
  color: '#6b6666',
  mb: 2,
  fontFamily: 'plus Jakarta sans'
};

const buttonStyles = {
  backgroundColor: '#fff',
  color: '#364152b5',
  borderRadius: '50px',
  border: '1px solid #c4c4c4',
  width: '170px',
  display: 'flex',
  height: '56px',
  fontFamily: 'plus Jakarta sans',
  fontSize: '15px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#e64b4c',
    color: '#fff'
  }
};

const tabStyles = {
  width: '260px',
  textTransform: 'none',
  fontSize: '15px',
  fontFamily: 'plus Jakarta sans'
};

function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

export default function LoginPage() {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // static id and pass for parent dashboard
    if (userId === 'jusklik' && userPassword === 'jusklik@123') {
      // Save user role and token in local storage
      const user = Auth.find((user) => user.role === 'parent');
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
      const user = Auth.find((user) => user.role === 'class-teacher');
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
      const user = Auth.find((user) => user.role === 'visitor');
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userToken', user.token);

      // Redirect to visitor dashboard after a slight delay
      setTimeout(() => {
        window.location.href = '/erp/visitor/dashboard';
      }, 500); // Delay in milliseconds
    } else {
      alert('Wrong Credentials');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'space-between' }}>
        <CssBaseline />
        <LeftLogo />
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          component={Paper}
          elevation={6}
          square
          sx={{
            backgroundColor: '#ffecec',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '20px 0px 0px 20px'
          }}
        >
          <Box sx={{ height: '450px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 1 }}>
              <Typography
                component="h1"
                variant="h4"
                sx={{ color: '#3a3a3a', fontSize: { xs: '20px', md: '30px' }, fontFamily: 'plus Jakarta sans' }}
              >
                Login to
              </Typography>
              <Typography
                component="h1"
                variant="h4"
                sx={{ color: '#3a3a3a', fontSize: { xs: '20px', md: '30px' }, fontFamily: 'plus Jakarta sans' }}
              >
                your dashboard!
              </Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
             

                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Username" {...a11yProps(0)} sx={tabStyles} />
                <Tab label="Mobile Number" {...a11yProps(1)} sx={tabStyles} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Box component="form" noValidate onSubmit={handleSubmit} >
                <TextField
                  InputProps={{
                    style: textFieldStyles,
                    startAdornment: <InputAdornment position="start" style={{ width: '10px' }} />
                  }}
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  id="Username"
                  placeholder="Username"
                  name="Username"
                  autoComplete="Username"
                  autoFocus
                  sx={textFieldStyles}
                  value={userId}
                  onChange={(event) => setUserId(event.target.value)}
                />

                <TextField
                  InputProps={{
                    style: { ...textFieldStyles, borderRadius: '50px' },
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
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  sx={textFieldStyles}
                  value={userPassword}
                  onChange={(event) => setUserPassword(event.target.value)}
                />

                <Grid item xs sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flexStart' }}>
                    <Button type="submit" sx={buttonStyles}>
                      LOGIN
                    </Button>
                  </Box>
                  <EnterMobileDialog open={dialogOpen} onClose={handleDialogToggle} onMobileSubmit={handleMobileSubmit} />
                  <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} />
                </Grid>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <MobileLogin />
            </CustomTabPanel>

            <PoweredBySection />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
