// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


// export default function HourlyChart() {
//   const data = [
//     { hour: '6AM', visitors: 2 },
//     { hour: '7AM', visitors: 3 },
//     { hour: '8AM', visitors: 5},
//     { hour: '9AM', visitors: 7 },
//     { hour: '10AM', visitors: 1 },
//     { hour: '11AM', visitors: 5 },
//     { hour: '12PM', visitors: 1 },
//     { hour: '1PM', visitors: 4 },
//     { hour: '2PM', visitors: 3 },
//     { hour: '3PM', visitors: 6 },
//     { hour: '4PM', visitors: 5 },
//     { hour: '5PM', visitors: 3 },
//     { hour: '6PM', visitors: 0 },
//   ];

//   return (
//     <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//       <XAxis dataKey="hour" />
//       <YAxis />
//       <CartesianGrid strokeDasharray="3 3"  />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="visitors" stroke="rgb(30, 136, 229)" strokeWidth={3} activeDot={{ r: 8 }} />
//     </LineChart>
//   );
// }

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
    // title: {
    //   text: 'Hourly Visitors',
    //   align: 'left'
    // },
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




