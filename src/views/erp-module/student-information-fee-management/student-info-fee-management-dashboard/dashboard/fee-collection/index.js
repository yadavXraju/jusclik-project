import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

const FeeCollection = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const chartData = {
    series: [5000, 4000],
    chart: {
      type: 'donut',
    },
    labels: ['Cash', 'Demand Draft'],
    colors: ['rgb(94, 53, 177)', 'rgb(30, 136, 229)'],
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '100%',
          },
        },
      },
    ],
  };

  // for calculate the amount of cash and demand draft
  const calculateAmount = (value) => {
    return value.toFixed(0);
  };

  const cashAmount = calculateAmount(chartData.series[0], chartData.series.reduce((acc, cur) => acc + cur, 0));
  const draftAmount = calculateAmount(chartData.series[1], chartData.series.reduce((acc, cur) => acc + cur, 0));

  return (
    <>
      <Paper spacing={gridSpacing} sx={{ display: 'flex', borderRadius: '12px', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)', boxShadow: '4px 4px 9px 2px #ddddddc2' }}>

        {/* ================================= heading  =================================  */}
        <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>fee collection</Typography>
        </Grid>

       {/* ================================= content  =================================  */}
        <Grid sx={{ display: 'flex' }}>

          {/* =================================  chart =================================   */}

          <Grid lg={6} sx={{ borderRight: '1px solid rgb(227, 227, 227)' }}>
            <Grid style={{ display: 'flex', flexDirection: 'column', padding: '0 20px 8px 20px', alignItems: isMobile ? 'center' : 'auto' }}>
              <ApexCharts options={chartData} series={chartData.series} type="donut" height={isMediumDesktop ? 200 : 310} />
            </Grid>
          </Grid>


            {/* =================================  cash and demand draft =================================   */}

          <Grid lg={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: '40px', gap: '20px' }}>

            {/* cash */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h4' sx={{ color: 'rgb(94, 53, 177)', fontSize: '28px' }}>₹ {cashAmount}</Typography>
              <Typography variant='h4'>Cash</Typography>
            </Box>

            {/* demand draft */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h4' sx={{ color: 'rgb(30, 136, 229)', fontSize: '28px' }}>₹ {draftAmount}</Typography>
              <Typography variant='h4'>Demand Draft</Typography>
            </Box>

          </Grid>

        </Grid>
      </Paper>
    </>
  );
};

export default FeeCollection;
