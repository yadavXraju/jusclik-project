// ======= Page Owner Vikash =========
// =======  Line Chart for Leaves ===========
import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'components/dashboard-css/CommonCss'

const LeaveConsumedChart = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const AttendanceBox = {
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile? "0 0":'0 20px',
    alignItems: isMobile ? 'center' : 'auto',
  };

  const ChartData = {
    series: [
      {
        name: 'Paid Leave',
        data: [0.5, 0.7, 0.8, 1.0, 1.2, 1.0, 0.8, 0.6, 0.5, 0.3, 0,1, 0.2, 0.4, 0.6, 0.8, 0.1, 1.2, 1.4, 1.2, 1.5, 1.5, 0.5, 1.0, 0.7, 1.4, 1.2, 1.5, 1.5, 1.2, 1.5, 1.5],
      },
      {
        name: 'Unpaid Leave',
        data: [0.3, 0.5, 0.8, 1.0, 1.2, 1.1, 1.2, 0.5, 1.0, 0.8, 1.4, 1.2, 1.4, 1.5, 0.5, 1.0, 0.8, 1.4, 1.2, 1.1, 1.5, 0.5, 1.0, 0.8, 1.4, 1.2, 1.3, 1.5, 1.2, 1.2, 1.5],
      },
    ],
    chart: {
      type: 'line',
      height: 300,
      stacked: true,
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        },
      },
      zoom: {
        enabled: false
      }
    },
 
    colors: ['#75BB75', '#ff5050'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'line',
      colors: ['#75BB75', '#ff5050'],
      opacity: 1,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize:'14px',
      margin:"20px"     
    },
    xaxis: {
      categories: ['May 01', '', '', 'May 04', '', '', 'May 07', '', '', 'May 10',
       'May 11', '', '', 'May 14', '', '', 'May 17', '', '', 'May 20', '',
        '', 'May 23', '', '', 'May 26', '', '', 'May 29', '', ''],
      labels: {
        style: {
          fontSize: '12px',
        },
      },
      
    },
    yaxis: {
      title: {
        text: 'Number of Leaves',
      },
      labels: {
        style: {
          fontSize: '14px',
        },
      },
      show: true,
    },
    grid:{
        show:false,
    }
  };

  return (
    <Paper spacing={gridSpacing} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgb(227, 227, 227)'}}>
   {/* ================================= heading ================================= */}
       <Grid sx={{ padding: '24px 24px 0 24px', background: '#f9f9fb', borderBottom: '1px solid rgba(128, 128, 128, 0.25)', borderRadius: '12px 12px 0px 0' }}>
          <Typography variant='h2' style={{ ...HeadingCss, border: 'none' }}>Leave Consumption Trend</Typography>
        </Grid>

       <Grid className="attendance-graph" style={AttendanceBox}>
          <ApexCharts options={ChartData} series={ChartData.series} type="line" height={isMediumDesktop ? 200 : 350} />
       </Grid>
    </Paper>
  );
};

export default LeaveConsumedChart;
