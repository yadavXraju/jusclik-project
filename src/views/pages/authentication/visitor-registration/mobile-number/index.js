// import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Grid,
  Paper,
  Typography,
  // Tabs,
  // Tab,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
  // InputAdornment
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import MobileLogin from '../../MobileLogin';
import LogoImg from '../../../../../assets/images/WhatsApp_Image_2020-03-21_at_8_04_53_PM__1-removebg-preview 1.png';
const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#e64b4c'
    }
  }
});
export const MobileNumber = () => {
 
{
  const theme = useTheme(); // Accessing theme object using useTheme hook

  



  const isMobile = useMediaQuery(theme.breakpoints.down('md'));



  
const css={
  center:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{maxWidth:'80%', margin: '0 auto',}}>
      <Grid container component="main" sx={{ minHeight: '100vh',...css.center,
     }}>
        <CssBaseline />
        {/* left side school logo */}
        <Grid
      item
      xs={12}
      sm={4}
      md={5}
      sx={{
        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100vh'
      }}
    >
      <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <img
          src={LogoImg}
          alt="Logo"
          style={{ width: isMobile ? '200px' : '100px', height: isMobile ? '200px' : '100px', marginBottom: '15px' }}
        />
        <Typography
          sx={{ fontWeight: '500', fontSize: { xs: '24px', md: '30px' }, color: '#E64B4C', textAlign: 'center', lineHeight: '30px' }}
        >
          Arwachin Public <br /> School
        </Typography>
        <Typography sx={{ fontSize: { sm:'14px', md: '18px' }, color: '#364152b5' }}>Vasundhara, Ghaziabad</Typography>
      </Grid>
    </Grid>
  
        {/* school logo over*/}
        <Grid
          item
          xs={6}
          sm={8}
          md={7}
          component={Paper}
          elevation={6}
          square
          sx={{...css.center,
            backgroundColor: '#ffecec',
            backgroundRepeat: 'no-repeat',
            borderRadius: isMobile ? '20px 0px 0px 20px' : '20px 20px 0px 0px',
            padding: isMobile ? '0px' : '0px 35px',
          }}
        >          
          <Box sx={{ height: '100vh', width: isMobile ? '330px' : '500px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 1 }}>
              
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
             
              <Typography
                component="h2"
                variant="h4"
                sx={{ color: '#3a3a3a', fontSize: { xs: '1rem', md: '1rem' }, fontFamily: 'plus Jakarta sans', textAlign: 'center',marginBottom: '10px'}}
              >
                Welcome To
              </Typography>
              <Typography
                component="h1"
                variant="h3"
                sx={{ color: '#3a3a3a', fontSize: { xs: '20px', md: '30px' }, fontFamily: 'plus Jakarta sans' ,textAlign: 'center',marginBottom: '20px'}}
              >
                Arwachin Public School
              </Typography>
              <Typography
                component="h2"
                variant="h4"
                sx={{ color: '#3a3a3a', fontSize: { xs: '1rem', md: '1rem' }, fontFamily: 'plus Jakarta sans', textAlign: 'center',marginBottom: '10px'}}
              >
                Managed By Jusklik
              </Typography>
              </Box>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
             
            </Box>
            {/* mobile number input box */}
            <Box>
              <TextField
                InputProps={{
                  disableUnderline: true,
                  // startAdornment: (
                  //   <InputAdornment position="start">
                  //     {/* <CountrySelect country={country} handleCountryChange={handleCountryChange} /> */}
                  //   </InputAdornment>
                  // ),
                  style: { borderRadius: '50px', fontSize: '15px', fontFamily: 'plus Jakarta sans', backgroundColor: '#ffffff',width:'25rem' }
                }}
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="Mobilenumber"
                placeholder="Mobile Number"
                name="Mobilenumber"
                autoComplete="Mobilenumber"
                // value={mobileNumber}
                sx={{ borderRadius: '50px', color: '#6b6666', mb: isMobile ? 2 : 1 }}
              />
            </Box>
            {/* mobile number input feild over */}
               <Button
                type="submit"
                sx={{
                  backgroundColor: '#fff',
                  color: '#364152b5',
                  borderRadius: '50px',
                  border: '1px solid #c4c4c4',
                  width: isMobile ? '170px' : '130px',
                  height: '56px',
                  fontSize: '15px',
                  fontFamily: 'plus Jakarta sans',
                  '&:hover': {
                    backgroundColor: '#e64b4c',
                    color: '#fff'
                  }
                }}
              >
                { 'Next'}
              </Button>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </ThemeProvider>
  );
}
}

  