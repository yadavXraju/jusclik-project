// ======= Page Owner Vikash =========
// ======= Add Bus Details Form =========
import { Box } from '@mui/system';
import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

function BusDetailForm() {
  return (
    <>
      <Box className="scrollbar" p={2} sx={{border:'1px solid #ccc', borderRadius:'5px', height: 'calc(100vh - 188px)'}}>
        <Box >
        <Typography pb={1} variant="h5">
             VEHICLE DETAILS 
            </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Reg No" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Chassis No" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <ParameterizedDateComponent label="Reg Date" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <ParameterizedDateComponent label="Reg Validity" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Engine No" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Model" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Seating Capacity" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <ParameterizedDateComponent label="Mfg Date" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <ParameterizedDateComponent label="EMI Start Date" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <ParameterizedDateComponent label="EMI End Date" customStyle={{width:'100%'}}/>
            </Grid>

          </Grid>
        </Box>
        <Box pt={2}>
          <Typography pb={1} variant="h5">
             VALID UPTO
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
             <ParameterizedDateComponent label="Pollution" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
            <ParameterizedDateComponent label="Fitness" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
             <ParameterizedDateComponent label="Insurance" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
            <ParameterizedDateComponent label="Transport" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
             <ParameterizedDateComponent label="Tax Rct" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
            <ParameterizedDateComponent label="Non Trans" customStyle={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
            <ParameterizedDateComponent label="Permit" customStyle={{width:'100%'}}/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default BusDetailForm;
