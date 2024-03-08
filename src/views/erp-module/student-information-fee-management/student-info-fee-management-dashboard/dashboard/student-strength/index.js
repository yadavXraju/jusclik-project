import React from 'react';
import Chart from 'react-apexcharts';
import { Paper, Grid, Typography , Box , Button , useMediaQuery} from '@mui/material';
import { boxHeight, HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import { gridSpacing } from 'store/constant';
import { useNavigate } from 'react-router';

export default function StudentStrength() {
const navigate = useNavigate();
const isMobile = useMediaQuery('(max-width: 767px)');

  const options = {
    series: [{
      name: "Boys",
      data: [12, 13, 15, 17, 11, 15, 11, 14, 13, 16, 15, 13, 10]
    }, {
      name: "Girls",
      data: [10, 12, 13, 12,15, 14, 13, 12, 14, 16, 13, 12, 11]
    }],
    chart: {
      height: 300,
      type: 'bar', // Keeping the chart type as 'bar'
      zoom: {
        enabled: false
      },
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Nursery', 'I', 'II', 'III', 'IV', 'V', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
    },
    legend: {
      labels: {
        colors: 'blue !important'
      }
    },
    colors: ['rgb(94, 53, 177)', 'rgb(30, 136, 229)'] // Custom colors for boys and girls bars
  };

  return (
    <Paper spacing={gridSpacing} style={boxHeight} className='scrollbar'>
      <Grid sx={{ padding: '24px' }}>
        <Typography variant='h2' style={HeadingCss}>STUDENTS STRENGTH</Typography>
      </Grid>

      <Grid className='attendance-graph'>
        <Chart options={options} series={options.series} type="bar" height={360} />
      </Grid>

      <Box sx={{p:3, pt:0 , textAlign:'right' , marginTop: isMobile ? '2rem' : '0'}}>
          <Button variant="contained" onClick={() => navigate('/parent/attendance')}>
            View More
          </Button>
      </Box>
    </Paper>
  );
}
