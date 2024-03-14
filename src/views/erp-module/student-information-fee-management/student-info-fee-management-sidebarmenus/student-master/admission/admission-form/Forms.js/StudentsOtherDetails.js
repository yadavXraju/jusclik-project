import React from 'react';
import { TextField, Grid,  Box,  Card, CardContent,CardHeader } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const StudentsOtherDetails = () => {
  const classes = useStyles();

  return (
    <Box className={classes.formContainer}>
        <Card variant="outlined">
        <CardHeader title=" Other Details"/>
          <CardContent>
          <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Blood Group" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="House" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Nationality" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Religion" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Aadhaar No." variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="PEN No." variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="SRN No." variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth label="Family ID" variant="outlined" />
        </Grid>
      </Grid>
          </CardContent>
        </Card>
     
    

    </Box>
  );
}

export default StudentsOtherDetails;
