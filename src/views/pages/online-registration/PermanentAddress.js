import React from 'react';
import { Grid, Typography, Box, Paper, TextField, Button } from '@mui/material';
import Divider from '@mui/material/Divider';


function PermanentAddress() {
  return (
    <>
      <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
        <Paper>
          <Box sx={{ padding: '2rem' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
              {' '}
              STEP 5 : PERMANENT ADDRESS{' '}
            </Typography>

            <Box sx={{ paddingBottom: '1.5rem' }}>
              <Button variant="contained" sx={{ height: '38px', width: '144px' }}>
                Back to Login
              </Button>
            </Box>
            <Divider />
          </Box>

          <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
            <Grid item xs={4}>
              <TextField fullWidth name="name" label="Area"   required inputProps={{ style: { backgroundColor: '#ffffff' } }} />

             
            </Grid>

            <Grid item xs={4}>
             

              <TextField
                label="City"
                required
                name="school_name"
               
                fullWidth
                
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
            </Grid>

            <Grid item xs={4}>
              
            <TextField
                label="State"
                name="school_name"
                required
                fullWidth
              
                inputProps={{ style: { backgroundColor: '#ffffff' } }}
              />
              
            </Grid>
          </Grid>

          <Box sx={{ paddingBottom: '2rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
            <Button onClick={() => handleSubmit('three')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
              Save and Next
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default PermanentAddress;
