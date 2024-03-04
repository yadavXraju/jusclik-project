import * as React from 'react';
const { useState } = React;
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import ToggleButton from '@mui/material/ToggleButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import FormControl from '@mui/material/FormControl';
import EnterMobileDialog from './EnterMobileDialog';
import SelectAccount from './SelectAccount';
import LeftLogo from './LeftLogo';
import { Auth } from 'Auth';
import PoweredBySection from './PoweredBy';

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#e64b4c',
    },
  },
});



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
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
  // const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectAccountOpen, setSelectAccountOpen] = useState(false);
  // const [selectedVariant, setSelectedVariant] = useState('plain');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [value, setValue] = React.useState(0);

  const bgColor = "#ffecec";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Grid container component="main" sx={{ minHeight: '100vh', display:'flex', justifyContent:'space-between' }}>
        <CssBaseline />
        {/* Use the LeftLogo component here */}
        <LeftLogo />
        {/* right side background img */}
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          component={Paper}
          elevation={6}
          square
          sx={{
            backgroundColor: bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            borderRadius: '20px 0px 0px 20px',
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
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', mb:1}}>
              <Typography component="h1" variant="h4" sx={{ color: '#6b6666', fontSize: '40px' }}>
                Login to 
              </Typography>
              <Typography component="h1" variant="h4" sx={{ color: '#6b6666', fontSize: '40px' }}>
                your dashboard!
              </Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="basic tabs example"
                sx={{ width: '100%' }}
              >
                <Tab label="Username" {...a11yProps(0)} sx={{ width: '230px' }} />
                <Tab label="Phone Number" {...a11yProps(1)} sx={{ width: '230px' }} onClick={handleDialogToggle}/>
              </Tabs>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              {/* phone no. */}
              <TextField
                InputProps={{
                  style: {
                    borderRadius: '50px'
                  }
                }}
                margin="normal"
                variant='outlined'
                required
                fullWidth
                id="Username"
                label="Username"
                name="Username"
                autoComplete="Username"
                autoFocus
                sx={{ borderRadius: '50px', backgroundColor:'#ffffff', color:'#6b6666',mb:2}}
                value={userId}
                onChange={(event) => setUserId(event.target.value)}
              />
              <TextField
                InputProps={{
                  style: { borderRadius: '50px'},
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
                variant='outlined'
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                sx={{ borderRadius: '50px', backgroundColor:'#ffffff', color:'#6b6666' }}
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
              />

              {/* Remember me */}
              <Grid item xs sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }} style={{ cursor: 'pointer' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flexStart' }}>
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: '#fff',
                      color: '#364152b5',
                      borderRadius: '50px',
                      border:'1px solid #c4c4c4',
                      width: '150px',
                      display: 'flex',
                      height: '56px',
                      '&:hover': {
                        backgroundColor: '#e64b4c', // Change color on hover
                        color: '#fff', // Change text color on hover
                      }
                    }}
                  >
                    LOGIN
                  </Button>
                </Box>
                <Typography variant="body2" sx={{ cursor: 'pointer', color: '#a8a6a6' }} onClick={handleDialogToggle}>
                  Forgot Password?
                </Typography>
                <EnterMobileDialog open={dialogOpen} onClose={handleDialogToggle} onMobileSubmit={handleMobileSubmit} />
                <SelectAccount open={selectAccountOpen} onClose={handleSelectAccountToggle} />
              </Grid>
            </Box>
            <PoweredBySection/>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
