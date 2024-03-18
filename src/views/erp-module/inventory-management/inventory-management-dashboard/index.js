
//inventory module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import FeeDefaulter from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/fee-defaulter';
import InvoiceRaised from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/invoice-raised';
import FeeCollection from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/fee-collection';
import NeedSupport from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/support/Support';
import Counters from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/counters/Counters';
import EnrollmentStatistics from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/enrollment-statistics/EnrollmentStatistics';
import ParentLoginStatus from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/parent-login-status/ParentLoginStatus';


const Dashboard = ({ isLoading }) => {
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
              <NeedSupport isLoading={isLoading} /> 
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default Dashboard;