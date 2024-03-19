//Fee module Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
// import FeeDefaulter from './fee-defaulter';
import BookDetailPieChart from './LibraryBook';

// import IssueReturn from './issuedRetun/IssuedReturnPiechart';
// import OverDueBook from './OverDueBooks';
import BookDetail from './bookDetail/BookDetail';
import IssueReturn2 from './issuedRetun';

import NeedSupport from 'views/erp-module/student-information-fee-management/student-info-fee-management-dashboard/dashboard/support/Support';
import LastestUpdatesOfBooks from './latestbooks';
import OverDueBook from './OverDueBooks';
import LateFine from './LateFine';

const Dashboard = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>

      <BookDetail />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} >




         {/* Books Detail Pie chart */}
         <Grid item xs={12} lg={6} md={12} sx={{ marginTop: { md: '0px', lg: '1rem' } }}>
            {/* <InvoiceRaised /> */}
               <IssueReturn2/>
            {/* <OverDueBook/> */}
         </Grid>

         {/* fee collection */}
         <Grid item xs={12} lg={6}  md={12} sx={{ marginTop: { md: '0px', lg: '1rem' } }}>
    
              <BookDetailPieChart/>
          </Grid>

           {/* fee defaulter */}
           <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <OverDueBook/>
              {/* <FeeDefaulter isLoading={isLoading} />  */}
          
          </Grid>

          {/* need support */}
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             
              <LastestUpdatesOfBooks/>
          </Grid>
          <Grid item xs={12} lg={8} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          {/* <NeedSupport />  */}
          <LateFine />
          </Grid>
          <Grid item xs={12} lg={4} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
          <NeedSupport /> 
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};



export default Dashboard