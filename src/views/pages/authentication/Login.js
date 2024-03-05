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

function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
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

    const user = Auth.find((user) => user.username === userId && user.password === userPassword);
    if (user) {
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userToken', user.token);

      setTimeout(() => {
        window.location.href = `/${user.role.toLowerCase()}/dashboard`;
      }, 500);
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
            backgroundPosition: 'bottom',
            borderRadius: '20px 0px 0px 20px'
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 1 }}>
              <Typography component="h1" variant="h4" sx={{ color: '#3a3a3a', fontSize: '40px', fontFamily:'plus Jakarta sans' }}>
                Login to
              </Typography>
              <Typography component="h1" variant="h4" sx={{ color: '#3a3a3a', fontSize: '40px',fontFamily:'plus Jakarta sans' }}>
                your dashboard!
              </Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="Login tabs"
                sx={{ width: '100%' }}
              >
                <Tab label="Username" {...a11yProps(0)} sx={{ width: '260px' }} />
                <Tab label="Mobile Number" {...a11yProps(1)} sx={{ width: '260px' }} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  id="Username"
                  label="Username"
                  name="Username"
                  autoComplete="Username"
                  autoFocus
                  sx={{ borderRadius: '50px', backgroundColor: '#ffffff', color: '#6b6666', mb: 2, fontFamily:'plus Jakarta sans' }}
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
                    )
                  }}
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  sx={{ borderRadius: '50px', backgroundColor: '#ffffff', color: '#6b6666' }}
                  value={userPassword}
                  onChange={(event) => setUserPassword(event.target.value)}
                />

                <Grid
                  item
                  xs
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}
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
                      LOGIN
                    </Button>
                  </Box>
                  <EnterMobileDialog open={dialogOpen} onClose={handleDialogToggle} onMobileSubmit={handleMobileSubmit} />
                  <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} />
                </Grid>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  autoFocus
                  sx={{ borderRadius: '50px', backgroundColor: '#ffffff', color: '#6b6666', mb: 2 }}
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
                    )
                  }}
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  name="otp"
                  label="OTP"
                  type={showPassword ? 'text' : 'password'}
                  id="otp"
                  autoComplete="otp"
                  sx={{ borderRadius: '50px', backgroundColor: '#ffffff', color: '#6b6666' }}
                />
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
                    NEXT
                  </Button>
                </Box>
                <Grid
                  item
                  xs
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}
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
              </Box> */}
              <MobileLogin/>
            </CustomTabPanel>

            <PoweredBySection />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
