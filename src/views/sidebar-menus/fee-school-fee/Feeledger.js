import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Typography } from '@mui/material'

function Feeledger() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3} >
           <Typography p={8} sx={{background:'#d7e2ee', borderRadius:'10px'}} variant='h3'>Total Fee: 22000</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
           <Typography p={8} sx={{background:'#e2d5ee', borderRadius:'10px'}} variant='h3'>Paid Fee: 15000</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
           <Typography p={8}  sx={{background:'#f4c0c1', borderRadius:'10px'}} variant='h3'>Total Due: 7000</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
           <Typography p={8} sx={{background:'#fad899', borderRadius:'10px'}} variant='h3'>Late Fee: 1000</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Feeledger
