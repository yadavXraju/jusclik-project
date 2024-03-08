
import React from 'react';
import Chart from 'react-apexcharts';
import { Paper , Grid , Typography } from '@mui/material';
import { boxHeight , HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';


export default function HourlyChart() {
  const options = {
    series: [{
      name: "Visitors",
      data: [2, 3, 5, 7, 1, 5, 1, 4, 3, 6, 5, 3, 0]
    }],
    chart: {
      height: 300,
      type: 'line',
      zoom: {
        enabled: false
      },
      fontFamily: 'Plus Jakarta Sans, sans-serif', 
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },

    xaxis: {
      categories: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM']
    },
    legend: {
      labels: {
        colors: 'blue !important' 
      }
    }
  };

  return (
  
      <Paper spacing={gridSpacing} style={boxHeight} className='scrollbar' >
          <Grid sx={{padding:'24px'}}>
                <Typography variant='h2' style={HeadingCss}>Hourly Visitors</Typography> 
          </Grid>


          <Grid className='attandance-graph'  >
              {/* <ApexCharts options={chartData} series={chartData.series} type="donut"  height={ isMediumDesktop ? 370 : 370} /> */}
              <Chart options={options} series={options.series} type="line" height={400} />
          </Grid>

         
       </Paper>
  

);

}




