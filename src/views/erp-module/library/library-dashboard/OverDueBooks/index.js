import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Box, useMediaQuery } from '@mui/material';
import Chart from 'react-apexcharts';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

const OverDueBook = ({ isLoading }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const FeeDefaulterData = {
    height: isMobile ? 300 : 380,
    type: 'bar',
    options: {
      chart: {
        id: 'bar-chart',
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: false },
        stroke: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: 'bottom', offsetX: 0, offsetY: 90 },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 5,
          marginBottom: 20, // Increase the gap between bars and x-axis label
          dataLabels: { 
            position: 'bottom',
            offsetY: 20, // Move labels away from bars
            color: '#ABB5E6',
            fontWeight: '400',
          },
        },
        dataLabels: { 
          position: isMobile ? 'top' : 'bottom', // Display labels at the top for small screens
          orientation: isMobile ? 'vertical' : 'horizontal', // Change orientation based on screen size
          offsetY: isMobile ? -20 : 20, // Adjust offset based on screen size
          style: {
            fontSize: isMobile ? '9px' : '12px', // Adjust font size based on screen size
            color: '#ABB5E6',
            fontWeight: '100',
          },
      },
    },
      xaxis: {
        type: 'category',
        categories: [
          'Nursery', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
        ],
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
        padding: {
          top: 20, // Increase padding between labels and axis
          bottom: 20, // Increase padding between bars and x-axis
        },
      },
      legend: {
        show: false,
      },
      fill: {
        type: 'solid',
        colors: ['#987ECD'],
        opacity: 0.9,
      },
      grid: { 
        show: false,
        margin:{
          bottom:"-30px"
        }
       
       },
    },
    series: [{ name: 'Overdue', data: [174, 140, 301, 134, 193, 348, 520, 512, 138, 472, 116, 234, 193] }],
  };
  
  const totalOverdue = FeeDefaulterData.series[0].data.reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)', borderRadius: '12px' }}>

          <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
            <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Overdue</Typography>
          </Grid>

          <Grid sx={{ padding: '0 20px' }} container spacing={gridSpacing} height={isMobile ? 'auto' : 410}>
            <Grid item xs={12}>
              <Chart {...FeeDefaulterData} />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center", paddingBottom: "5px" }}>
            <Typography variant="body1" color="initial">Total Overdue: {totalOverdue}</Typography>
          </Box>
        </Paper>
      )}
    </>
  );
};

OverDueBook.propTypes = {
  isLoading: PropTypes.bool,
};

export default OverDueBook;
