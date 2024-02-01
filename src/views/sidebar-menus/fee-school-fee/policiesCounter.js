import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Paper, Typography } from '@mui/material'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';

function PoliciesCounter() {
  return (
    // =========== counter component =============
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3} >

        {/* sx={{boxShadow: 'rgba(0, 0, 0, 0.09) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0'}} */}
          <Paper elevation={2}>
          <Box p={3} sx={{ borderRadius: '10px' }}>
            <div style={{ marginLeft: 'auto', color:'rgb(17, 25, 39)', display:'inline-block',    margin: '15px'}}>
              <ShieldOutlinedIcon sx={{background: "rgb(229, 231, 235)", borderRadius: '50%', padding: '8px',fontSize: '3rem'}}/>
            </div>
            <div style={{display:'inline-block'}}>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>Total</Typography>
              <Typography color={'rgb(17, 25, 39)'} variant='h3'>5300.00 </Typography>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>from 12 invoices</Typography>
            </div>
          </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} >

          <Paper elevation={2}>
          <Box p={3} sx={{ borderRadius: '10px' }}>
            <div style={{ marginLeft: 'auto', color:'rgb(16, 185, 129)', display:'inline-block',    margin: '15px'}}>
              <GppGoodOutlinedIcon sx={{background: "rgb(240, 253, 249)", borderRadius: '50%', padding: '8px',fontSize: '3rem'}}/>
            </div>
            <div style={{display:'inline-block'}}>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>Paid</Typography>
              <Typography color={'rgb(17, 25, 39)'} variant='h3'>5300.00 </Typography>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>from 12 invoices</Typography>
            </div>
          </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} >

          <Paper elevation={2}>
          <Box p={3} sx={{ borderRadius: '10px' }}>
            <div style={{ marginLeft: 'auto', color:'rgb(247, 144, 9)', display:'inline-block',    margin: '15px'}}>
              <AccessTimeOutlinedIcon sx={{background: "rgb(255, 250, 235)", borderRadius: '50%', padding: '8px',fontSize: '3rem'}}/>
            </div>
            <div style={{display:'inline-block'}}>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>Pending</Typography>
              <Typography color={'rgb(17, 25, 39)'} variant='h3'>5300.00 </Typography>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>from 12 invoices</Typography>
            </div>
          </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} >

          <Paper elevation={2} >
          <Box p={3} sx={{ borderRadius: '10px' }}>
            <div style={{ marginLeft: 'auto', color:'#2a65bf', display:'inline-block',    margin: '15px'}}>
              <VerifiedIcon sx={{background: "rgb(229, 231, 235)", borderRadius: '50%', padding: '8px',fontSize: '3rem'}}/>
            </div>
            <div style={{display:'inline-block'}}>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>Total</Typography>
              <Typography color={'rgb(17, 25, 39)'} variant='h3'>5300.00 </Typography>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>from 12 invoices</Typography>
            </div>
          </Box>
          </Paper>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default PoliciesCounter
