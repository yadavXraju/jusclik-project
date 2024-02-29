//Fee module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import WelcomeTotalVisitor from './welcome-stufee-boys-girls-strength';
import VisitorProfile from 'views/erp-module/visitor/visitor-dashboard/profile/Profile';
import HourlyVisior from 'views/erp-module/visitor/visitor-dashboard/hourly-visitor';
import FrequentlyReturningVisitor from 'views/erp-module/visitor/visitor-dashboard/frequently-returning-visitors/index.';


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


         {/* Hourly visited chart */}
         <Grid item xs={12} lg={7} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <HourlyVisior isLoading={isLoading} />
         </Grid>

           {/* frequently returning visitors */}
          <Grid item xs={12} lg={5}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <FrequentlyReturningVisitor isLoading={isLoading} /> 
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default Dashboard;
