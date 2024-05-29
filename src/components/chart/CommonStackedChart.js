// Page Owner - Kulwinder SIngh
 // Description : Apex Stacked Bar  Chart
import React from 'react';
import Chart from 'react-apexcharts';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';
import { Grid, Typography, Box, Divider , useMediaQuery } from '@mui/material';

const CommonStackedChart = ({ ChartSeries, StackedChartTitle, StackedBarColor, StackedChartXCategories ,Yaxistitle ,xaxistitle ,hidechartdetails ,chartHeight=350 ,barWidth='40%' ,showgridlines }) => {
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
        columnWidth: barWidth,
        borderRadius: 5,
        dataLabels: {
          position: 'top'
        }
      }
    },
    xaxis: {
      categories: StackedChartXCategories,
      title: {
        text:xaxistitle,
        style: {
          fontSize: '13px', // Adjust the font size as needed
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 600,
          color: '#a7a3a0'
        }
      },
    },

    yaxis: {
      title: {
        text:Yaxistitle,
        style: {
          fontSize: '13px', // Adjust the font size as needed
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 600,
          color: '#a7a3a0'
        }
      },

    },

 

    legend: {
      position: 'top',
      offsetY: 15
    },
    fill: {
      opacity: 1
    },
    grid: {
      show: showgridlines // Hide the background horizontal lines
    },
    series: ChartSeries,
    colors: StackedBarColor

    
  };

  const StackedChartDetails = [
    { label: 'TOTAL CLAIM', value: `₹ ${totalclaim}` },
    { label: 'HIGHEST CLAIMED CATEGORY', value: highestProduct.name },
    { label: 'LOWEST CLAIMED CATEGORY', value: lowestProduct.name }
  ];

  let labelStyle = {
    fontSize: '14px'
  };

  

  const isResponsive990 = useMediaQuery('(max-width:990px)');

  if (isResponsive990) {
    labelStyle = {
      fontSize: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };
  }


 

  return (
    <>
      <ParamWidgetHeader title={StackedChartTitle} />
      <Chart options={options} series={options.series} type="bar" height={chartHeight} />
     {!hidechartdetails && (<Grid>
      <Divider sx={{ paddingTop: '0.5rem' }} />
      <Box sx={{ padding: '0rem 2rem' }}>
        <Typography variant="h5" sx={{ paddingBottom: '0.5rem', paddingTop: '0.5rem' }}>
          Insights
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: '0.5rem 2rem' }}>
        {StackedChartDetails.map((item, index) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
            <Typography variant="body" sx={ labelStyle}>
              {item.label}
            </Typography>
            <Typography variant="h4" sx={{  ...labelStyle, fontWeight: 'bold', fontSize:isResponsive990?'14px':'16px'}}>
              {item.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
      </Grid>)} 
     
    </>
  );
};

export default CommonStackedChart;
