
//Fee module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import FeeDefaulter from './fee-defaulter';
// import LiveStudent from './live-student';
import InvoiceRaised from './invoice-raised';
import FeeCollection from './fee-collection';
// import NeedSupport from './support/Support';
import Counters from './counters/Counters';
import EnrollmentStatistics from './enrollment-statistics/EnrollmentStatistics';
import ParentLoginStatus from './parent-login-status/ParentLoginStatus';
import NeedHelp from './support/Support2';

const DashboardContent = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} >



         {/* counter */}  
        <Grid item xs={12} lg={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' , display:'flex' , flexDirection:'column', gap:'24px' ,} }}>
           <Counters />
        </Grid>


          {/* enrollment stats */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <EnrollmentStatistics />
         </Grid>

        {/* parent login */}
        <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
                <ParentLoginStatus/>
          </Grid>

         {/* invoice raised */}
         <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <InvoiceRaised />
         </Grid>

         {/* fee collection */}
         <Grid item xs={12} lg={6}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <FeeCollection/> 
          </Grid>

           {/* fee defaulter */}
           <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <FeeDefaulter isLoading={isLoading} /> 
          </Grid>

          {/* need support */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              {/* <NeedSupport isLoading={isLoading} />  */}
              <NeedHelp isLoading={isLoading} />
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default DashboardContent;