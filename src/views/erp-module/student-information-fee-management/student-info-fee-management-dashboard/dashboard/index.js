//Fee module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import FeeDefaulter from './fee-defaulter';
import LiveStrength from './counter/live-strength/LiveStrength';
import BoyStrength from './counter/boys-strength/BoysStrength';
import GirlStrength from './counter/girls-strength/GirlsStrength';
import SmsBalance from './counter/sms-balance/SmsBalance';
import InvoiceRaised from './invoice-raised';
import FeeCollection from './fee-collection';


const DashboardContent = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} sx={{padding:'24px'}}>



         {/* counter */}
          <Grid item xs={12} lg={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' , display:'flex' , gap:'40px' , padding:'24px'} }}>
             <LiveStrength />
             <BoyStrength />
             <GirlStrength />
             <SmsBalance />
         </Grid>

         
         {/* invoice raised */}
         <Grid item xs={12} lg={7} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <InvoiceRaised />
         </Grid>

         {/* fee collection */}
         <Grid item xs={12} lg={5}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <FeeCollection/> 
          </Grid>

           {/* fee defaulter */}
           <Grid item xs={12} lg={7} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <FeeDefaulter isLoading={isLoading} /> 
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default DashboardContent;
