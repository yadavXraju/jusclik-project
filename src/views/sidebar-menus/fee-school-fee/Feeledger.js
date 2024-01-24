import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Typography } from '@mui/material'
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

function Feeledger() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3} >

          {/* <Box p={3} sx={{ background: 'rgb(124 13 175)', borderRadius: '10px' }}>
            <Typography color={'white'} variant='h3'>15000</Typography>
            <Typography color={'white'} variant='h5'>Paid Fee: </Typography>
          </Box> */}

          <Box p={3} sx={{ background: 'rgb(124 13 175)', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
            <div>
              <Typography color={'white'} variant='h2'>22000</Typography>
              <Typography color={'white'} variant='h5'>Total Fee </Typography>
            </div>
            <div style={{ marginLeft: 'auto', color:'white'}}>
              <Box><CurrencyRupeeOutlinedIcon sx={{fontSize:'32px'}}/></Box>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box p={3} sx={{ background: 'rgb(2, 136, 209)', borderRadius: '10px' }}>
            <Typography color={'white'} variant='h2'>15000</Typography>
            <Typography color={'white'} variant='h5'> Fee Paid </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box p={3} sx={{ background: 'rgb(124, 13, 175, .6)', borderRadius: '10px' }}>
            <Typography color={'white'} variant='h2'>7000</Typography>
            <Typography color={'white'} variant='h5'>Total Due </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box p={3} sx={{ background: 'rgb(2, 136, 209, .7)', borderRadius: '10px' }}>
            <Typography color={'white'} variant='h2'>1000</Typography>
            <Typography color={'white'} variant='h5'>Late Fee </Typography>
          </Box>
          {/* <Typography p={3} sx={{background:'#fad899', borderRadius:'10px'}} variant='h3'>Late Fee: 1000</Typography> */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Feeledger
