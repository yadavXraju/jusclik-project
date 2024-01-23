import * as React from 'react';
const { useState } = React;
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';  
import Frame from '../../../assets/images/Frame.png';
import LoginImage from '../../../assets/images/Group-36.png';
import LogoImg from '../../../assets/images/WhatsApp_Image_2020-03-21_at_8_04_53_PM__1-removebg-preview 1.png';
import PlayStoreImage from '../../../assets/images/Google-Play.png';
import AppleStoreImage from '../../../assets/images/app-store.png';
import CloudLogo from '../../../assets/images/Untitled-2.png';
import EnterMobileDialog from './EnterMobileDialog';
import SelectAccount from './SelectAccount';
const defaultTheme = createTheme();

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectAccountOpen, setSelectAccountOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('plain');

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
    console.log('Form submitted');
  };

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
        {/* left school logo start */}
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundImage: `url(${Frame})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <img src={LogoImg} alt="Logo" style={{ width: '200px', height: '200px' }} />
            <Typography sx={{ fontWeight: '700', fontSize: { xs: '24px', md: '30px' }, color: '#364152b5' }}>
              Arwachin Public School
            </Typography>
          </Grid>
        </Grid>
        {/* left school logo start */}
        {/* right side background img */}
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square sx={{
          backgroundImage: `url(${LoginImage} )`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
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
              <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mt: 3 }}>
                <img src={CloudLogo} alt="Logo" />
                <Typography sx={{ color: '#fff', mt: 1 }}>
                  Powered by
                </Typography>
                <Link href="http://www.shauryasoft.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', textDecoration: 'none' }}>
                  www.shauryasoft.com
                </Link>
              </Grid>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
              <Button
                variant="contained"
                color="primary"
                href="PLAY_STORE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ height: '50px', width: "150px", display: 'flex', backgroundColor: '#fff', color: '#000', borderRadius: '10px', lineHeight: '15px' }}
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
                sx={{ height: '50px', width: "150px", display: 'flex', backgroundColor: '#fff', color: '#000', borderRadius: '10px', lineHeight: '15px' }}
                startIcon={<img src={AppleStoreImage} alt="Apple Store" style={{ width: '25px', marginRight: '10px' }} />}
              >
                GET IT ON Apple Store
              </Button>
            </Box>
            <Typography variant='subtitle1' color='#fff' sx={{ mt: 1 }}>
              Online Fee Payment Policies/ Terms & Conditions
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
