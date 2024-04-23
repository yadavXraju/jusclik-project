import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery, Divider, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/common-section/dashboard-css/CommonCss';


const LeadbySource = () => {

  const isMobile = useMediaQuery('(max-width: 767px)');

  const source = [
    { id: '1', source: "Google", color: "#2196f3" ,data:"5"},
    { id: '2', source: "Website", color: "#4caf50",data:"3" },
    { id: '3', source: "Cold Emailing", color: "#f44336",data:"5" },
    { id: '4', source: "Social Media", color: "#ff9800",data:"2" },
    { id: '5', source: "Recommendation", color: "#9c27b0",data:"5" },

  ];

  const chartData = {
    series: [
      { name: 'Google', data: [5] },
      { name: 'Website', data: [3] },
      { name: 'Cold Emailing', data: [5] },
      { name: 'Social Media', data: [2] },
      { name: 'Recommendation', data: [5] }
    ],
    chart: {
      type: 'bar',
      stacked: true,
      height: '10px',
      toolbar: {
        show: false // Remove grid lines
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '70%',
        borderRadius: 5,
        columnWidth: '40px',
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Lead Status'], // Dummy category since it's a stacked chart
      labels: {
        show: false // Hide labels
      }
      
    },
    yaxis: {
      labels: {
        show: false // Hide labels
      }
    },
    grid: {
      show: false,
    },
    legend: {
        show:false,
    },
    colors: ['#2196f3', '#4caf50', '#f44336', '#ff9800', '#9c27b0'] // Custom colors
  };

  return (
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
      {/* Heading */}
      <Grid
        sx={{
          padding: '24px 24px 0 24px',
          background: '#f9f9fb',
          borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
          borderRadius: '12px 12px 0px 0',
        }}
      >
        <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
          Lead Sources
        </Typography>
      </Grid>

      {/* Content */}
      <Grid
        sx={{
          display: 'flex',
          flexDirection:'column',
          paddingBottom: isMobile ? '10px' : '0px',
        }}
      >
        {/* Chart */}
        <Grid lg={12} md={12} sm={12} xs={12} >
          <ApexCharts options={chartData} series={chartData.series} type="bar" height='70px' />
        </Grid>
        {/* Divider */}
        <Divider orientation="horizontal" />
        {/* Source */}
        <Grid  sx={{padding:"10px 0px"}}>
          {source.map(item => (
            <Grid key={item.id} sx={{ display: 'flex', alignItems: 'center' ,justifyContent:"space-between",padding:" 10px"}}>
              <Typography variant="body1" sx={{fontSize:"18px",fontWeight:'600',color:"#000"}}>{item.source}[{item.data}]</Typography>
              <Box sx={{ height: "10px", width: "10px", background: item.color, marginLeft: '10px' }}></Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LeadbySource;
