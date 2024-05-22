// ======= Page Owner Vikash =========
// ======= Leave Application Donut Chart =========
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Button , Box ,useMediaQuery  } from '@mui/material';
import { gridSpacing } from 'store/constant';

const LeaveChart = () => {
//const navigate = useNavigate();
const isMobile = useMediaQuery('(max-width: 767px)');
const islaptop = useMediaQuery('(max-width: 1600px)');


  const AttendanceBox = {
    display : 'flex',
    flexDirection: 'column',
    padding : '20px',
    paddingBottom: islaptop ? '30px' : '0',
    alignItems: isMobile ? 'center' :'auto',
  }
  const chartData = {
    series: [parseFloat(40), parseFloat(60)],
    chart: {
      type: 'donut',
    },
    labels: ['Approved', 'Pending'],
    colors: ['#61bb61d4', 'rgb(244, 67, 54)'],
    responsive: [{
      breakpoint: 1600,
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
           
              <Grid className='attandance-graph' style={AttendanceBox} >
                  <ApexCharts options={chartData} series={chartData.series} type="donut" height={320} />
              </Grid>

              <Box sx={{p:3, pt:0 , textAlign:'right' , marginTop: isMobile ? '2rem' : '0'}}>
                  <Button variant="contained" >
                    View More
                  </Button>
              </Box>
          </Paper>
       </>
  );
};

export default LeaveChart;