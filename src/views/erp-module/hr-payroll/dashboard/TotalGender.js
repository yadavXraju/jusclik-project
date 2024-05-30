// owned by sangeeta

import React from "react";
import ParamCounters from "components/dashboard/Counters";
import ApexCharts from 'react-apexcharts';
import {  useMediaQuery, Box, Grid, Typography, Paper } from '@mui/material';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import PeopleIcon from '@mui/icons-material/People';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

// ==========  total gender start
const TotalGender = () => {

    const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
    const isSmallDesktop = useMediaQuery('(max-width: 1440px)');
    const isTab = useMediaQuery('(max-width: 767px)');
  
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
    <Grid lg={7} md={12} style={{ position: 'relative',alignItems:"center", }}>
    <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 200 : 250} />

      <Box style={{ position: 'absolute', top: '50%', left: '50%', transform:isSmallDesktop?" translate(-45%, -92%)":isTab ?" translate(-45%, -75%)":"translate(-50%, -50%)",display:"flex" }}>
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


// ==========  total gender end

const iconStyles = {
    fontSize: '30px',
    display: 'flex',
};

const CounterData = [
    {
        id: 1,
        icon: <WomanIcon sx={{ ...iconStyles, color: '#17C653' }} />,
        counterNumber: '56' ,
        counterTitle: 'Total Female',
        backgroundColor:'#17c6533b',
    },
    {
        id: 2,
        icon: <ManIcon sx={{ ...iconStyles, color: '#1B84FF' }} />,
        counterNumber: 83,       
        counterTitle: 'Total Male',
        backgroundColor:'rgb(42 101 191 / 15%)',
    },
   


];
const CounterData2 = [

    {
        id: 3,
        icon: <PeopleIcon sx={{ ...iconStyles, color: '#A8CD9F' }} />,
        counterNumber: "25",
        counterTitle: 'Avrage Age ',
        backgroundColor:'#a8cd9f59',
    },
    {
        id: 4,
        icon: <SentimentVeryDissatisfiedIcon sx={{ ...iconStyles, color: '#EC1605' }} />,
        counterNumber: "11%",
        counterTitle: 'Absentieeism per month',
        backgroundColor:'#F1C3BF',
    },


];

const Counters = () => {


    return (
        <>
        <Grid container lg={12} spacing={2}>
         <Grid item lg={5} md={12} sm={12}>
         <TotalGender/>
         </Grid>
         <Grid item lg={7} md={12}  sm={12}>
           < Grid  sx={{mb:1}}>
           <ParamCounters CounterData={CounterData} />
           </Grid> 
           < Grid spacing={1} md={12}  sm={12}>
           <ParamCounters CounterData={CounterData2} />
           </Grid> 
        
         </Grid>
        </Grid>
      
       
        </>
    );
};

export default Counters;