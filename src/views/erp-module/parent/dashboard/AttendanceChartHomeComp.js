import React from 'react';
import ApexCharts from 'react-apexcharts';
import { present, absent } from './chart-data/AttandanceData';
import { Grid, Paper, Typography , Button , Box ,useMediaQuery  } from '@mui/material';
// import { gridSpacing } from 'store/constant';
import { HeadingCss , boxHeight} from '../../../common-section/dashboard-css/CommonCss';
import { useNavigate } from 'react-router';

const AttandanceChartHomeComp = () => {
const navigate = useNavigate();
const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
const isMobile = useMediaQuery('(max-width: 767px)');


  // const AttendanceBox = {
  //   display : 'flex',
  //   flexDirection: 'column',
  //   padding : '20px',
  //   paddingBottom:'0',
  //   alignItems: isMobile ? 'center' :'auto',
  // }
  const chartData = {
    series: [parseFloat(present), parseFloat(absent)],
    chart: {
      type: 'donut',
    },
    labels: ['Present', 'Absent'],
    colors: ['#61bb61d4', 'rgb(244, 67, 54)'],
    responsive: [{
      breakpoint: 768,
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
          <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid rgba(128, 128, 128, 0.25)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
        marginBottom: '20px', // Add some bottom margin for spacing
      }}
    >
              <Grid
        sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
        }}
      >
                    <Typography variant='h2' style={HeadingCss}>Attendance</Typography> 
              </Grid>

      
              <Grid sx={{ padding: '24px' }}style={boxHeight}>
                  <ApexCharts options={chartData} series={chartData.series} type="donut"  height={ isMediumDesktop ? 370 : 370} />
            

              <Box sx={{p:3, pt:0 , textAlign:'right' , marginTop: isMobile ? '2rem' : '0'}}>
                  <Button variant="contained" onClick={() => navigate('/parent/attendance')}>
                    View More
                  </Button>
              </Box>
              </Grid>
          </Paper>
       </>
  );
};

export default AttandanceChartHomeComp;


