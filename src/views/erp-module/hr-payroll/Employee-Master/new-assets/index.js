import React from 'react'
import { Grid, Typography , Box ,useMediaQuery , Button ,Paper } from '@mui/material';
import ParamCounters from 'components/dashboard/Counters';
import StackedChart from 'components/chart/StackedChart';



const Assets = () => {

  const Res1500= useMediaQuery('(max-width:1500px)')
  const Res1024 = useMediaQuery('(max-width:1024px)')
//Dummy Data
  const  CounterData = [
    {
      id: 1,
      counterTitle: 'Total Assets',
      icon: (
        <Box sx={{ height: '50px' }}>
          {/* Can add icon and anything  */}
        </Box>
      ),
      counterNumber: 332
    },
    {
      id: 2,
      icon: (
        <Box sx={{ height: '50px' }}>
        </Box>
      ),
      counterNumber: 46,
      counterTitle: 'Assets Available',
      button : <Button sx={{fontSize:Res1024?'12px':'14px'}}>View Assets</Button>
    },
    {
      id: 3,
      icon: (
        <Box sx={{ height: '50px' }}>
        </Box>
      ),
      counterNumber: 278,
      counterTitle: 'Assets Assigned',
      button:  <Button sx={{fontSize:Res1024?'12px':'14px'}}>View Employees</Button>
    },

    {
      id: 4,
      icon: (
        <Box sx={{ height: '50px' }}>
        </Box>
      ),
      counterNumber: 8,
      counterTitle: 'Assets Not Available',
      button:<Button sx={{fontSize:Res1024?'12px':'14px'}} >View Assets</Button>
    }
  ];

  //Dummy data
  const ChartSeries = [
    {
      name: 'Poor',
      data: [4,5,3,7,12,6,7,5,11,5]   
    },
    {
      name: 'Fair',                                  
      data: [9, 4, 5, 13, 8, 7, 14, 3, 11, 6]
    },
    {
      name: 'Good',
      data: [5, 10, 9, 14, 4, 8, 12, 6, 9, 4]
    },
    {
      name: 'Brand New',
      data: [11, 7, 5, 9, 13, 4, 8, 6, 12, 3]
    }
  ];


  //Dummy Data
  const StackedChartXCategories = [
    'Camera',
    'Desktop',
    'Head Phone',
    'Ipad',
    'Laptop',
    'Licenses',
    'Mac Mini',
    'Mobile Handset',
    'Monitor',
    'Mouse'

  ];
  
  const StackedBarColor = ['#0DB2A2', '#44A5C2', '#5C96A5', '#FFAE49'];
  return (
    <>
    
    <Grid sx={{ display: 'flex', height: '5vh', alignItems: 'center' }}>
        <Typography variant="h3" sx={{ paddingLeft: '0.1rem' }}>
          Asset Summary
        </Typography>
      </Grid>

      <Grid spacing={5} sx={{ paddingTop: '0.5rem' }}>
        <ParamCounters
          CounterData={CounterData}
          reverseOrderFlag={true}
          headingstyle={{ fontSize:Res1500?'12px':'14px' }}
          subheadingstyle={{ fontSize:Res1500?'18px':'28px' , paddingTop: '12px' , display:'flex' , justifyContent: 'space-between' }}
          customboxstyle={{ padding: '1rem', gap: '0px' , minWidth:'200px' }}
          counterstyle={{flex:'1'}}
        />
      </Grid>

      <Box sx={{paddingTop:'1.2rem'}}>
        <Paper>
          <StackedChart
            ChartSeries={ChartSeries}
            StackedChartTitle={'Asset Availability by Condition'}
            StackedBarColor={StackedBarColor}
            StackedChartXCategories={StackedChartXCategories}
            Yaxistitle={'Asset Count'}
            xaxistitle ={'Asset Category'}
            hidechartdetails={true}
            chartHeight='450'
            barWidth='35%'
            showgridlines ='true'
          />
        </Paper>
      </Box>
    </>
  )
}

export default Assets