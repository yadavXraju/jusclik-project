import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

const IssueReturn2 = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const AttendanceBox = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
    alignItems: isMobile ? 'center' : 'auto',
  };

  const ChartData = {
    series: [
      {
        name: 'Issued',
        data: [30, 40, 35, 50, 45, 60, 55], // Example data for issued books per week
      },
      {
        name: 'Returned',
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
    },
    colors: ['#008FFB', '#00E396'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'line', // Changed fill type to 'line' for borders only
      colors: ['#008FFB', '#00E396'], // Border colors for each series
      opacity: 1, // Ensure opacity is 1 for solid border
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    xaxis: {
      categories: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'], // Example week labels
    },
    grid:{
        show:false,
    }
  };

  return (
    <Paper spacing={gridSpacing} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)' }}>
      <Grid sx={{ padding: '24px 24px 22px 24px' }}>
        <Typography variant="h2" style={HeadingCss}>
          Issue-Return Weekly Status
        </Typography>
      </Grid>

      <Grid className="attendance-graph" style={AttendanceBox} sx={{paddingBottom:"0px"}}>
        <ApexCharts options={ChartData} series={ChartData.series} type="line" height={isMediumDesktop ? 200 : 300} />
      </Grid>
    </Paper>
  );
};

export default IssueReturn2;
