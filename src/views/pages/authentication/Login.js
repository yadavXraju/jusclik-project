import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Tabs,
  Tab,
  InputAdornment,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
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
  const theme = useTheme(); // Accessing theme object using useTheme hook
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  const tabPanelStyles = {
    pt: isMobile ? 1 : 3
  };

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
      {value === index && (
        <Box sx={tabPanelStyles}>
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
  const theme = useTheme(); // Accessing theme object using useTheme hook

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

  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

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
    width: isMobile ? '260px' : '200px',
    paddingTop: '21px',
    textTransform:'none'
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: '100vh', display: 'flex' }}>
        <CssBaseline />
        <LeftLogo />
        <Grid
          item
          xs={12}
          sm={7}
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
            borderRadius: isMobile ? '20px 20px 0px 0px' : '20px 0px 0px 20px',
            padding: isMobile ? '0px' : '0px 35px'
          }}
        >
          <Box sx={{ height: isMobile ? '500px' : '450px', width: isMobile ? '100%' : '500px', padding:isMobile?'25px':'0px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: isMobile ? 0 : 1 }}>
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
              <Box component="form" noValidate onSubmit={handleSubmit}>
                <TextField
                  InputProps={{
                    style: { ...commonStyles}
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
                  value={userId}
                  onChange={(event) => setUserId(event.target.value)}
                />

                <TextField
                  InputProps={{
                    style: { ...commonStyles, borderRadius: '50px' },
                    // startAdornment: <InputAdornment position="start" style={{ paddingLeft: '10px' }} />,
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
                  value={userPassword}
                  onChange={(event) => setUserPassword(event.target.value)}
                />

                <Grid
                  item
                  xs
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'left', mt: isMobile ? 1 : 2 }}
                >
                  <Button type="submit" sx={buttonStyles}>
                    LOGIN
                  </Button>
                  <EnterMobileDialog open={dialogOpen} onClose={handleDialogToggle} onMobileSubmit={handleMobileSubmit} />
                  <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} />
                </Grid>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <MobileLogin />
            </CustomTabPanel>
            <Box>

            <PoweredBySection />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
