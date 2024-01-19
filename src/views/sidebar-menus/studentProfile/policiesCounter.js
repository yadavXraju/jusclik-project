import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Typography } from '@mui/material'
import PolicyIcon from '@mui/icons-material/Policy';

function PoliciesCounter() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={4} >

          <Box p={3} sx={{ background: 'rgb(124 13 175)', borderRadius: '10px', alignItems: 'center' }}>
            <div style={{ marginLeft: 'auto', color:'white'}}>
              <Box><PolicyIcon sx={{fontSize:'32px'}}/></Box>
            </div>
            <div>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>Total</Typography>
              <Typography color={'white'} variant='h3'>5300.00 </Typography>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>from 12 invoices</Typography>
            </div>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default PoliciesCounter
