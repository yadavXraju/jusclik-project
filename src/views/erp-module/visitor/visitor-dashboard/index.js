// Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import WelcomeTotalVisitor from './welcome-visitor-today-visitor-total-visitor';
import VisitorProfile from './profile/Profile';


const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

        {/* Welcome message , today visitor , total visitor */}
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
                      <WelcomeTotalVisitor  isLoading={isLoading} />
                    </Grid>
        </Grid>

         {/* Profile comp */}
         <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={12} xs={12} md={12} lg={12}>
                <VisitorProfile />
              </Grid>
            </Grid>
         </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
