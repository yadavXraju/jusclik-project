import { Typography , useMediaQuery } from '@mui/material'
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails'
import React from 'react'
import { welcomeMsg } from '../dashboard-css/CommonCss'
const WelcomeMessage = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
     <Typography  style={welcomeMsg}  variant='h1' sx={{py:2, fontSize: isMobile ? '32px' : '40px'}}>   Hello {studentProfileDetails.StudentName} !</Typography>
    </>
  )
}

export default WelcomeMessage