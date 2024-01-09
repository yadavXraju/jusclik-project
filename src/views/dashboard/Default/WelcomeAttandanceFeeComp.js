import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import EarningCard from './EarningCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import WelcomeMessage from './WelcomeMessage';
import { gridSpacing } from 'store/constant';
// import { useMediaQuery } from '@mui/material';


const WelcomeAttandanceFeeComp = ({ isLoading }) => {
  
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item lg={12} md={6} sm={12} xs={12}>
        <WelcomeMessage isLoading={isLoading} />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <EarningCard isLoading={isLoading} />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <TotalOrderLineChartCard isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default WelcomeAttandanceFeeComp;
