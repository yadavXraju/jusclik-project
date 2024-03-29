import React from 'react';
import { Grid, TextField, Card, useMediaQuery, Typography } from '@mui/material';

const OtherDetails = ({ studentFields }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  console.log(studentFields)

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
      {
        studentFields.map((fields) =>
             <Card sx={{ padding: '10px' }} key={fields.id}>
              <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
                Other Details
              </Typography>
              <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }} key={fields?.id}>
                {
                fields.subSection.map((field, index) => (
                  <Grid item xs={12} sm={12} lg={6} key={index}>
                    <TextField
                      size={isMobile ? 'small' : 'normal'}
                      id={field.id}
                      fullWidth
                      label={field.name}
                      variant="outlined"
                    />
                  </Grid>   
                ))
                }
              </Grid>
              </Card >
          )
      }
    </>
  );
}

export default OtherDetails;
