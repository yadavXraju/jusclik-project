import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'


const StudentAddressForm = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <Card variant="outlined">
        <CardHeader
          title=" Address Information"
        />
        <CardContent>
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Country / Region"
            name="country"
            variant="outlined"
            // Add necessary onChange and value props as needed
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            variant="outlined"
            // Add necessary onChange and value props as needed
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="City"
            name="city"
            variant="outlined"
            // Add necessary onChange and value props as needed
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="State"
            name="state"
            variant="outlined"
            // Add necessary onChange and value props as needed
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Zip Code"
            name="zipCode"
            variant="outlined"
            // Add necessary onChange and value props as needed
          />
        </Grid>
      </Grid> 
        </CardContent>
      </Card>
     

    </Box>
  );
};

export default StudentAddressForm;
