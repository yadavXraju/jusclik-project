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
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Return',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    chart: {
      type: 'bar', // Corrected chart type to 'bar'
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        endingShape: 'rounded',
      },
    },
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    colors: ['rgb(94, 53, 177)', '#362e7c'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], // Corrected categories
    },
    yaxis: {
      title: {
        text: '(hundred)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return ' ' + val + ' hundred';
        },
      },
    },
  };

  return (
    <Paper spacing={gridSpacing} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)' }}>
      <Grid sx={{ padding: '24px 24px 22px 24px' }}>
        <Typography variant="h2" style={HeadingCss}>
          Issue-Return
        </Typography>
      </Grid>

      <Grid className="attendance-graph" style={AttendanceBox}>
        <ApexCharts options={ChartData} series={ChartData.series} type="bar" height={isMediumDesktop ? 200 : 380} />
      </Grid>
    </Paper>
  );
};

export default IssueReturn2;
