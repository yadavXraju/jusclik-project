import React from 'react';
import { Grid,  TextField, Card, useMediaQuery, Typography, Box } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
//import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

function AddressForm() {

  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <>
    {/* Other Details */}
    <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Address Details
      </Typography>
    <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
    <Grid item xs={12} sm={12} lg={12}>
    <Box pb={1}>
              <Box p={0.5}>Address</Box>
              <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
            </Box>
            {/* <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" /> */}
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Countory/Region" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="City" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="State" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Zip Code" variant="outlined" />
      </Grid>
      
    </Grid>
    </Card>
    

    </>
  );
}

export default AddressForm;