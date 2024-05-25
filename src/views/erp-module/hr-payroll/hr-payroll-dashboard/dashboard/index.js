//  hr-payroll module Dashboard.js  onedby Sangeeta
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import NeedHelp from 'pages/HelpAndSupport';
import Counters from './counter';
import AttendanceChart from './attendance';
import UpcomingLeaves from './upcoming-leaves';
import EmployeeDemogaphy from './employee-demography';
import UpcomingBirthdays from './upcoming-birthdays';
import EmployeeTopAndBottom from './employee-performance';
// import AttendanWeekceChart from './attendance-weekly';

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

          {/* AttendanceChart */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <AttendanceChart/>
      
          </Grid>
          {/* EmployeeDemogaphy */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <EmployeeDemogaphy/>
     
          </Grid>
          {/*UpcomingLeaves */}
          <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <UpcomingLeaves/>  
           
          </Grid>
          {/*UpcomingBirthdays*/}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <UpcomingBirthdays/>
          </Grid>
          {/* EmployeeTopAndBottom */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <EmployeeTopAndBottom/>
          </Grid>
          {/* Help & support */}
          <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>

            <NeedHelp isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardContent;
