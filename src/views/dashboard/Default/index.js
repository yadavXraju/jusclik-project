// Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import Profile from './Profile';
import WelcomeAttandanceFeeComp from './WelcomeAttandanceFeeComp';
import CircularAndNoticeHomeComp from './CircularAndNoticeHomeComp';
import AssignmentsHomeComp from './assignmentHome/AssignmentsHomeComp';
import TimeTableHome from './TimeTableHome';
import CommunicationHomeComp from './CommunicationHomeComp';
import AttandanceChartHomeComp from './AttendanceChartHomeComp';
import Alert from './Alerts';
// import BasicDateRangeCalendarNew from './cal-home-comp';


const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

         {/* Welcome message , Attandance and fee due comp */}
          <Grid item lg={8} md={12} sm={12} xs={12} spacing={gridSpacing}>
            <Grid
              spacing={gridSpacing}
              sx={{
                backgroundColor: '#fff',
                border: '1px solid rgb(227 227 227)',
                borderRadius: '7px',
                px: 4,
                py: 3,
              }}
              className='testC'
            >
              <WelcomeAttandanceFeeComp isLoading={isLoading} />
            </Grid>
          </Grid>

         {/* Profile comp */}
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <Profile />
              </Grid>
            </Grid>
          </Grid>

          {/* Communication comp */}
          <Grid item xs={12} md={7} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <CommunicationHomeComp isLoading={isLoading} />
          </Grid>

           {/* Alert comp */}
          <Grid item xs={12} md={5} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <Alert isLoading={isLoading} /> 
          </Grid>

           {/* Assignment comp */}
          <Grid item xs={12} md={7} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <AssignmentsHomeComp isLoading={isLoading} />
          </Grid>
          
           {/* Attandance chart comp */}
          <Grid item xs={12} md={5}>
              <AttandanceChartHomeComp isLoading={isLoading} />
          </Grid>

           {/* Time Table comp */}
          <Grid item xs={12} md={7} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <TimeTableHome isLoading={isLoading} /> 
          </Grid>

           {/* Circular and Notice or Updates comp */}
          <Grid item xs={12} md={5}>
              <CircularAndNoticeHomeComp isLoading={isLoading} />
          </Grid>


        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
