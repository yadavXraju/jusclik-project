import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography ,useMediaQuery  , Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
// import { useNavigate } from 'react-router';

const FeeCollection = () => {
// const navigate = useNavigate();
const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
const isMobile = useMediaQuery('(max-width: 767px)');


  const AttendanceBox = {
    display : 'flex',
    flexDirection: 'column',
    padding : '0 20px 8px 20px',
    // paddingBottom:'0',
    alignItems: isMobile ? 'center' :'auto',
  }
  const chartData = {
    series: [5000, 1500],
    chart: {
      type: 'pie',
    },
    labels: ['Cash', 'Demand Draft'],
    colors: ['rgb(94, 53, 177)', 'rgb(30, 136, 229)'],
    legend: {
      show: false, // Hide legends
    },
    responsive: [{
      breakpoint: 768,
      options: {
        chart: {
          width: '100%',
        },
        // legend: {
        //   position: 'bottom',
        // },
      },
    }],
    // legend: {
    //   fontSize: '16px',
    //   colors: ['#99a1b7'],
    //   fontWeight:'600'
    // },
  };
  // <Box sx={{ padding: '24px 24px 0 24px' , background:'#f9f9fb' , borderBottom:'1px solid rgba(128, 128, 128, 0.25)'}}>
  return (
       <>
          <Paper spacing={gridSpacing}  sx={{ display:'flex' ,borderRadius:'12px', flexDirection:'column' , justifyContent :'space-between' , border:'1px solid rgb(227, 227, 227)' ,boxShadow: '4px 4px 9px 2px #ddddddc2', }}>
              <Grid sx={{ padding: '24px 24px 0 24px' , background:'#f9f9fb' , borderBottom:'1px solid rgba(128, 128, 128, 0.25)' , borderRadius:'12px 12px 0px 0'}} >
                    <Typography variant='h2' style={{...HeadingCss , border:'none'}}>fee collection</Typography> 
              </Grid>

                    <Grid sx={{display:'flex'}}>

                            <Grid lg={6} sx={{borderRight:'1px solid rgb(227, 227, 227)'}}>
                                <Grid  style={AttendanceBox} >
                                    <ApexCharts options={chartData} series={chartData.series} type="pie"  height={ isMediumDesktop ? 200 : 340} />
                                </Grid>
                          </Grid>


                          <Grid lg={6} sx={{display:'flex' , justifyContent:'center' , flexDirection:'column' , paddingLeft:'40px' , gap:'20px'}}>

                              {/* cash */}
                               <Box sx={{display:'flex', flexDirection:'column'}}>
                                  <Typography variant='h4' sx={{color:'rgb(94, 53, 177)',fontSize:'28px'}}>76.9%</Typography>
                                  <Typography variant='h4' >Cash </Typography>
                              </Box>

                               {/* demand draft */} 
                               <Box sx={{display:'flex', flexDirection:'column'}}>
                                <Typography variant='h4' sx={{color:'rgb(30, 136, 229)',fontSize:'28px'}}>23.1%</Typography>
                                <Typography variant='h4' >Demand Draft</Typography>
                              </Box>
                              
                          </Grid>

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


