import React from 'react';
import ApexCharts from 'react-apexcharts';
import {  useMediaQuery, Box, Grid, Typography, Paper } from '@mui/material';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';


const TotalGender = () => {

    const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
    // const isMobile = useMediaQuery('(max-width: 767px)');
  
  // Sample data for the donut chart
  const chartData = {
    series: [300, 200],
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
      '#1E88E5',
      // '#ED2817',
      // "#34A853",
      "#5E35B1"
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
    <>
    <Paper sx={{padding:"21px"}}>
    <Grid Container sx={{display:"flex"}} lg={12}>
    <Grid lg={7} style={{ position: 'relative',alignItems:"center", }}>
    <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 200 : 250} />

      <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',display:"flex" }}>
        <WomanIcon sx={{fontSize:"76px" ,color:"#5E35B1",marginRight:"-40px"}}/> <ManIcon sx={{fontSize:"76px",color:"#1E88E5",marginRight:"10px"}}/>
      </Box>
    </Grid>  
    <Grid sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"baseline",paddingLeft:"30px"}} lg={5}>
  
      <Typography sx={{fontSize:"20px",fontWeight:"600",color:"#000"}}>Female</Typography>
      <Typography sx={{fontSize:"30px",fontWeight:"700",color:"#5E35B1"}}>{chartData.series[1]}</Typography>
      <Typography sx={{fontSize:"20px",fontWeight:"600",color:"#000",mt:1 ,paddingLeft:"60px"}}>Total Gender</Typography>
      <Typography sx={{fontSize:"30px",fontWeight:"700",color:"#00644d",mb:1,paddingLeft:"60px"}}>{chartData.series[0]+chartData.series[1]}</Typography>
      <Typography sx={{fontSize:"20px",fontWeight:"600",color:"#000"}}>Male</Typography>
      <Typography sx={{fontSize:"30px",fontWeight:"700",color:"#1E88E5"}}>{chartData.series[0]}</Typography>
    </Grid>
    </Grid >
    </Paper>
  
    </>
  );
};

export default TotalGender;