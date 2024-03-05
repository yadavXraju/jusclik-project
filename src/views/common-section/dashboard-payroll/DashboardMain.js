import { Typography, Grid, Paper } from '@mui/material'
import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import ProgressBar from './ProgressBar'

const DashboardMain = () => {
  return (
    <>
    <MainCard sx={{backgroundColor:'rgb(30, 136, 229)', width:'50%', display:'flex', justifyContent:'center'}}>
      <Typography variant='h3'sx={{color:'white'}}>Get started with Zoho Payroll</Typography>
      <Grid sx={{display:'flex', justifyContent:'end'}}>
      <ProgressBar sx={{}}/>
      </Grid>
      <Grid sx={{display:'flex', justifyContent:'end'}}>
      <Typography variant='h6' sx={{color:'white'}}>3/7 completed</Typography>
      </Grid>
      <Typography variant='h6' sx={{color:'white'}}>Complete the following steps to have a hassle-free payroll experience</Typography>
     
    </MainCard>
    <Paper elevation={3} sx={{padding:'55px'}}>
  <Typography>Organisation Details</Typography>
    </Paper>
    </>
  )
}
export default DashboardMain
