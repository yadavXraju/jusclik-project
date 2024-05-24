import React from 'react';
import { Grid, Paper, Typography , Box , } from '@mui/material';
import ParamCounters from 'components/ParamCounters';

import Divider from '@mui/material/Divider';





const ExpenseAndTravel = () => {
  // const HeadingData = [
  //   { name: 'Total Paid Out Expenses', value: '7', color: '#84c5d2' },
  //   { name: 'Total Paid Amount', value: 'INR 71,756', color: '#a0b650' },
  //   { name: 'Total Employees', value: '4', color: '#c080bc' },
  //   { name: 'Pending Receipt Submission', value: '4', color: '#f4cb6a' }
  // ];


  const CounterData = [
    {
        id: 1,
        counterTitle: 'Total Paid Out Expenses',
        icon:  (<Box><Divider
        orientation="vertical"
        sx={{background:'red', width: '2px', height: '80%', marginLeft: '1rem', marginTop: '0.5rem' }}
      /> </Box>),
        counterNumber: 7,
        
       
    },
    {
        id: 2,
        icon: (<Box><Divider
          orientation="vertical"
          sx={{background:'red', width: '2px', height: '80%', marginLeft: '1rem', marginTop: '0.5rem' }}
        /> </Box>),
        counterNumber: 'INR 71,756',       
        counterTitle: 'Total Paid Amount',
       
    },
    {
        id: 3,
        icon: (<Box><Divider
          orientation="vertical"
          sx={{background:'red', width: '2px', height: '80%', marginLeft: '1rem', marginTop: '0.5rem' }}
        /> </Box>),
        counterNumber: 4,
        counterTitle: 'Total Employees',
     
    },

    {
      id: 4,
      icon: (<Box><Divider
        orientation="vertical"
        sx={{background:'red', width: '2px', height: '80%', marginLeft: '1rem', marginTop: '0.5rem' }}
      /> </Box>),
      counterNumber: 4,
      counterTitle: 'Pending Receipt Submission',
   
  },

];


  return (
    <>
      <Grid component={Paper} elevation={2} sx={{ display: 'flex', height: '5vh', alignItems: 'center' }}>
        <Typography variant="h3" sx={{ paddingLeft: '2rem' }}>
          Expense Overview{' '}
        </Typography>
      </Grid>

      <Grid spacing={5} sx={{ paddingTop: '1rem' }}>
          <ParamCounters CounterData={CounterData} reverseOrderFlag={true} headingstyle={{fontSize:'14px'}} subheadingstyle={{fontSize:'24px'}} customboxstyle={{padding:'1rem'}} />
      </Grid>

      <Grid container spacing={2}>

      <Grid item lg={6}>
Heelo
      </Grid>
      <Grid item lg={6}>
        Hello
      </Grid>


      </Grid>






    

      {/* <Grid container item spacing={5} sx={{ paddingTop: '1rem' }}> */}
      
      {/* <Grid item lg={3} > */}
      

        {/* </Grid> */}

{/* 
        </Grid> */}
        {/* </Grid> */}

      {/* <Grid container spacing={5} sx={{ paddingTop: '1rem' }}>
        {HeadingData.map((item, index) => (
          <Grid item lg={3} key={index}>
            <Paper sx={{ height: '10vh', display: 'flex', alignItems: 'top', justifyContent: 'left' }}>
              <Divider
                orientation="vertical"
                sx={{ backgroundColor: item.color, width: '2px', height: '80%', marginLeft: '1rem', marginTop: '0.5rem' }}
              />

              <Box>
                <Typography variant="h4" sx={{ paddingLeft: '1.5rem', paddingTop: '1rem' }}>
                  {item.name}
                </Typography>
                <Typography variant="h3" sx={{ paddingLeft: '1.5rem', paddingTop: '0.7rem' }}>
                  {item.value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid> */}

      {/* <Grid container spacing={5} sx={{paddingTop:'1rem'}} >
  <Grid item lg={6} >
    <Paper sx={{height:'40vh'}}>
      <Typography variant='h4'>Hello</Typography>
    </Paper>
  </Grid>

  <Grid item lg={6} >
    <Paper sx={{height:'40vh'}}>
      <Typography>Hello</Typography>
    </Paper>
  </Grid>
</Grid> */}






    </>
  );
};

export default ExpenseAndTravel;

{
  /* <Grid item lg={3}>
      <Paper sx={{ height: '10vh', display: 'flex', alignItems: 'top', justifyContent: 'left' }}>
        
        <Divider orientation="vertical" sx={{ backgroundColor: '#9acfda', width: '3px' , height:'80%' , marginLeft:'1rem' , marginTop:'0.5rem'}} />
       
       <Box>
        <Typography variant='h4' sx={{ paddingLeft: '1.5rem' , paddingTop:'1rem' }}>
          Total Paid out Expenses
        </Typography>
        <Typography variant='h2' sx={{  paddingLeft: '1.5rem' , paddingTop:'0.7rem' }}>
          7
        </Typography>
        </Box>

      </Paper>
    </Grid>
      <Grid item lg={3}>
        
      <Paper sx={{height:'10vh'}}>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          Total Paid Amount
        </Typography>
        </Paper>
      </Grid>
      <Grid item lg={3}>
      <Paper sx={{height:'10vh'}}>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          Total Employees
        </Typography>
        </Paper>
      </Grid>
      <Grid item lg={3}>
      <Paper sx={{height:'10vh'}}>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          Pending Receipt Submission
        </Typography>
        </Paper>
      </Grid> */
}
