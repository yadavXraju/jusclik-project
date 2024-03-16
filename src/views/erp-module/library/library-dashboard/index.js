//Fee module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
// import FeeDefaulter from './fee-defaulter';

import TotalBook from './counter/totalBooks';
import IssuedBook from './counter/issuedBooks';
import BookDetailPieChart from './LibraryBook';
import AvialabelBooks from './counter/avialabelBook';
import Reservation from './counter/reservation';
import IssueReturn from './issuedRetun/IssuedReturnPiechart';
import OverDueBook from './OverDueBooks';



const Dashboard = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} >



         {/* counter */}
          <Grid item xs={12} lg={12} md={12} sx={{ 
            // marginTop: { md: '0px', lg: '0rem' , } ,
            paddingBottom:'0',
            marginTop:'20px',
            display:'flex' ,
            gap:'40px' ,
            marginLeft:'14px'
            }}>
             {/* <LiveStrength /> */}
             <TotalBook />
             <AvialabelBooks/>
            <IssuedBook />
            <Reservation />
         </Grid>

         
        {/* <Grid item xs={12} lg={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' , display:'flex' , flexDirection:'column', gap:'40px' ,} }}>
           <LiveStudent />
        </Grid> */}

         {/* Books Detail Pie chart */}
         <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '1rem' } }}>
            {/* <InvoiceRaised /> */}
            <BookDetailPieChart/>
         </Grid>

         {/* fee collection */}
         <Grid item xs={12} lg={6}  md={12} sx={{ marginTop: { md: '0px', lg: '1rem' } }}>
              {/* <FeeCollection/>  */}
              <IssueReturn/>
          </Grid>

           {/* fee defaulter */}
           <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '1rem' } }}>
              {/* <FeeDefaulter isLoading={isLoading} />  */}
              <OverDueBook/>
          </Grid>

          {/* need support */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '2rem' } }}>
              {/* <NeedSupport isLoading={isLoading} />  */}
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default Dashboard