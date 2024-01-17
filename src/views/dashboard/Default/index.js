// Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import Profile from './Profile';
import WelcomeAttandanceFeeComp from './WelcomeAttandanceFeeComp';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
// import PopularCard from './PopularCard';
import CircularAndNoticeHomeComp from './CircularAndNoticeHomeComp';
import AssignmentsHomeComp from './assignmentHome/AssignmentsHomeComp';
import TimeTableHome from './TimeTableHome';
import CommunicationHomeComp from './CommunicationHomeComp';
import AttandanceChartHomeComp from './AttendanceChartHomeComp';


const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
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

          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <Profile />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={5} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <AttandanceChartHomeComp isLoading={isLoading} />
          </Grid>

          {/* <Grid item xs={12} md={7}>
            <CircularAndNoticeHomeComp isLoading={isLoading} />
          </Grid> */}

           <Grid item xs={12} md={7} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <AssignmentsHomeComp isLoading={isLoading} />
          </Grid>


          <Grid item xs={12} md={5} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <CircularAndNoticeHomeComp isLoading={isLoading} />
          </Grid>
          

          {/* <Grid item xs={12} md={7} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <AssignmentsHomeComp isLoading={isLoading} />
          </Grid> */}


          <Grid item xs={12} md={7}>
              <TimeTableHome isLoading={isLoading} /> 
          </Grid>


          <Grid item xs={12} md={5} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <CommunicationHomeComp isLoading={isLoading} />
          </Grid>



        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
