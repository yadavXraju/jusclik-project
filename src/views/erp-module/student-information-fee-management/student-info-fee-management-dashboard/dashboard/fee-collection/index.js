import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography ,useMediaQuery ,} from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

const FeeCollection = () => {
const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
const isMobile = useMediaQuery('(max-width: 767px)');


  const AttendanceBox = {
    display : 'flex',
    flexDirection: 'column',
    padding : '20px',
    paddingBottom:'18px',
    alignItems: isMobile ? 'center' :'auto',
  }
  const chartData = {
    series: [(5000), (1500)],
    chart: {
      type: 'donut',
    },
    labels: ['Cash', 'Demand Draft'],
    colors: ['rgb(30, 136, 229)', 'rgb(94, 53, 177)'],
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
          <Paper spacing={gridSpacing} sx={{display:'flex' , flexDirection:'column' , justifyContent :'space-between' , border:'1px solid rgb(227, 227, 227)',}}>
              <Grid sx={{padding:'24px' , paddingBottom:'0'}}>
                    <Typography variant='h2' style={HeadingCss}>Fee Collection</Typography> 
              </Grid>

      
              <Grid className='attandance-graph' style={AttendanceBox} >
                  <ApexCharts options={chartData} series={chartData.series} type="donut"  height={ isMediumDesktop ? 200 : 240} />
              </Grid>

              {/* <Box sx={{p:3, pt:0 , textAlign:'right' , marginTop: isMobile ? '2rem' : '0'}}>
                  <Button variant="contained" onClick={() => navigate('/parent/attendance')}>
                    View More
                  </Button>
              </Box> */}

          </Paper>
       </>
  );
};

export default FeeCollection;


