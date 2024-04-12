
import React from 'react'
import {Box, Typography,Paper, useMediaQuery} from '@mui/material'
import OnlineTest from './onlineAssesment/OnlineTest'






const OnlineAssessment = () => {
  const res2560 = useMediaQuery('(min-width:2000px)')
  const rem=res2560?('19rem'):null;
 

  return (
  <>
  <Box>
   
  <Paper elevation={1} sx={{padding:"10px 20px"}}>
  <Box sx={{paddingLeft:rem, paddingRight:rem}}>
   <Typography variant='h3' margin="10px ">ONLINE ASSESMENT</Typography> 
   <OnlineTest/>
   </Box>
   </Paper>
   </Box>
  
  </>
  )
}

export default OnlineAssessment