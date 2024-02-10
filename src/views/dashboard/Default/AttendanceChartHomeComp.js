import React from 'react';
import ApexCharts from 'react-apexcharts';
import { present, absent } from './chart-data/AttandanceData';
import { Grid, Paper, Typography , Button , Box ,useMediaQuery  } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from './dashboard-css/CommonCss';
import { useNavigate } from 'react-router';

const AttandanceChartHomeComp = () => {
const navigate = useNavigate();
const isMobile = useMediaQuery('(max-width: 767px)');


  const AttendanceBox = {
    display : 'flex',
    flexDirection: 'column',
    padding : '20px',
    paddingBottom:'0',
    alignItems: isMobile ? 'center' :'auto',
  }
  const chartData = {
    series: [parseFloat(present), parseFloat(absent)],
    chart: {
      type: 'donut',
    },
    labels: ['Present', 'Absent'],
    colors: ['#61bb61d4', 'rgb(244, 67, 54)'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%',
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
                    <Typography variant='h2' style={HeadingCss}>Attendance</Typography> 
              </Grid>

      
              <Grid className='attandance-graph' style={AttendanceBox} >
                  <ApexCharts options={chartData} series={chartData.series} type="donut" height={370} />
              </Grid>

              <Box sx={{p:3, pt:0 , textAlign:'right' , marginTop: isMobile ? '2rem' : '0'}}>
                  <Button variant="contained" onClick={() => navigate('/parent/attendance')}>
                    View More
                  </Button>
              </Box>
          </Paper>
       </>
  );
};

export default AttandanceChartHomeComp;


