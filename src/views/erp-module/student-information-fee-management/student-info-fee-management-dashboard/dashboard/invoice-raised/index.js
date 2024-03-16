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
      <Paper spacing={gridSpacing} className='scrollbar' elevation={0} sx={{ boxShadow:'4px 4px 9px 2px #ddddddc2' , display: 'flex', flexDirection: 'column', justifyContent: 'space-between' , border:'1px solid rgb(227, 227, 227)' , }}>
        <Grid >
          <Box sx={{ padding: '24px 24px 0 24px' , background:'#f9f9fb' , borderBottom:'1px solid rgba(128, 128, 128, 0.25)'}}>
             <Typography variant='h2' style={{...HeadingCss , border:'none' }}>Invoice Raised</Typography>
          </Box>
    
          {/* Single progress bar indicating both paid and due amounts */}

           {/* paid */}
          <Typography variant='h4' sx={{textAlign:'center', padding:'4rem 0 0rem 0' , fontSize:'24px'}}> {paidPercentage}%</Typography>

          <Box sx={{padding:'14px 24px 72px 24px'}}>
              <LinearProgress variant="determinate" value={paidPercentage} sx={{
                height :'8px',
                background:'#2196f361',
                '& .MuiLinearProgress-barColorPrimary': {
                  backgroundColor: '#2196f391', // Change the color of the progress bar here
                },
              }} />
          </Box>
         
          {/* due ammount and paid amount */}
         <Box sx={{ borderTop:'1px solid rgb(227, 227, 227)'}}>
            <Grid sx={{
              display:'flex',
            }}>

                {/* paid amount */}
                <Box sx={{
                  flex:'0 0 50%',
                  borderRight:'1px solid rgb(227, 227, 227)',
                  padding:'3rem 24px',   
                  textAlign:'center',            
                }}>

                    <Typography variant="h3" sx={{
                      fontSize:'16px',
                      }}>

                      {/* blank typography for labels */}

                        {/* <Typography variant='span' sx={{
                            background:'rgb(30, 136, 229) !important',
                            display:'inline-block',
                            width:'10px',
                            height:'10px',
                            borderRadius:'50%',
                            marginRight:'8px',
                        }}>

                        </Typography> */}
                        
                        ₹ {paidAmount}

                    </Typography>

                    <Typography variant="h3" sx={{ fontSize:'16px', paddingTop:'5px' , fontWeight:'500' }}>
                          Paid
                    </Typography>
                    
                </Box>

                {/* due amount */}
                <Box sx={{
                  flex:'0 0 50%',
                  padding:'3rem 24px',
                  textAlign:'center',
                }}>

                  <Typography variant="h3" sx={{fontSize:'16px'}}>
                       {/* blank typography for labels */}

                       {/* <Typography variant='span' sx={{
                        background:'rgb(170, 215, 250) !important',
                        display:'inline-block',
                        width:'10px',
                        height:'10px',
                        borderRadius:'50%',
                        marginRight:'8px',
                    }}>

                    </Typography> */}
                         ₹ {totalAmount - paidAmount}
                    </Typography>

                    <Typography variant="h3" sx={{fontSize:'16px' , paddingTop:'5px' , fontWeight:'500'}}>
                       Due
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
