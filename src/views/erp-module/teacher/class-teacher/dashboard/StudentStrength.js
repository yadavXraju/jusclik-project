// Page Owner : Abhshek Negi 
// Description : Student Strength Widget

import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper } from '@mui/material';
import {  boxHeight } from 'components/dashboard/CommonCss';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';

export const StudentStrengthList = [
  {
     id:1,
     totalStudent : 55,
     boys : 30,
     girls: 25,

  }
]

const StudentStrength = () => {

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

        <ParamWidgetHeader title='Students Strength' />
        <Grid item sx={{ padding: '24px'}} style={boxHeight}>
          <ApexCharts options={chartData} series={chartData.series} type="donut" height={420} />
        </Grid>
      </Paper>
    </>
  );
};

export default StudentStrength;
