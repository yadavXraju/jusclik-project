import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

const BookDetailPieChart = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const chartData = {
    series: [200, 100, 110, 105, 137, 56, 76, 176, 58, 45],
    chart: {
      type: 'donut',
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Books',
              formatter: function () {
                return chartData.series.reduce((a, b) => a + b, 0).toFixed(0);
              },
            },
          },
        },
      },
    },
    dataLabels: {
      formatter: function (val) {
        return val.toFixed(0) + '%';
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
            width: '80%',
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
      fontWeight: '400',
      itemMargin: {
        vertical: 5,
      },
      markers: {
        width: 12,
        height: 12,
      },
      formatter: function (seriesName) {
        return seriesName;
      },
      offsetY: 10,
      itemDirection: 'row',
    },
  };

  return (
    <>
      <Paper elevation={3} spacing={gridSpacing} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)' }}>
        <Grid sx={{ padding: '24px 24px 22px 24px' }}>
          <Typography variant="h2" style={HeadingCss}>
            Book Detail
          </Typography>
        </Grid>

        <Grid className="attendance-graph" style={{ display: 'flex', flexDirection: 'column', padding: '0 20px 40px', alignItems: isMobile ? 'center' : 'auto' }}>
          <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 200 : 400} />
        
        </Grid>

        
      </Paper>
    </>
  );
};

export default BookDetailPieChart;
