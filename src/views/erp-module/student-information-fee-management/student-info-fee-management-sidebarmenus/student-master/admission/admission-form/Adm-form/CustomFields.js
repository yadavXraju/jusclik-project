import React from 'react';
import { Grid,  TextField, Card, useMediaQuery, Typography } from '@mui/material';
//import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

function CustomFields() {

  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <>
    {/* Other Details */}
    <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1.4} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Custom Fields
      </Typography>
    <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
    
      <Grid item xs={12} sm={12} lg={6}>
       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Name" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Admission No." variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Class" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
      <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Admission Date" variant="outlined" />
      </Grid>
    </Grid>
    </Card> 
    </>
  );
}

export default CustomFields;