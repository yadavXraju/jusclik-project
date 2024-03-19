import React from 'react'

import { css } from './css'
import CssBaseline from '@mui/material/CssBaseline';
import {
    Box,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LogoImg from '../../../../assets/images/WhatsApp_Image_2020-03-21_at_8_04_53_PM__1-removebg-preview 1.png';
import VisitorDetails from './visitor-details/index';
import SelfieVerification from './selfie-verification';
import { MobileNumber } from './mobile-number/index';
import OtpVerification from './otp-verification/index';
import VisitorAppointmentPass from './appointment-pass/index'
import { useState } from 'react';
const defaultTheme = createTheme({
    palette: {
        secondary: {
            main: '#e64b4c'
        }
    }
});
const VisitorRegistrationTemplate = () => {
    const theme = useTheme(); // Accessing theme object using useTheme hook
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [step, setStep] = useState(0)
    const handleSteps = (step) => {
        setStep(step + 1)
    }
    if (step == 4)
        return (<><VisitorAppointmentPass /></>)
    return (<>
        {/* this will be our template */}
        {/* this will be the static template for or registration process */}
        {/* parent container box */}
        <Box sx={{ justifyContent: 'center', alignItems: 'center', height: '100vh', display: 'flex', backgroundColor: '#eef2f6' }}>
            <ThemeProvider theme={defaultTheme}>
                <Box sx={{ minHeight: '100vh' }}>
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
                            // component={Paper}
                            elevation={6}
                            square
                            sx={{
                                ...css.horizontalCenter,
                                ...css.parentPaper,
                                justifyContent:'center'
                            }}

                        >
                            <Box sx={{ ...css.parentPaperBox, ...css.displayNoneOnMd }}>
                                <Typography
                                    component="h1"
                                    variant="h1"
                                    sx={{ ...css.parentPaperHeading.school }}
                                >
                                    Arwachin Public School
                                </Typography>
                                <Typography
                                    component="h4"
                                    variant="h4"
                                    sx={{ ...css.parentPaperHeading.address }}
                                >
                                    Vasundhara Ghaziabad,
                                </Typography>
                                <Typography
                                    component="h4"
                                    variant="h4"
                                    sx={{ ...css.parentPaperHeading.managedBy }}
                                >
                                    Managed By Jusklik
                                </Typography>
                            </Box>

                            <Box sx={{ ...css.center, flexDirection: 'column', ...css.mobileLogoImage }}>
                                {/* logo image for mobile devices */}
                                <img
                                    src={LogoImg}
                                    alt="Logo"
                                    style={{ width: '100px', height: '100px', marginBottom: '15px' }}
                                />
                                <Typography
                                    sx={{ fontWeight: '500', fontSize: { xs: '24px', md: '30px' }, color: '#E64B4C', textAlign: 'center', lineHeight: '30px' }}
                                >
                                    Arwachin Public <br /> School
                                </Typography>
                                <Typography sx={{ fontSize: { sm: '14px', md: '18px' }, color: '#364152b5' }}>Vasundhara, Ghaziabad</Typography>
                                <Typography
                                    component="h4"
                                    variant="h4"
                                    sx={{ ...css.parentPaperHeading.managedBy }}
                                >
                                    Managed By Jusklik
                                </Typography>
                            </Box>

                            {/* ============= Static Part Over =================== */}
                            {/* ================mobile number modal ===============  */}
                            {step == 0 && <MobileNumber step={step} handleSteps={handleSteps} />}
                            {/* ============= Otp Modal ========================  */}
                            {step == 1 && <OtpVerification step={step} handleSteps={handleSteps} />}
                            {/* ============= Selfie ============================ */}
                            {step == 2 && <SelfieVerification step={step} handleSteps={handleSteps} />}
                            {/* ============= Purpose/Details =========================== */}
                            {step == 3 && <VisitorDetails step={step} handleSteps={handleSteps} />}
                            {/* ============= Get Pass ========================== */}
                                
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </Box>

    </>
    )
}

export default VisitorRegistrationTemplate