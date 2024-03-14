import {Box, Typography } from '@mui/material'
import React from 'react'

function VisitPurpose() {
  return (
   <div>
  <Box>
          <Box>
            <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'center', mb: '20px', fontWeight: '600' }}>
              Self Check-In
            </Typography>
            <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center' }}>Shaurya Software, Hermitage Plaza</Typography>
            <Typography variant='h3' pb={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '400' }}>
              Managed by jusklik
            </Typography>
          </Box>
   </Box>
   </div>
  )
}


export default VisitPurpose