import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

const BookDetailPieChart = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const chartData = {
    series: [200, 100, 110, 105, 137, 56, 76, 176, 58, 45],
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
            show: true, 
            total: {
              show: true,
              label: 'Total Books',
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
      'Avialable',
      'Issued',
      'Widthraw',
      'Damaged',
      'Binding',
      'Not Avialable',
      'Lost & Paid',
      'Lost/Missing',
      'Lost by Student',
      'Outdated',
    ],
    colors: [
      '#4C88BE',
      '#9FCCE9',
      '#1162A4',
      '#6EB2C9',
      '#2DA2CD',
      '#1470B1',
      '#A7CFD9',
      '#ADD9E9',
      '#6FB2CC',
      '#61ACAF',
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
      <Paper spacing={gridSpacing} sx={{ display: 'flex', borderRadius: '12px', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)', boxShadow: '4px 4px 9px 2px #ddddddc2' }}>
        {/* ================================= heading  =================================  */}
        <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Total Books</Typography>
        </Grid>

        {/* ================================= content  =================================  */}
        <Grid sx={{ display: 'flex' }}>
          {/* =================================  chart =================================   */}
          <Grid lg={6} sx={{ borderRight: '1px solid rgb(227, 227, 227)' }}>
            <Grid style={{ display: 'flex', flexDirection: 'column', padding: '0 20px 8px 20px', alignItems: isMobile ? 'center' : 'auto' }}>
              <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 200 : 330} />
            </Grid>
          </Grid>

          {/* =================================  book detail =================================   */}
          <Grid lg={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: '40px', gap: '20px' }}>
              <Grid container spacing={0}>
              {/* detail left */}
                <Grid item xs={6}>
                {/* avialable */}
                <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
                <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[0]}}>
                </Box>
          
              <Typography variant='body1' className='labels'>{chartData.labels[0]}</Typography>
                </Box>
            {/* Issued */}
            <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
                <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[1]}}>
                </Box>
          
              <Typography variant='body1' className='labels'>{chartData.labels[1]}</Typography>
                </Box>
                        {/* Issued */}
                        <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[2]}}>
              </Box>
        
            <Typography variant='body1' className='labels'>{chartData.labels[2]}</Typography>
              </Box>
                                    {/* Issued */}
                                    <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[3]}}>
              </Box>
        
            <Typography variant='body1' className='labels'>{chartData.labels[3]}</Typography>
              </Box>
                                    {/* Issued */}
                                    <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[4]}}>
              </Box>
        
            <Typography variant='body1' className='labels'>{chartData.labels[4]}</Typography>
              </Box>
                </Grid>
                {/* detail right */}
                <Grid item xs={6}>
                                  {/*  */}
                                  <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[5]}}>
              </Box>
        
            <Typography variant='body1' className='labels'>{chartData.labels[5]}</Typography>
              </Box>
            {/*  */}
            <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[6]}}>
              </Box>
        
            <Typography variant='body1' className='labels'>{chartData.labels[6]}</Typography>
              </Box>
                   {/*  */}
                   <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[7]}}>
              </Box>
        
            <Typography variant='body1' className='labels'>{chartData.labels[7]}</Typography>
              </Box>
                   {/*  */}
                   <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[8]}}>
              </Box>
        
            <Typography variant='body1' className='labels'>{chartData.labels[8]}</Typography>
              </Box>
                   {/*  */}
                   <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:"center" }}>
              
              
              <Box sx={{width:"10px",height:"10px",borderRadius:"50%" ,marginRight:"15px",background:chartData.colors[9]}}>
              </Box>
        
            <Typography variant='body1' className='labels'>{chartData.labels[9]}</Typography>
              </Box>
                  </Grid>
              </Grid>
          

          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default BookDetailPieChart;
