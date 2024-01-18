import { Typography } from '@mui/material'
import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails'
import React from 'react'

const WelcomeMessage = () => {
  return (
    <>
     <Typography variant='h1' sx={{py:2,color:'#121926ab', fontSize: '45px' , '@media (max-width:767px)': {
    fontSize: '32px',
  },}}>   Hello {studentProfileDetails.StudentName} !</Typography>
    </>
  )
}

export default WelcomeMessage