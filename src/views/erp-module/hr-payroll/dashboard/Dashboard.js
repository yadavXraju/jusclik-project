//  hr-payroll module Dashboard.js  onedby Sangeeta
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import NeedHelp from 'pages/HelpAndSupport';
import Counters from 'views/erp-module/hr-payroll/dashboard/TotalGender';
import AttendanceChart from 'views/erp-module/hr-payroll/dashboard/Attendance';
import UpcomingLeaves from 'views/erp-module/hr-payroll/dashboard/UpcomingLeaves';
import EmployeeDemogaphy from 'views/erp-module/hr-payroll/dashboard/EmployeeDemogaphy';
import UpcomingBirthdays from 'views/erp-module/hr-payroll/dashboard/UpcomingBirthdays';
import EmployeeTopAndBottom from 'views/erp-module/hr-payroll/dashboard/EmployeeTopAndBottom';
// import AttendanWeekceChart from 'views/erp-module/hr-payroll/hr-payroll-dashboard/dashboard/attendance-weekly';

const Dashboard = ({ isLoading }) => {
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

export default Dashboard;
