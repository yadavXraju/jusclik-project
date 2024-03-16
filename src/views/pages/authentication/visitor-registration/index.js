import React from 'react'

import OtpVerification from './otp-verification'
// import OtpVerification from './otp-verification'
// import { MobileNumber } from './mobile-number/index'
import VisitorRegistrationTemplate from './visitor-registration'
import { Box } from '@mui/material'

const VisitorRegistration = () => {
  return (
    < >
    {/* this will be the static template for or registration process */}
    {/* parent container box */}
    <Box sx={{justifyContent:'center',alignItems:'center',height:'100vh',display:'flex',backgroundColor:'#eef2f6'}}>
    {/* left side logo display */}


    {/* right side component */}

    {/* logo when screen size is mobile */}



    {/* modals render here */}
    <VisitorRegistrationTemplate/>
    {/* <OtpVerification /> */}
      </Box>     


    </>
  )
}

export default VisitorRegistration