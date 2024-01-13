// Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import Profile from './Profile';
import WelcomeAttandanceFeeComp from './WelcomeAttandanceFeeComp';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import PopularCard from './PopularCard';
import AssignmentsHomeComp from '../AssignmentsHomeComp';
import TimeTableHome from './TimeTableHome';


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
          <Grid item xs={12} md={8} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>

          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>


          <Grid item xs={12} md={6} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <TimeTableHome isLoading={isLoading} />
          </Grid>
          

          <Grid item xs={12} md={6} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <AssignmentsHomeComp isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
