import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Frame from '../../../assets/images/Frame.png';
import LoginImage from '../../../assets/images/Group-36.png';
import LogoImg from '../../../assets/images/WhatsApp_Image_2020-03-21_at_8_04_53_PM__1-removebg-preview 1.png'
import PlayStoreImage from '../../../assets/images/Google-Play.png';
import AppleStoreImage from '../../../assets/images/app-store.png';
// import ToggleGroupVariants from './Password'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import CloudLogo from '../../../assets/images/Untitled-2.png'
// password eye
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// Password otp start
function ToggleGroupVariants() {
  const [value, setValue] = React.useState();

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <ToggleButton
        style={{
          borderRadius: '50px',
          color: value === 'plain' ? '#000' : '#fff',
          backgroundColor: value === 'plain' ? '#fff' : 'initial',
          border: '2px solid #fff', // Set initial border color to white
        }}
        value="plain"
      >
        Password
      </ToggleButton>
      <ToggleButton
        style={{
          borderRadius: '50px',
          color: value === 'outlined' ? '#000' : '#fff',
          backgroundColor: value === 'outlined' ? '#fff' : 'initial',
          border: '2px solid #fff', // Set initial border color to white
        }}
        value="outlined"
      >
        OTP
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
// Password otp end
// passwordeye
function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <TextField
      label="Password"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleTogglePasswordVisibility}
              edge="end"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        {/* left school logo start */}
        <Grid item xs={false}
          sm={4}
          md={4} sx={{
            backgroundImage: `url(${Frame})`, backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
          <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <img src={LogoImg} alt="Logo" style={{ width: '200px', height: '200px' }} />
            <Typography sx={{ fontWeight: '700', fontSize: '30px', color: '#364152b5' }}>

              Arwachin Public School
            </Typography>
          </Grid>
        </Grid>
         {/* left school logo start */}
         {/* right side background img */}
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square sx={{ backgroundImage: `url(${LoginImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: 'white', fontWeight:'700',fontSize:'30px' }}>
              LOGIN
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  InputProps={{
                    style: {
                      borderRadius: "50px",
                    }
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Phone number"
                  name="email"
                  autoComplete="email"
                  autoFocus sx={{ backgroundColor: '#fff', borderRadius: '50px' }}
                />
                <PasswordField />
                {/* Rest of your code... */}
              </Box>
             
               {/* Remmember me */}
            
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" style={{ color: '#fff' }} />}
                label={<Typography sx={{ color: '#fff' }}>Remember me</Typography>}
              />
              <Grid item xs sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end', mt: -4 }}>
                <Link href="#" variant="body2" color={'#fff'}>
                  Forgot credential?
                </Link>
              </Grid>
              <Box sx={{display:'flex',alignItems:'end', justifyContent:'end', mt:4 }}>

                <ToggleGroupVariants />
              </Box>
              <Box  sx={{ display: 'flex' ,alignItems:'center',justifyContent:'center'}}>

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#fff', color: '#364152b5', borderRadius: '50px', width: "150px", display: 'flex'}}
              >
                LOGIN
              </Button>
              </Box>
              <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mt:3 }}>
            <img src={CloudLogo} alt="Logo" />
                <Typography sx={{color: '#fff', mt:1 }}>
                  Powered by
                </Typography>
                  <Link href="http://www.shauryasoft.com" target="_blank" rel="noopener noreferrer"  sx={{ color: '#fff',textDecoration: 'none' }}>
                    www.shauryasoft.com
                  </Link>
             </Grid>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-evenly', width: '45%' }}>
              <Button
                variant="contained"
                color="primary"
                href="PLAY_STORE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ width: "150px", display: 'flex', backgroundColor: '#fff', color: 'black',borderRadius:'10px' }}
                startIcon={<img src={PlayStoreImage} alt="Play Store" style={{ width: '20px', marginRight: '10px' }} />}
              >
                GET IT ON Google Play
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="APPLE_STORE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ width: "150px", display: 'flex', backgroundColor: '#fff', color: 'black',borderRadius:'10px' }}
                startIcon={<img src={AppleStoreImage} alt="Apple Store" style={{ width: '25px', marginRight: '10px' }} />}
              >
                GET IT ON Apple Store
              </Button>

            </Box>
            <Typography variant='subtitle1' color='#fff' sx={{mt:1}}>
              Online Fee Payment Policies / Terms & Conditions
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}