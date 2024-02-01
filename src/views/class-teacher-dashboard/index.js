// Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import WelcomeAttandanceCheckIn from './welcome-check-in-attendance';


const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

         {/* Welcome message , Check in  and  attendance */}

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
            >
              <WelcomeAttandanceCheckIn isLoading={isLoading} />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
