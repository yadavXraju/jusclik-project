// ======= Page Owner Vikash =========
// ======= In Preview Communication Logs =========
import { Typography, Box, Grid } from '@mui/material';
import React from 'react';

function CommunicationLogs() {
  return (
    <>
      <Box>
        <Typography my={2} variant='h4'>Email Summary</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={3}>
            <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgba(60, 159, 60, 0.71)', textAlign:'center',marginTop:'auto', height:'100%' }}>
              <Typography variant='h3'>1</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Email Sent</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgba(94, 53, 177, 0.64)', textAlign:'center',marginTop:'auto', height:'100%' }}>
              <Typography variant='h3'>100%</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Open Rate</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgb(118, 185, 239)', textAlign:'center',marginTop:'auto', height:'100%' }}>
              <Typography variant='h3'>0%</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Click Rate</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgb(247, 144, 9)', textAlign:'center',marginTop:'auto', height:'100%' }}>
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
            <Box py={3}   sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgba(60, 159, 60, 0.71)', textAlign:'center',marginTop:'auto', height:'100%' }}>
              <Typography variant='h3'>5</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>SMS Sent</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgba(94, 53, 177, 0.64)', textAlign:'center',marginTop:'auto', height:'100%' }}>
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
            <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgba(60, 159, 60, 0.71)', textAlign:'center',marginTop:'auto', height:'100%' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Whatsapp Sent</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgba(94, 53, 177, 0.64)', textAlign:'center',marginTop:'auto', height:'100%' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Whatsapp Delivered</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgb(118, 185, 239)', textAlign:'center',marginTop:'auto', height:'100%' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Click Rate</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgb(247, 144, 9)', textAlign:'center',marginTop:'auto', height:'100%' }}>
              <Typography variant='h3'>0</Typography>
              <Box mt={1} sx={{fontWeight:'500'}}>Unsubscribe Rate</Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
          <Box py={3} px={4} sx={{ border: '1px solid #ccc', borderBottom:'2px solid rgba(60, 159, 60, 0.71)', textAlign:'center',marginTop:'auto', height:'100%' }}>
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
