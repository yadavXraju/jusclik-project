import React from 'react';
import Timing from './Timing';
import Grid from '@mui/material/Grid';
import AttandanceStatus from './AttandanceStatus';
import AttendanceLog from './AttandanceLog';
import MainCard from 'components/ui/cards/MainCard';

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
    </>
  );
};

export default BiometricDetailsOrAttendanceDetails;
