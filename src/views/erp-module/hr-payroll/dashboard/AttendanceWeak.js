import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery,
  //  Box 
  } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'components/dashboard/CommonCss';

const AttendanceweekChart = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');


  const attendanceData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      { name: 'Absent', data: [5, 3, 7,7,4 ] },
      { name: 'Present', data: [20, 18, 22,34,34] },
      { name: 'Late Comers', data: [3, 2, 4,2,3] }
    ]
  };
  const options = {
    chart: {
      type: 'bar',
      stacked: false,
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    grid: { 
        show: false,
      },
    xaxis: {
      categories: attendanceData.labels,
    },
    legend: {
      position: 'bottom',
    },
    fill: {
      opacity: 1
    },
    colors: ['#5E35B1', '#1E88E5', '#336BFF']
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
            Attendance
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
          <Grid lg={12} md={12} sm={12} xs={12} sx={{ borderRight: '1px solid rgb(227, 227, 227)' }}>
            <Grid
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: isMobile ? '0px' : '0',
                alignItems: isMobile ? 'center' : 'auto',
              }}
            >
              <ApexCharts options={options} series={attendanceData.series} type="bar" height={isMediumDesktop ? 200 : 320} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default AttendanceweekChart;
