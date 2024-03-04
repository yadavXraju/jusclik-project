import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { gridSpacing } from 'store/constant';
import VisitorWelcomeMessage from 'views/erp-module/visitor/visitor-dashboard/welcome-visitor-today-visitor-total-visitor/welcome-message/welcome';
import BoyStrength from './boys-strength/BoyStrength';
import GirlStrength from './girls-strength/GirlStrength';


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
        <BoyStrength  isLoading={isLoading} />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <GirlStrength isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default  WelcomeTotalVisitor;