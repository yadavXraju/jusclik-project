//Fee module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import FeeDefaulter from './fee-defaulter';
// import LiveStrength from './counter/live-strength/LiveStrength';
// import BoyStrength from './counter/boys-strength/BoysStrength';
// import GirlStrength from './counter/girls-strength/GirlsStrength';
import LiveStudent from './live-student';
import InvoiceRaised from './invoice-raised';
import FeeCollection from './fee-collection';
import NeedSupport from './support/Support';


const DashboardContent = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} >



         {/* counter */}
          {/* <Grid item xs={12} lg={12} md={12} sx={{ 
            // marginTop: { md: '0px', lg: '0rem' , } ,
            paddingBottom:'0',
            marginTop:'20px',
            display:'flex' ,
            gap:'40px' ,
            marginLeft:'14px'
            }}>
             <LiveStrength />
             <BoyStrength />
             <GirlStrength />
         </Grid> */}

         
        <Grid item xs={12} lg={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' , display:'flex' , flexDirection:'column', gap:'40px' ,} }}>
           <LiveStudent />
        </Grid>

         {/* invoice raised */}
         <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <InvoiceRaised />
         </Grid>

         {/* fee collection */}
         <Grid item xs={12} lg={6}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <FeeCollection/> 
          </Grid>

           {/* fee defaulter */}
           <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <FeeDefaulter isLoading={isLoading} /> 
          </Grid>

          {/* need support */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <NeedSupport isLoading={isLoading} /> 
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default DashboardContent;