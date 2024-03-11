// import React from 'react'

// const InvoiceRaised = () => {
//   return (
//     <>
//     InvoiceRaised
//     </>
//   )
// }

// export default InvoiceRaised


import React from 'react';
import { Grid, Paper, Typography , } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss , boxHeight } from 'views/dashboard/Default/dashboard-css/CommonCss';

const InvoiceRaised = () => {


  return (
       <>
          <Paper spacing={gridSpacing} style={boxHeight} className='scrollbar' sx={{display:'flex' , flexDirection:'column' , justifyContent :'space-between'}}>
              <Grid sx={{padding:'24px'}}>
                    <Typography variant='h2' style={HeadingCss}>Invoice Raised</Typography> 
              </Grid>

          </Paper>
       </>
  );
};

export default InvoiceRaised;


