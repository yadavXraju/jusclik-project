import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { gridSpacing } from 'store/constant';
import VisitorWelcomeMessage from './welcome-message/welcome';
import TodayVisitor from './today-visitor/TodayVisitor';
import ClassTeacherTotalAttendance from 'views/class-teacher-dashboard/welcome-check-in-attendance/total-attendance/TotalAttendance';


// import { useMediaQuery } from '@mui/material';

// this comp hold theree sub comp of dashboared which is 

// 1- welcome
// 2- Check in Counter
// 3- Attendance Counter


const WelcomeTotalVisitor = ({ isLoading }) => {
  
  return (
    <Grid container spacing={gridSpacing} sx={{pb:'11px'}}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <VisitorWelcomeMessage isLoading={isLoading} />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <TodayVisitor   isLoading={isLoading} />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ClassTeacherTotalAttendance isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default  WelcomeTotalVisitor;
