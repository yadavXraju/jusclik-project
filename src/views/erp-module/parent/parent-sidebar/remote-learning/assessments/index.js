
import React from 'react'
import {Box, Typography,Paper} from '@mui/material'
import OnlineTest from './onlineAssesment/OnlineTest'

const OnlineAssessment = () => {
  return (
  <>
  <Box>

  <Paper elevation={1} sx={{padding:"10px 20px"}}>
   <Typography variant='h3' margin="10px ">ONLINE ASSESMENT</Typography> 
   <OnlineTest/>
   </Paper>
  </Box>
  </>
  )
}

export default OnlineAssessment