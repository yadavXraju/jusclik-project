// Page Owner : Abhishek
// Description : welcome message in dashboards

import { Typography , useMediaQuery } from '@mui/material'
import React from 'react'
import { welcomeMsg } from 'component/dashboard-css/CommonCss';

// teacher detail is  props 
const WelcomeMessageTemplate = ( { teacherDetails}) => {

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
     <Typography  style={welcomeMsg}  variant='h1' sx={{py:2, fontSize: isMobile ? '32px' : '40px'}}>   Hello {teacherDetails.name} !</Typography>
    </>
  )
}

export default WelcomeMessageTemplate