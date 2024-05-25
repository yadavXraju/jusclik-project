// ownedby ------------- sangeeta

import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Grid, Paper, Typography, useMediaQuery, Divider, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';


const LeadbySource = () => {

  const isMobile = useMediaQuery('(max-width: 767px)');

  const source = [
    { id: '1', source: "Google", color: "#2196f3" ,data:"5",percentage:"45%"},
    { id: '2', source: "Website", color: "#4caf50",data:"3",percentage:"35%" },
    { id: '3', source: "Cold Emailing", color: "#f44336",data:"5",percentage:"45%" },
    { id: '4', source: "Social Media", color: "#ff9800",data:"2",percentage:"25%" },
    { id: '5', source: "Recommendation", color: "#9c27b0",data:"5",percentage:"45%" },
    { id: '6', source: "LinkedIN", color: "#1B1363",data:"5",percentage:"45%" },
    { id: '7', source: "Recommendation", color: "#57AFF4",data:"5",percentage:"45%" }
  ];



  const chartData = {
    series: [
      { name: 'Google', data: [5] },
      { name: 'Website', data: [3] },
      { name: 'Cold Emailing', data: [5] },
      { name: 'Social Media', data: [2] },
      { name: 'Recommendation', data: [5] },
      { name: 'LinkedIN', data: [5] },
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
    colors: ['#2196f3', '#4caf50', '#f44336', '#ff9800', '#9c27b0','#1B1363','#57AFF4'] // Custom colors
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
      <ParamWidgetHeader title='Lead Sources' />

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
        <Grid  sx={{padding:"10px 0px",    height:'333px',
          overflow:"auto",}}>
          {source.map((item, index) => (
            <React.Fragment key={item.id}>
              <Grid sx={{ display: 'flex', alignItems: 'center' ,justifyContent:"space-between",padding:" 10px"}}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                  <Box sx={{ height: "10px", width: "10px", border:`2px solid ${item.color}`, marginLeft: '20px',marginRight:"10px" }}></Box>
                  <Typography variant="body1" sx={{fontSize:"16px",fontWeight:'500',color:"#000"}}>{item.source}</Typography>
                </Box>
              
                <Grid>
                  <Typography variant="body1" sx={{fontSize:"16px",fontWeight:'400',color:"#000"}}>[{item.data}]   {item.percentage}</Typography>
                </Grid>
              </Grid>
              {index !== source.length - 1 && <Divider sx={{width:"90%",margin:"auto"}}/>}
            </React.Fragment>
          ))}
        </Grid>
        {/* Divider */}
        <Divider sx={{width:"90%",margin:"auto"}}/>
      </Grid>
    </Paper>
  );
};

export default LeadbySource;
