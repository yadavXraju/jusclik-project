import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography } from '@mui/material';
// import { gridSpacing } from 'store/constant';
import { HeadingCss , boxHeight } from 'views/common-section/dashboard-css/CommonCss';
import { StudentStrengthList } from './StudentStrengthList';


const StudentStrength = () => {
  // const isMobile = useMediaQuery('(max-width: 767px)');

  // const AttendanceBox = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   padding: '20px',
  //   paddingBottom: '30px',
  //   alignItems: isMobile ? 'center' : 'auto',
  // };

  const studentData = StudentStrengthList[0]; // Access the first element of the array

  const boysPercentage = ((studentData.boys / studentData.totalStudent) * 100).toFixed(2);
  const girlsPercentage = ((studentData.girls / studentData.totalStudent) * 100).toFixed(2);

  const chartData = {
    series: [parseFloat(boysPercentage), parseFloat(girlsPercentage)],
    chart: {
      type: 'donut',
    },
    labels: ['Boys', 'Girls'],
    colors: ['#5e35b1cc', '#1e88e5bf'],
    responsive: [
      {
        breakpoint: 1600,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    legend: {
      fontSize: '16px',
      colors: ['#99a1b7'],
      fontWeight: '600',
    },
  };

  return (
    <>
       <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid rgba(128, 128, 128, 0.25)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
        marginBottom: '20px', // Add some bottom margin for spacing
      }}
    >
        <Grid
        sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
        }}
      >
          <Typography variant="h2" style={HeadingCss}>
            Students Strength
          </Typography>
        </Grid>

        <Grid sx={{ padding: '24px'}} style={boxHeight}>
          <ApexCharts options={chartData} series={chartData.series} type="donut" height={420} />
        </Grid>
      </Paper>
    </>
  );
};

export default StudentStrength;
