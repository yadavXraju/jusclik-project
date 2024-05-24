import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery,Box} from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'components/dashboard-css/CommonCss';
// import WomanIcon from '@mui/icons-material/Woman';
const AttendanceChart = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');


  const chartData = {
    series: [60, 5,4,6],
    chart: {
      type: 'donut',
    },
    stroke: {
      width: 3,
    },

    dataLabels: {
      formatter: function (val) {
        return val.toFixed(0) + '%';
      },
    },
    labels: [
      'Present',
      'Absent',
      'Late Comer',
      'On Duty'
    
    ],
    // colors: [
    //   'rgb(42, 101, 191)',
    //   '#EE4A3D',
    //   '#F3DB3F',
    //   '#34A853',
   
    

    // ],
    colors: [
      '#1B1363',
      '#1B84FF',
      '#4AB8DD',
      '#57AFF4',
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
      offsetY: 10,
      itemDirection: 'row',
    },
  };
  return (
    <>
      <Paper
        spacing={gridSpacing}
        sx={{
          display: 'flex',
          borderRadius: '12px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgb(227, 227, 227)',
          boxShadow: '4px 4px 9px 2px #ddddddc2',
        }}
      >
        {/* ================================= heading  =================================  */}
        <Grid
          sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
          }}
        >
          <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
           Daily  Attendance
          </Typography>
        </Grid>

        {/* ================================= content  =================================  */}
        <Grid
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            paddingBottom: isMobile ? '10px' : '0px',
          }}
        >
          {/* =================================  chart =================================   */}
          <Grid lg={6} md={12} sm={12} xs={12} sx={{ borderRight: '1px solid rgb(227, 227, 227)' }}>
            <Grid
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: isMobile ? '0px' : '20px 20px 18px 20px',
                alignItems: isMobile ? 'center' : 'auto',
              }}
            >
              <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 200 : 320} />
            </Grid>
          </Grid>

          {/* =================================  book detail =================================   */}
          <Grid lg={6}  md={6} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems:"center",paddingLeft: isMobile?"20px": '100px', gap: '20px' }}>
              <Grid container spacing={0} sx={{display:"flex"}}>
              {/* detail left */}
                <Grid lg={12} item xs={12} md={12}>
                {/* avialable */}
                <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center",}}>
              
              
                <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[0]}}>
                </Box>
          
              <Typography variant='h5' className='labels'>{chartData.labels[0]}</Typography>
                </Box>
            {/* Issued */}
                <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
                <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[1]}}>
                </Box>
          
              <Typography variant='h5' className='labels'>{chartData.labels[1]}</Typography>
                </Box>
                        {/* Issued */}
                        <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[2]}}>
              </Box>
        
            <Typography variant='h5' className='labels'>{chartData.labels[2]}</Typography>
              </Box>
                                    {/* Issued */}
                                    <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[3]}}>
              </Box>
        
            <Typography variant='h5' className='labels'>{chartData.labels[3]}</Typography>
              </Box>
                                    {/* Issued */}
                                    <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[4]}}>
              </Box>
        
            <Typography variant='h5' className='labels'>{chartData.labels[4]}</Typography>
              </Box>
                </Grid>
              </Grid>
          

          </Grid>


        </Grid>
      </Paper>
    </>
  );
};

export default AttendanceChart;
