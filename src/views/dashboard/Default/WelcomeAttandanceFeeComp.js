import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import WelcomeMessage from './welcome-comp/WelcomeMessage';
import { gridSpacing } from 'store/constant';
// import EarningCard from './EarningCard';
import AttendanceHomeComp from './AttendanceHomeComp';
import DueFee from './FeeDueHomeComp';


// import { useMediaQuery } from '@mui/material';

// this comp hold theree sub comp of dashboared which is 
// 1- welcome
// 2- attendance counter
// 3- fee due counter


const WelcomeAttandanceFeeComp = ({ isLoading }) => {
  
  return (
    <Grid container spacing={gridSpacing} sx={{pb:'11px'}}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <WelcomeMessage isLoading={isLoading} />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <AttendanceHomeComp isLoading={isLoading} />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <DueFee isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default WelcomeAttandanceFeeComp;
