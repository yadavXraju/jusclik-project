import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { gridSpacing } from 'store/constant';
import SubjectTeacherWelcomeMessage from './welcome-message/welcome';
import SubjectTeacherCheckIn from './check-in/CheckIn';
import SubjectTeacherTotalAttendance from './total-attendance/TotalAttendance';


// import { useMediaQuery } from '@mui/material';

// this comp hold theree sub comp of dashboared which is 

// 1- welcome
// 2- Check in Counter
// 3- Attendance Counter


const WelcomeAttandanceCheckIn = ({ isLoading }) => {
  
  return (
    <Grid container spacing={gridSpacing} sx={{pb:'11px'}}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <SubjectTeacherWelcomeMessage isLoading={isLoading} />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <SubjectTeacherCheckIn  isLoading={isLoading} />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <SubjectTeacherTotalAttendance isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default WelcomeAttandanceCheckIn;
