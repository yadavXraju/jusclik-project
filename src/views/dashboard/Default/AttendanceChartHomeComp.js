import React from 'react';
import ApexCharts from 'react-apexcharts';
import { present, absent } from './chart-data/AttandanceData';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';

const AttandanceChartHomeComp = () => {

  const AttendanceBox = {
    // height:'100%',
    // background:'#fff',
    display : 'flex',
    // justifyContent:'center',
    flexDirection: 'column',
    padding : '20px'
  }
  const chartData = {
    series: [parseFloat(present), parseFloat(absent)],
    chart: {
      type: 'donut',
    },
    labels: ['Present', 'Absent'],
    colors: ['rgb(76, 192, 193)', 'rgb(251, 107, 91)'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
    legend: {
      fontSize: '16px',
      colors: ['#99a1b7'],
      fontWeight:'600'
    },
  };

  return (
       <>
          <Paper spacing={gridSpacing}>
              <Grid sx={{padding:'24px'}}>
                    <Typography variant='h3' sx={{textTransform:'uppercase'}}>Attendance</Typography> 
              </Grid>

              <Divider/>

              <Grid className='attandance-graph' style={AttendanceBox}>
                  <ApexCharts options={chartData} series={chartData.series} type="donut" height={350} />
              </Grid>
          </Paper>
       </>
  );
};

export default AttandanceChartHomeComp;


