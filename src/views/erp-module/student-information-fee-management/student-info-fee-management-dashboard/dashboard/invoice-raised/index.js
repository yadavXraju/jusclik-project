import React from 'react';
import { Grid, Paper, Typography, LinearProgress , Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

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
      <Paper spacing={gridSpacing} className='scrollbar' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' , border:'1px solid rgb(227, 227, 227)'}}>
        <Grid >
          <Box sx={{ padding: '24px' }}>
             <Typography variant='h2' style={HeadingCss}>Invoice Raised</Typography>
          </Box>
    
          {/* Single progress bar indicating both paid and due amounts */}

          <Box sx={{padding:'104px 24px'}}>
              <LinearProgress variant="determinate" value={paidPercentage} sx={{
                height :'30px'
              }} />
          </Box>

          {/* due ammount and paid amount */}
         <Box sx={{ borderTop:'1px solid rgb(227, 227, 227)'}}>
            <Grid sx={{
              display:'flex',
            }}>

                <Box sx={{
                  flex:'0 0 50%',
                  borderRight:'1px solid rgb(227, 227, 227)',
                  padding:'3rem 24px',
                  
                }}>


                 <Typography variant="h3" sx={{fontSize:'18px'}}>
                  {/* blank typography for labels */}
                    <Typography variant='span' sx={{
                        background:'rgb(30, 136, 229) !important',
                        display:'inline-block',
                        width:'14px',
                        height:'14px',
                        borderRadius:'50%',
                        marginRight:'12px'
                    }}>

                    </Typography>
                      Paid: ₹ {paidAmount}
                 </Typography>
                
                </Box>

                <Box sx={{
                  flex:'0 0 50%',
                  borderRight:'1px solid rgb(227, 227, 227)',
                  padding:'3rem 24px',
                }}>

                  <Typography variant="h3" sx={{fontSize:'18px'}}>
                       {/* blank typography for labels */}
                       <Typography variant='span' sx={{
                        background:'rgb(170, 215, 250) !important',
                        display:'inline-block',
                        width:'14px',
                        height:'14px',
                        borderRadius:'50%',
                        marginRight:'12px'
                    }}>

                    </Typography>
                        Due: ₹ {totalAmount - paidAmount}
                    </Typography>

                </Box>

            </Grid>
         </Box>

        </Grid>
      </Paper>
    </>
  );
};

export default InvoiceRaised;
