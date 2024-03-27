// import React from 'react';
// import { Grid,  TextField, Card, useMediaQuery, Typography } from '@mui/material';
// //import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

// function OtherDetails() {

//   const isMobile = useMediaQuery('(max-width: 767px)')

//   return (
//     <>
//     {/* Other Details */}
//     <Card sx={{padding:'10px'}}>
//       <Typography variant={'h4'} p={1.4} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
//       Other Details
//       </Typography>
//     <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
//       <Grid item xs={12} sm={12} lg={6}>
//        <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Family Id" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Nationality" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Religion" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="House" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="Blood Group" variant="outlined" />
//       </Grid>
//       <Grid item xs={12} sm={12} lg={6}>
//       <TextField size={isMobile  ? 'small' : 'normal' } id="outlined-basic" fullWidth label="SRN. No." variant="outlined" />
//       </Grid>
      
//     </Grid>
//     </Card>
    

//     </>
//   );
// }

// export default OtherDetails;










import React from 'react';
import { Grid, TextField, Card, useMediaQuery, Typography } from '@mui/material';

function OtherDetails() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Define an array of field details
  const fields = [
    { id: 'familyId', label: 'Family Id', variant: 'outlined' },
    { id: 'nationality', label: 'Nationality', variant: 'outlined' },
    { id: 'religion', label: 'Religion', variant: 'outlined' },
    { id: 'house', label: 'House', variant: 'outlined' },
    { id: 'bloodGroup', label: 'Blood Group', variant: 'outlined' },
    { id: 'srnNo', label: 'SRN. No.', variant: 'outlined' },
  ];

  return (
    <>
      {/* Other Details */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Other Details
        </Typography>
        <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
          {fields.map((field, index) => (
            <Grid item xs={12} sm={12} lg={6} key={index}>
              <TextField
                size={isMobile ? 'small' : 'normal'}
                id={field.id}
                fullWidth
                label={field.label}
                variant={field.variant}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
}

export default OtherDetails;
