//inventory module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';

import NeedHelp from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/support/Support2';
import Counters from 'views/erp-module/hr-payroll/hr-payroll-dashboard/dashboard/counter';
import UpcomingLeaves from 'views/erp-module/hr-payroll/hr-payroll-dashboard/dashboard/upcoming-leaves';
import EmployeeDemogaphy from 'views/erp-module/hr-payroll/hr-payroll-dashboard/dashboard/employee-demography';
import UpcomingBirthdays from 'views/erp-module/hr-payroll/hr-payroll-dashboard/dashboard/upcoming-birthdays';
import AttendanWeekceChart from 'views/erp-module/hr-payroll/hr-payroll-dashboard/dashboard/attendance-weekly';

const DashboardContent = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {/* counter */}
          <Grid
            item
            xs={12}
            lg={12}
            md={12}
            sx={{ marginTop: { md: '0px', lg: '0rem', display: 'flex', flexDirection: 'column', gap: '24px' } }}
          >
            <Counters/>
          </Grid>

          {/* Stock Category */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          {/* <AttendanceChart/> */}
          <AttendanWeekceChart/>
          </Grid>
          {/* Stockt status */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <EmployeeDemogaphy/>
     
          </Grid>
          {/* Vendor Contacs */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <UpcomingBirthdays/>
          </Grid>
          {/* Low stock items */}
          <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <UpcomingLeaves/>  
          </Grid>
          {/* Frequently Issued Items */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          
          </Grid>
          {/* Help & support */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            {/* <NeedSupport isLoading={isLoading} /> */}
            <NeedHelp isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardContent;
