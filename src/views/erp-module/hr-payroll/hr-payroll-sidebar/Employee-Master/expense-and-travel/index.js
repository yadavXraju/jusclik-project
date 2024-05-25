import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import ParamCounters from 'components/dashboard/Counters';
import Divider from '@mui/material/Divider';
import CommonChart from 'components/chart/CommonChart';
import CommonStackedChart from 'components/chart/CommonStackedChart';
import CommonBarChart from 'components/chart/CommonBarChart';
const ExpenseAndTravel = () => {
  const ApexChartData = {
    series: [100, 200, 50],
    labels: ['Air Travel', 'Boarding And Lodging', 'Food & Drinks'],
    colors: ['#c031ee', '#1e88e5', '#5c34ae']
  };

  const ApexChartData2 = {
    series: [150, 100, 40],
    labels: ['Approved', 'Pending', 'Reject'],
    colors: ['#5C34AE', '#C031EE', '#1E88E5']
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
      counterNumber: 14
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
      counterNumber: 8,
      counterTitle: 'Total Employees'
    },

    {
      id: 4,
      icon: (
        <Box sx={{ height: '50px' }}>
          <Divider orientation="vertical" sx={{ background: '#f4cb6a', width: '3px', height: '100%', marginLeft: '0.2rem' }} />{' '}
        </Box>
      ),
      counterNumber: 6,
      counterTitle: 'Pending Receipt Submission'
    }
  ];

  //Dummy Data
  const ChartSeries = [
    {
      name: 'Air Travel',
      data: [3487, 4021, 4568, 3201, 3789, 4123, 4675, 3912, 4345, 3689, 4890, 4476]
    },
    {
      name: 'Food & Drinks',
      data: [2156, 2234, 2405, 2550, 2698, 2780, 2834, 2297, 2632, 2721, 2945, 2067]
    },
    {
      name: 'Cash',
      data: [1745, 1923, 2012, 1836, 2087, 1598, 2023, 2145, 1712, 1865, 1976, 2064]
    },
    {
      name: 'Boarding & Lodging',
      data: [2150, 1897, 2365, 1782, 1643, 2214, 1978, 1569, 2056, 1687, 2391, 2256]
    }
  ];

  const StackedChartXCategories = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const StackedBarColor = ['#0F8290', '#75BB75', '#4092CD', '#a56f6f'];

  const BarChartCategories = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const BarChartSeries = [
    {
      name: 'Amount',
      data: [1000, 4540, 2000, 2034, 1093, 3357, 4205, 3652, 3000, 2500, 1116, 2034]
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
        <Grid item xl={6} lg={12} md={12} sm={12} xs={12} sx={{ marginTop: '1.2rem' }}>
          <Paper>
            <CommonChart Data={ApexChartData} heading={Apexheading} hideDiv={true} chartdetails={chartDetails} />
          </Paper>
        </Grid>
        <Grid item xl={6} lg={12} md={12} sm={12} xs={12} sx={{ marginTop: '1.2rem' }}>
          <Paper>
          <CommonChart Data={ApexChartData2} heading={Apexheading2} hideDiv={true} chartdetails={chartDetails2} />
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ padding: '1.2rem 0rem' }}>
        <CommonBarChart ChartTitle={'Employees Expense Trend'} BarChartcategories={BarChartCategories} BarChartSeries={BarChartSeries} />
      </Box>
      <Box>
        <Paper>
          <CommonStackedChart
            ChartSeries={ChartSeries}
            StackedChartTitle={'Compare Category Wise Expense Trend'}
            StackedBarColor={StackedBarColor}
            StackedChartXCategories={StackedChartXCategories}
          />
        </Paper>
      </Box>
    </>
  );
};

export default ExpenseAndTravel;
