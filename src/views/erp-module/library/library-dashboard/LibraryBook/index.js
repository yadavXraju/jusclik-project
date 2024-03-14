import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, Box, useMediaQuery } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
// import { useNavigate } from 'react-router';

const BookDetailPieChart = () => {
  // const navigate = useNavigate();
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');
 


  const chartData = {
    series: [200, 100, 110, 105, 137, 56, 76, 176, 58, 45],
    chart: {
      type: 'pie',
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      formatter: function (val) {

          return [ val.toFixed(0) + '%'];
 
          // return [opts.w.config.series[opts.seriesIndex], val];
        
      },
    },
    labels: [
      'Available',
      'Issued',
      'Widthraw',
      'Damaged',
      'Binding',
      'Not Available',
      'Lost & Paid',
      'Lost/Missing',
      'Lost by Student',
      'Outdated',
    ],
    colors: [
      '#4C88BE',
      '#9FCCE9',
      '#1162A4',
      '#6EB2C9',
      '#2DA2CD',
      '#1470B1',
      '#A7CFD9',
      '#ADD9E9',
      '#6FB2CC',
      '#61ACAF',
    ],
    responsive: [
      {
        breakpoint: 768,
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

  const totalBooks = chartData.series.reduce((total, currentValue) => total + currentValue, 0);

  return (
    <>
      <Paper spacing={gridSpacing} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)' }}>
        <Grid sx={{ padding: '24px 24px 22px 24px' }}>
          <Typography variant="h2" style={HeadingCss}>
            Book Detail
          </Typography>
        </Grid>

        <Grid className="attandance-graph" style={{ display: 'flex', flexDirection: 'column', padding: '0 20px', alignItems: isMobile ? 'center' : 'auto' }}>
          <ApexCharts options={chartData} series={chartData.series} type="pie" height={isMediumDesktop ? 200 : 380} />
        </Grid>

        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="body1">Total Books: {totalBooks}</Typography>
        </Box>
      </Paper>
    </>
  );
};

export default BookDetailPieChart;
