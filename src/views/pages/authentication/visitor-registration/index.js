import React from 'react'
import VisitorRegistrationTemplate from './visitor-registration'
import { Box } from '@mui/material'
import {css} from './css'
const VisitorRegistration = () => {
  return (
    <>
    <Box sx={{...css.center,backgroundColor:'#eef2f6'}}>
    <VisitorRegistrationTemplate/>
      </Box>     
    </>
  )
}

export default VisitorRegistration;