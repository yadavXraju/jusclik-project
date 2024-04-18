import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery} from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss';
import WomanIcon from '@mui/icons-material/Woman';
const AttendanceChart = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');


  const chartData = {
    series: [60, 10,8,3],
    chart: {
      type: 'pie',
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
              label: <WomanIcon/>,
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
      'Present',
      'Absent',
      'Late Comer',
      'On Duty'
    
    ],
    colors: [
      '#4C88BE',
      '#9FCCE9',
      '#1162A4',
      '#6EB2C9',

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
              <ApexCharts options={chartData} series={chartData.series} type="pie" height={isMediumDesktop ? 200 : 320} />
            </Grid>
          </Grid>

          {/* =================================  book detail =================================   */}

        </Grid>
      </Paper>
    </>
  );
};

export default AttendanceChart;
