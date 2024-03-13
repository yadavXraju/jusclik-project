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
export const MobileNumber2 = () => {
 
{
  const theme = useTheme(); // Accessing theme object using useTheme hook

  



  const isMobile = useMediaQuery(theme.breakpoints.down('md'));



  
// const css={
//   center:{
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{maxWidth:'80%', margin: '0 auto',}}>
      <Grid container component="main" sx={{ minHeight: '100vh',
     }}>
        <CssBaseline />
        {/* school logo over*/}
        <Grid
          item
          xs={12}
          sm={10}
          md={14}
          component={Paper}
          elevation={6}
          square
          sx={{
            display:'flex',
            backgroundColor: '#ffecec',
            backgroundRepeat: 'no-repeat',
            borderRadius: isMobile ? '20px 0px 0px 20px' : '20px 20px 0px 0px',
            padding: isMobile ? '0px' : '0px 35px',
          }}
        >          
          <Box sx={{ height: '100vh', width: isMobile ? '330px' : '500px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
         <img
          src={LogoImg}
          alt="Logo"
          style={{ width: isMobile ? '200px' : '100px', height: isMobile ? '200px' : '100px', marginBottom: '15px' ,justifyContent:'flex-start'}}
        />
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
            <Box sx={{marginTop:'10rem'}}>
              <TextField
                InputProps={{
                  disableUnderline: true,
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

