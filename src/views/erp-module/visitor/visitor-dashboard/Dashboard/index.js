//Fee module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';



import NeedSupport from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/support/Support';


import VisitorDetail from './visitor-detail';
import HourlyVisior from './hourly-visitor';
import DepartmentwiseVisitor from './deparmentwise-visitor';
import RecentVisitors from './recent visitor';

const DashboardContent = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        {/* counter */}
        <VisitorDetail />

      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} >

         <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '1rem' } }}>
 
         <HourlyVisior/>
         </Grid>

         <Grid item xs={12} lg={6}  md={12} sx={{ marginTop: { md: '0px', lg: '1rem' } }}>
       <DepartmentwiseVisitor/>
          </Grid>

   
           <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>

          <RecentVisitors/>
          
          </Grid>

      
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <NeedSupport /> 
          </Grid>
          <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
        
     
          </Grid>
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};



export default  DashboardContent;