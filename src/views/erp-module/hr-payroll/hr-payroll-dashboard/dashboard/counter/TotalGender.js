import React from 'react';
import ApexCharts from 'react-apexcharts';
import {  useMediaQuery, Box } from '@mui/material';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';


const TotalGender = () => {

    const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
    // const isMobile = useMediaQuery('(max-width: 767px)');
  
  // Sample data for the donut chart
  const chartData = {
    series: [200, 100],
    chart: {
      type: 'donut',
    },
    stroke: {
      width: 3,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false, 
            total: {
              show: false,
              label: 'Total Employee',
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
      'Male',
      'Female',
    ],
    colors: [
      '#4C88BE',
      '#9FCCE9',
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
      show:false,
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
    <Box style={{ position: 'relative', width: '300px', height: '300px' }}>
    <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 200 : 320} />

      <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',display:"flex" }}>
        <WomanIcon sx={{fontSize:"76px"}}/> <ManIcon sx={{fontSize:"76px"}}/>
      </Box>
    </Box>
  );
};

export default TotalGender;
