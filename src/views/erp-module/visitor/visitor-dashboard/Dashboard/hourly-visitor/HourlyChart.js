
import React from 'react';
import Chart from 'react-apexcharts';
import { Paper , Grid , Typography } from '@mui/material';
import {HeadingCss } from 'components/dashboard/CommonCss';
import { gridSpacing } from 'store/constant';


export default function HourlyChart() {
  const options = {
    series: [{
      name: "Visitors",
      data: [2, 3, 5, 7, 1, 5, 1, 4, 3, 6, 5, 3, 0 ,4]
    }],
    chart: {
      height:300,
      type: 'line',
      zoom: {
        enabled: false
      },
     
    },
    colors: ['#987ECD'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'line', // Changed fill type to 'line' for borders only
      colors: ['#987ECD'], // Border colors for each series
      opacity: 1, // Ensure opacity is 1 for solid border
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize:'14px',
      margin:"20px"
     
    },
    xaxis: {
      categories: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],      labels: {
        style: {
          fontSize: '12px',
        },
      },

      yaxis: {
        show: true,
        labels: {
          style: {
            fontSize: '14px',
          },
        },
      },
    },
    grid:{
      show:false,
  }
  };

  return (
  
      <Paper spacing={gridSpacing}  >
          <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Hourly Visitor</Typography>
        </Grid>


          <Grid   >
              {/* <ApexCharts options={chartData} series={chartData.series} type="donut"  height={ isMediumDesktop ? 370 : 370} /> */}
              <Chart options={options} series={options.series} type="line" height={325}  />
          </Grid>

         
       </Paper>
  

);

}




