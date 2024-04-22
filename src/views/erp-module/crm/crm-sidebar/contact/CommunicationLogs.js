import { Typography, Box, Grid } from '@mui/material';
import React from 'react';

function CommunicationLogs() {
  return (
    <>
      <Box>
        <Typography my={2} variant='h4'>Email Summary</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={3}>
            <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #00a65a', textAlign:'center' }}>
              <Typography variant='h3'>1</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Email Sent</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #9d1cb2', textAlign:'center' }}>
              <Typography variant='h3'>100%</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Open Rate</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #00a65a', textAlign:'center' }}>
              <Typography variant='h3'>0%</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Click Rate</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #dd4b39', textAlign:'center' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Email Bounced</Box>
            </Box>
          </Grid>

        </Grid>
      </Box>

      <Box>
        <Typography my={2} variant='h4'>SMS Summary</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={3}>
            <Box py={3}   sx={{ border: '1px solid #ccc', borderBottom:'2px solid #00a65a', textAlign:'center' }}>
              <Typography variant='h3'>5</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>SMS Sent</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #9d1cb2', textAlign:'center' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>SMS Delivered</Box>
            </Box>
          </Grid>

        </Grid>
      </Box>

      <Box>  
        <Typography my={2} variant='h4'>Whatsapp Summary</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={3}>
            <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #00a65a', textAlign:'center' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Whatsapp Sent</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #9d1cb2', textAlign:'center' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Whatsapp Delivered</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #f39c12', textAlign:'center' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Click Rate</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #dd4b39', textAlign:'center' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Unsubscribe Rate</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid #00a65a', textAlign:'center' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Auto Reply</Box>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </>
  );
}

export default CommunicationLogs;
