// Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import SubjectTeacherWelcomeMessage from './welcome-check-in-attendance/welcome-message/welcome';


const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

         {/* Welcome message , Check in  and  attendance */}



          <SubjectTeacherWelcomeMessage  isLoading={isLoading}/>

        

           
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
