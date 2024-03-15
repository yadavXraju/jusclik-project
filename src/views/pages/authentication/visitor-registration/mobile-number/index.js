import React, { useState } from 'react';
import { styles,css } from '../css'
import CssBaseline from '@mui/material/CssBaseline';
import { withStyles } from '@mui/styles';
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
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


function CountrySelect({ country, handleCountryChange }) {
  return (
    <Select value={country} onChange={handleCountryChange} variant="standard" >
      <MenuItem selected value="India">
        IN (+91)
      </MenuItem>
      <MenuItem value="Dubai">UAE (+971)</MenuItem>
      <MenuItem value="USA">USA (+1)</MenuItem>
    </Select>
  );
}
export const MobileNumber = () => {


  const [country, setCountry] = useState('India');
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  // Apply styles to CountrySelect component
  const StyledCountrySelect = withStyles(styles)(CountrySelect);
  {
    const theme = useTheme(); // Accessing theme object using useTheme hook
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
      <ThemeProvider theme={defaultTheme}>
        <Box>
        <Grid container component="main" >
   
            <CssBaseline />
            {/* left side school logo */}
            <Grid
              item  
              sx={{
                backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                ...css.imageContainer,
               ...css.center,
              }}
            >
              <Grid item sx={{ ...css.center, flexDirection: 'column' }}>
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
                <Typography sx={{ fontSize: { sm: '14px', md: '18px' }, color: '#364152b5' }}>Vasundhara, Ghaziabad</Typography>
              </Grid>
            </Grid>

            {/* school logo over*/}
            <Grid
              item 
              component={Paper}
              elevation={6}
              square
              sx={{
                ...css.horizontalCenter,
               ...css.parentPaper
              }}
            >
              
                

                  <Box sx={{...css.parentPaperBox}}>
                    <Typography
                      component="h6"
                      variant="h6"
                      sx={{...css.parentPaperHeading.welcome}}
                    >
                      Welcome To
                    </Typography>
                    <Typography
                      component="h1"
                      variant="h1"
                      sx={{...css.parentPaperHeading.school}}
                    >
                      Arwachin Public School
                    </Typography>
                    <Typography
                      component="h4"
                      variant="h4"
                      sx={{...css.parentPaperHeading.address}}
                    >
                      Vasundhara Ghaziabad
                    </Typography>
                    <Typography
                      component="h4"
                      variant="h4"
                      sx={{...css.parentPaperHeading.managedBy}}
                    >
                      Managed By Jusklik
                    </Typography>
                  </Box>
               
                <Box sx={{ ...css.center }}></Box>
                {/* mobile number input box */}
                <Paper sx={{...css.mobilePaper}} elevation={4}>
                  <Box>
                    <FormControl fullWidth>
                    <TextField
                      InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <StyledCountrySelect country={country} handleCountryChange={handleCountryChange} />
                          </InputAdornment>
                        ),
                        style: {...css.countrySelect,...css.hideSpinButtons},
                        endAdornment: null,
                      }}
                      margin="normal"
                      variant="outlined"
                      required
                      fullWidth
                      id="Mobilenumber"
                      placeholder="Mobile Number"
                      name="Mobilenumber"
                      autoComplete="Mobilenumber"
                      type='number'
                      // value={mobileNumber}
                      sx={{ borderRadius: '50px', color: '#6b6666', mb: isMobile ? 2 : 1 }}
                    />
                    </FormControl>
                  </Box>
                  {/* mobile number input feild over */}
                  <Button 
                    type="submit"
                    sx={{...css.center,...css.marginAuto,
                      ...css.submitButton  
                    }}
                  >
                    {'Next'}
                  </Button>
                </Paper>
              
            </Grid>
          </Grid>
        
        </Box>
      </ThemeProvider>
    );
  }
}

