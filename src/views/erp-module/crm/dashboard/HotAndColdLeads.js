// ownedby Sanggeta

import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, useMediaQuery} from '@mui/material';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';


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
        marginBottom: '20px', 
      }}
    >
      {/* Heading */}
      <ParamWidgetHeader title='Hot And Cold Leads'/>

      {/* Content */}
      <Grid sx={{ padding: '24px' ,height:"303px"}}>
        {/* Chart */}
        <ApexCharts options={chartData} series={chartData.series} type="bar" height={chartData.chart.height} />


      </Grid>
  
    </Paper>
  );
};

export default HotAndColdLeads;
