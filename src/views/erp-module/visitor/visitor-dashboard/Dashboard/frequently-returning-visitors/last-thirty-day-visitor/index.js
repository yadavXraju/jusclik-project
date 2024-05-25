// sangeeta
import React from 'react';
import Chart from 'react-apexcharts';
import { Paper , Grid , Typography } from '@mui/material';
import { boxHeight , HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';

export default function LastThirtyDayVisitor() {

    const options = {
        series: [{
          name: "Visitors",
          data: [2, 4 , 3] // Placeholder data
        }],
        chart: {
          type: 'bar',
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
          categories: ['January 20', 'February 5' ,'February 7' ]
        },
        legend: {
          labels: {
            colors: 'blue !important' 
          }
        }
      };
  return (
    <>

       <Paper spacing={gridSpacing} style={boxHeight} className='scrollbar' >
          <Grid sx={{padding:'24px'}}>
                <Typography variant='h2' style={HeadingCss}>VISITORS OF LAST 30 DAYS</Typography> 
          </Grid>


          <Grid className='attandance-graph'  >
              <Chart options={options} series={options.series} type="bar" height={400} />
          </Grid>

         
       </Paper>


    </>
  );
}
