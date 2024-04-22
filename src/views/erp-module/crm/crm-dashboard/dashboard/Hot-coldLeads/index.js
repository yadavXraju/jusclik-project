import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery} from '@mui/material';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss';

const HotAndColdLeads = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const chartData = {
    series: [
      { name: 'Hot', data: [5] },
      { name: 'Cold', data: [3] },
    ],
    chart: {
      type: 'bar',
      height: isMobile ? 150 : 200,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%', // Adjust bar height
        borderRadius: 5,
        dataLabels: {
          position: 'top', // Show data labels on top of bars
        },
      },
    },
    colors: ['#FF4560', '#50A5F1'], // Colors for Hot and Cold bars
    xaxis: {
      categories: ['Leads'],
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px', // Adjust font size of labels
        },
      },
    },
    legend: {
      position: 'bottom', // Move legend to bottom
    },
  };

  return (
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
      {/* Heading */}
      <Grid
        sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
        }}
      >
        <Typography  variant="h2" sx={HeadingCss}>
          Hot And Cold Leads
        </Typography>
      </Grid>

      {/* Content */}
      <Grid sx={{ padding: '24px' ,height:"303px"}}>
        {/* Chart */}
        <ApexCharts options={chartData} series={chartData.series} type="bar" height={chartData.chart.height} />


      </Grid>
    </Paper>
  );
};

export default HotAndColdLeads;
