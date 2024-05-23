import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'component/dashboard-css/CommonCss'

const IssueReturn2 = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const AttendanceBox = {
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile? "0 0":'0 20px',
    alignItems: isMobile ? 'center' : 'auto',
  };

  const ChartData = {
    series: [
      {
        name: 'Issue',
        data: [30, 40, 35, 50, 45, 60, 55], // Example data for issued books per week
      },
      {
        name: 'Return',
        data: [20, 25, 30, 35, 40, 45, 50], // Example data for returned books per week
      },
    ],
    chart: {
      type: 'line',
      height: 300,
      stacked: true,
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        },
      },
      zoom: {
        enabled: false
      }
    },
 
    colors: ['#987ECD', '#75BB75'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'line', // Changed fill type to 'line' for borders only
      colors: ['#987ECD', '#75BB75'], // Border colors for each series
      opacity: 1, // Ensure opacity is 1 for solid border
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize:'14px',
      margin:"20px"
     
    },
    xaxis: {
      categories: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'], // Example week labels
      labels: {
        style: {
          fontSize: '12px',
        },
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
    grid:{
        show:false,
       
    }
  };

  return (
    <Paper spacing={gridSpacing} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)'}}>
   {/* ================================= heading  =================================  */}
   <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Issue Return</Typography>
        </Grid>

      <Grid className="attendance-graph" style={AttendanceBox}>
        <ApexCharts options={ChartData} series={ChartData.series} type="line" height={isMediumDesktop ? 200 : 320} />
      </Grid>
    </Paper>
  );
};

export default IssueReturn2;
