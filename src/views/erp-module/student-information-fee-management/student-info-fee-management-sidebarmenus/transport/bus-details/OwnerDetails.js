import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

function OwnerDetails() {
  return (
    <>
      <Box p={2} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
        <Box>
          <Typography pb={1} variant="h5">
            OWNER DETAILS 
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Bank" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Contact" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Acc No" fullWidth variant="outlined" />
            </Grid>
          </Grid>
        </Box>

        <Box pt={2}>
          <Typography pb={1} variant="h5">
            DRIVER DETAILS
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Aadhar" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Mobile" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="License" fullWidth variant="outlined" />
            </Grid>
          </Grid>
        </Box>

        <Box pt={2}>
          <Typography pb={1} variant="h5">
            CONDUCTOR DETAILS
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Mobile" fullWidth variant="outlined" />
            </Grid>
          </Grid>
        </Box>

        <Box pt={2}>
          <Typography pb={1} variant="h5">
            ATTENDANT DETAILS
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Mobile" fullWidth variant="outlined" />
            </Grid>
          </Grid>
        </Box>

        <Box pt={2}>
          <Typography pb={1} variant="h5">
            INCHARGE DETAILS
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Mobile" fullWidth variant="outlined" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default OwnerDetails;
