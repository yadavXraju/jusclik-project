import React from 'react';
import Chart from 'react-apexcharts';
import { HeadingCss } from 'components/dashboard-css/CommonCss';
import { Grid, Typography, Box, Divider } from '@mui/material';

const CommonStackedChart = ({ ChartSeries, StackedChartTitle ,StackedBarColor ,StackedChartXCategories  }) => {
  // Function to calculate the sum of data for each product
  const calculatetotalclaim = () => {
    return ChartSeries.reduce((total, series) => {
      return total + series.data.reduce((sum, data) => sum + data, 0);
    }, 0);
  };

  // Calculate the total data for all products
  const totalclaim = calculatetotalclaim();

  // Find the product with the highest sum of data
  const highestProduct = ChartSeries.reduce(
    (highest, series) => {
      const seriesTotal = series.data.reduce((sum, data) => sum + data, 0);
      return seriesTotal > highest.total ? { name: series.name, total: seriesTotal } : highest;
    },
    { name: '', total: 0 }
  );

  // Find the product with the lowest sum of data
  const lowestProduct = ChartSeries.reduce(
    (lowest, series) => {
      const seriesTotal = series.data.reduce((sum, data) => sum + data, 0);
      return seriesTotal < lowest.total || lowest.total === 0 ? { name: series.name, total: seriesTotal } : lowest;
    },
    { name: '', total: 0 }
  );

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '42%',
        borderRadius: 5,
        dataLabels: {
          position: 'top'
        }
      }
    },
    xaxis: {
      categories:StackedChartXCategories 
    },
    legend: {
      position: 'top',
      offsetY: 15
    },
    fill: {
      opacity: 1
    },
    grid: {
      show: false // Hide the background horizontal lines
    },
    series: ChartSeries,
    colors: StackedBarColor
  };

  const StackedChartDetails = [
    { label: 'TOTAL CLAIM', value: `₹ ${totalclaim}` },
    { label: 'HIGHEST CLAIMED CATEGORY', value: highestProduct.name },
    { label: 'LOWEST CLAIMED CATEGORY', value: lowestProduct.name }
  ];

  return (
    <>
      <Grid
        sx={{
          padding: '24px 24px 0 24px',
          background: '#f9f9fb',
          borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
          borderRadius: '12px 12px 0px 0',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
          {StackedChartTitle}
        </Typography>
      </Grid>
      <Chart options={options} series={options.series} type="bar" height={350} />
      <Divider sx={{ paddingTop: '0.5rem' }} />
      <Box sx={{ padding: '0rem 2rem' }}>
        <Typography variant="h5" sx={{ paddingBottom: '0.5rem', paddingTop: '0.5rem' }}>
          Insights
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: '0.5rem 2rem' }}>
        {StackedChartDetails.map((item, index) => (
          <Grid item lg={4} key={index}>
            <Typography variant="body" sx={{ fontSize: '14px' }}>
              {item.label}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {item.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CommonStackedChart;
