import React from 'react';
import Timing from './Timing';
import Grid from '@mui/material/Grid';
import AttandanceStatus from './AttandanceStatus';
import AttendanceLog from './AttandanceLog';
import MainCard from 'ui-component/cards/MainCard';
import ExpensesTravel from './ExpensesTravel';
import { Box } from '@mui/material';

const BiometricDetailsOrAttendanceDetails = () => {
  return (
    <>
      <Grid container spacing={2} pb={2}>
        <Grid item xs={12} md={6}>
          <AttandanceStatus/>
        </Grid>
        <Grid item xs={12} md={6}>
        <Timing />
        </Grid>
      </Grid>
      <MainCard>
      <AttendanceLog/>
      </MainCard>
      <Box p={2}>
      <ExpensesTravel/>
      </Box>
    </>
  );
};

export default BiometricDetailsOrAttendanceDetails;
