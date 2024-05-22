// OWNER : DAMANDEEP
import React, { useState } from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LogoImg from '../../../../assets/images/WhatsApp_Image_2020-03-21_at_8_04_53_PM__1-removebg-preview 1.png';
import {VisitorDetails} from './visitor-details';
import {SelfieVerification} from './selfie-verification';
import { MobileNumber } from './mobile-number';
import {OtpVerification} from './otp-verification';
import {AppointmentPass} from './apointment-pass';
import { css } from './css';

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#e64b4c'
    }
  }
});
const VisitorRegistration = () => {
  const theme = useTheme(); // Accessing theme object using useTheme hook
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const betweenMdLg=useMediaQuery(theme.breakpoints.between('md','lg'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  // =================================================== States =================================================================
  //==================================================== Step ===================================================================for all pages
  const [step, setStep] = useState(0);
  // mobile number ======================used in mobile number and otp page
  const [mobileNumber, setMobileNumber] = useState('');
  // selfie ======================= ussed in selfie verification
  const [capturedImage, setCapturedImage] = useState(null);
  // personal details ============================
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    purpose: '',
    concernedPerson: ''
  });

  const handleSteps = (step) => {
    setStep(step + 1);
  };
  if (step == 4)
    return (
      <>
        <AppointmentPass capturedImage={capturedImage} personalDetails={personalDetails} mobileNumber={mobileNumber} />
      </>
    );
  return (
    <>
    <Box sx={{backgroundColor:'#eef2f6' }} >
    <Box sx={{ ...css.center, height: '100%', backgroundColor: '#eef2f6' }}>
        <ThemeProvider theme={defaultTheme}>
          <Box sx={{ minHeight: '100%', minWidth: '60%' }}>
            <Grid container component="main">
              <CssBaseline />

              {/* left side school logo */}
              <Grid
                item
                md={12}
                display={betweenMdLg?'none':null}
                lg={6} xl={6}
                sx={{
                  backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                  ...css.imageContainer,
                  ...css.center
                }}
              >
                <Grid item sx={{ ...css.center, flexDirection: 'column' }}>
                  <img
                    src={LogoImg}
                    alt="Logo"
                    style={{ width: isMobile ? '200px' : '200px', height: isMobile ? '200px' : '200px', marginBottom: '15px' }}
                  />
                  <Typography
                    sx={{
                      fontWeight: '500',
                      fontSize: { xs: '24px', md: '30px' },
                      color: '#E64B4C',
                      textAlign: 'center',
                      lineHeight: '30px'
                    }}
                  >
                    Arwachin Public <br /> School
                  </Typography>
                  <Typography sx={{ fontSize: { sm: '14px', md: '20px' }, color: '#364152b5', textAlign: 'center' }}>
                    Vasundhara, Ghaziabad
                  </Typography>
                </Grid>
              </Grid>
              {/* school logo over*/}
              <Grid item elevation={6} sm={12} md={12} lg={6} xl={6} sx={{'& .css-0':isMobile?{}:{display:'flex',justifyContent:'center',flexDirection:'column' }}} >
                <Box sx={{ ...css.parentPaper, ...css.horizontalCenter }} >
                  <Box sx={{ ...css.parentPaperBox, ...css.displayNoneOnMd }}>
                    <Typography component="h1" variant="h1" sx={{ ...css.parentPaperHeading.school }}>
                      Arwachin Public School
                    </Typography>
                    <Typography component="h4" variant="h4" sx={{ ...css.parentPaperHeading.address }}>
                      Vasundhara, Ghaziabad
                    </Typography>
                    <Typography component="h4" variant="h4" pt={2} sx={{ ...css.parentPaperHeading.managedBy }}>
                      Managed By Jusklik
                    </Typography>
                  </Box>
                  {/* leftside component over ================================================================ */}
                    {/* for mobile devices =================================================== */}
                  <Box sc={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ ...css.center, flexDirection: 'column', ...css.mobileLogoImage, marginBottom: '1rem' }} >
                      {/* logo image for mobile devices */}
                      <img src={LogoImg} alt="Logo" style={{ width: '100px', height: '100px', marginBottom: '15px' }} />
                      <Typography
                        sx={{
                          fontWeight: '500',
                          fontSize: { xs: '24px', md: '30px' },
                          color: '#E64B4C',
                          textAlign: 'center',
                          lineHeight: '30px'
                        }}
                      >
                        Arwachin Public <br /> School
                      </Typography>
                      <Typography sx={{ fontSize: { sm: '14px', md: '18px' }, color: '#364152b5' }}>Vasundhara, Ghaziabad</Typography>
                      <Typography component="h4" variant="h4" pt={2} sx={{ ...css.parentPaperHeading.managedBy }}>
                        Managed By Jusklik
                      </Typography>
                    </Box>
                    <Box display='flex' width='100%' justifyContent='center'>
                    <Box 
                    // width={isMobile ? null : '60%'}
                    >
                      {/* ============= Static Part Over =================== */}
                      {/* ================mobile number modal ===============  */}
                      {step == 0 && <MobileNumber step={step} handleSteps={handleSteps} setMobileNumber={setMobileNumber} />}
                      {/* ============= Otp Modal ========================  */}
                      {step == 1 && <OtpVerification step={step} handleSteps={handleSteps} mobileNumber={mobileNumber} />}
                      {/* ============= Selfie ============================ */}
                      {step == 2 && (
                        <SelfieVerification
                          step={step}
                          handleSteps={handleSteps}
                          md={md}
                          capturedImage={capturedImage}
                          setCapturedImage={setCapturedImage}
                        />
                      )}
                      {/* ============= Purpose/Details =========================== */}
                      {step == 3 && <VisitorDetails step={step} handleSteps={handleSteps} setPersonalDetails={setPersonalDetails} />}
                      {/* ============= Get Pass ========================== */}
                    </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </Box>
      </Box>     
    </>
  )
}

export default VisitorRegistration;