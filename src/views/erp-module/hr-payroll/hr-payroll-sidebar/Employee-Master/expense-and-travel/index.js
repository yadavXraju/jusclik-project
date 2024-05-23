import React from 'react';
import { Grid, Paper, Typography , Box , } from '@mui/material';
import ParamCounters from 'component/ParamCounters';

import Divider from '@mui/material/Divider';
import CommonChart from 'component/CommonChart';

const ExpenseAndTravel = () => {
  const ApexChartData = {
    series: [100, 200, 50],
    labels: ['Air Travel', 'Boarding And Lodging', 'Food & Drinks'],
    colors: ['#c031ee', '#1e88e5', '#5c34ae']
  };

  const ApexChartData2 = {
    series: [150, 100, 40],
    labels: ['Approved', 'Pending', 'Reject'],
    colors: ['#75bb75', '#0f8290', '#f74d49']
  };

  const Apexheading = 'Expense by Category';
  const Apexheading2 = 'Expense by Status';

  const chartDetails = [
    { label: 'HIGHEST SPEND CATEGORY', chartvalues: 'Air Travel' },
    { label: 'HIGHEST SPEND CATEGORY', chartvalues: 'Boarding And Lodging' },
    { label: 'AVG SPEND CATEGORY', chartvalues: 'INR 6,400' }
  ];

  const chartDetails2 = [
    { label: 'APPROVED EXPENSES', chartvalues: '51.7% - High' },
    { label: 'PENDING EXPENSES', chartvalues: '34.5% - Avg' },
    { label: 'REJECTED EXPENSES', chartvalues: '17% - Low' }
  ];
  const CounterData = [
    {
      id: 1,
      counterTitle: 'Total Paid Out Expenses',
      icon: (
        <Box sx={{ height: '50px' }}>
          <Divider orientation="vertical" sx={{ background: '#84c5d2', width: '3px', height: '100%', marginLeft: '0.2rem' }} />{' '}
        </Box>
      ),
      counterNumber: 7
    },
    {
      id: 2,
      icon: (
        <Box sx={{ height: '50px' }}>
          <Divider orientation="vertical" sx={{ background: '#a0b650', width: '3px', height: '100%', marginLeft: '0.2rem' }} />{' '}
        </Box>
      ),
      counterNumber: 'INR 71,756',
      counterTitle: 'Total Paid Amount'
    },
    {
      id: 3,
      icon: (
        <Box sx={{ height: '50px' }}>
          <Divider orientation="vertical" sx={{ background: '#c080bc', width: '3px', height: '100%', marginLeft: '0.2rem' }} />{' '}
        </Box>
      ),
      counterNumber: 4,
      counterTitle: 'Total Employees'
    },

    {
      id: 4,
      icon: (
        <Box sx={{ height: '50px' }}>
          <Divider orientation="vertical" sx={{ background: '#f4cb6a', width: '3px', height: '100%', marginLeft: '0.2rem' }} />{' '}
        </Box>
      ),
      counterNumber: 4,
      counterTitle: 'Pending Receipt Submission'
    }
  ];

  return (
    <>
      <Grid sx={{ display: 'flex', height: '5vh', alignItems: 'center' }}>
        <Typography variant="h3" sx={{ paddingLeft: '0.1rem' }}>
          Expense Overview{' '}
        </Typography>
      </Grid>

      <Grid spacing={5} sx={{ paddingTop: '0.5rem' }}>
        <ParamCounters
          CounterData={CounterData}
          reverseOrderFlag={true}
          headingstyle={{ fontSize: '14px' }}
          subheadingstyle={{ fontSize: '24px' }}
          customboxstyle={{ padding: '1rem', gap: '20px' }}
        />
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={6} sx={{ marginTop: '1.2rem' }}>
          <Paper>
            <CommonChart Data={ApexChartData} heading={Apexheading} hideDiv={true} chartdetails={chartDetails} />
          </Paper>
        </Grid>
        <Grid item lg={6} sx={{ marginTop: '1.2rem' }}>
          <Paper>
            <CommonChart Data={ApexChartData2} heading={Apexheading2} hideDiv={true} chartdetails={chartDetails2} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ExpenseAndTravel;
