import React from 'react';
import { Grid, Paper, Typography, LinearProgress , Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss, boxHeight } from 'views/dashboard/Default/dashboard-css/CommonCss';

const InvoiceRaised = () => {
  // Define the total amount and the paid amount
  const totalAmount = 50000; // Replace 1000 with your total amount
  const paidAmount = 30000; // Replace 600 with your paid amount

  // Calculate the percentage of the paid amount
  const paidPercentage = (paidAmount / totalAmount) * 100;
  // Calculate the percentage of the due amount
  // const duePercentage = 100 - paidPercentage;

  return (
    <>
      <Paper spacing={gridSpacing} style={boxHeight} className='scrollbar' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Grid sx={{ padding: '24px' }}>
          <Typography variant='h2' style={HeadingCss}>Invoice Raised</Typography>
          
          {/* Single progress bar indicating both paid and due amounts */}
          <LinearProgress variant="determinate" value={paidPercentage} sx={{
            height :'30px'
          }} />


          {/* due ammount and paid amount */}
          <Grid sx={{
            display:'flex',
          }}>

              <Box sx={{
                flex:'0 0 50%',
              }}>
                <Typography variant='body1'>Paid: ₹ {paidAmount}</Typography>
              </Box>

              <Box sx={{
                flex:'0 0 50%',
              }}>
                <Typography variant='body1'>Due: ₹ {totalAmount - paidAmount}</Typography>
              </Box>

          </Grid>

        </Grid>
      </Paper>
    </>
  );
};

export default InvoiceRaised;
