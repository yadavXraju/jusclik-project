import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Paper, Typography } from '@mui/material'
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import DirectionsTwoToneIcon from '@mui/icons-material/DirectionsTwoTone';
import AutoAwesomeMosaicTwoToneIcon from '@mui/icons-material/AutoAwesomeMosaicTwoTone';

function TransportLedger() {
  return (
    // =========== counter component =============
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={4} >

          <Paper elevation={2}>
          <Box p={3} sx={{ borderRadius: '10px' }}>
            <div style={{ marginLeft: 'auto', color:'rgb(17, 25, 39)', display:'inline-block',    margin: '15px'}}>
              <GroupTwoToneIcon sx={{background: "rgb(229, 231, 235)", borderRadius: '50%', padding: '8px',fontSize: '3rem'}}/>
            </div>
            <div style={{display:'inline-block'}}>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>Total Transport User</Typography>
              <Typography color={'rgb(17, 25, 39)'} variant='h3'>12000</Typography>
              {/* <Typography color={'rgb(108, 115, 127)'} variant='h4'>from 12 invoices</Typography> */}
            </div>
          </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} >

          <Paper elevation={2}>
          <Box p={3} sx={{ borderRadius: '10px' }}>
            <div style={{ marginLeft: 'auto', color:'rgb(16, 185, 129)', display:'inline-block',    margin: '15px'}}>
              <DirectionsTwoToneIcon sx={{background: "rgb(240, 253, 249)", borderRadius: '50%', padding: '8px',fontSize: '3rem'}}/>
            </div>
            <div style={{display:'inline-block'}}>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>Total Route</Typography>
              <Typography color={'rgb(17, 25, 39)'} variant='h3'> 130</Typography>
              {/* <Typography color={'rgb(108, 115, 127)'} variant='h4'>from 12 invoices</Typography> */}
            </div>
          </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} >

          <Paper elevation={2}>
          <Box p={3} sx={{ borderRadius: '10px' }}>
            <div style={{ marginLeft: 'auto', color:'rgb(247, 144, 9)', display:'inline-block',    margin: '15px'}}>
              <AutoAwesomeMosaicTwoToneIcon sx={{background: "rgb(255, 250, 235)", borderRadius: '50%', padding: '8px',fontSize: '3rem'}}/>
            </div>
            <div style={{display:'inline-block'}}>
              <Typography color={'rgb(108, 115, 127)'} variant='h4'>Total Slabs</Typography>
              <Typography color={'rgb(17, 25, 39)'} variant='h3'>100</Typography>
              {/* <Typography color={'rgb(108, 115, 127)'} variant='h4'>from 12 invoices</Typography> */}
            </div>
          </Box>
          </Paper>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default TransportLedger
