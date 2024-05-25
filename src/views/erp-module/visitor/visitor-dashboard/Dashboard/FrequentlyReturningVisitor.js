// sangeeta
import React from 'react'
import {  Grid , Typography , Box ,Divider , Paper } from '@mui/material'
import { HeadingCss , boxHeight , subTitle , subtitle2 } from 'views/dashboard/Default/dashboard-css/CommonCss'
import { gridSpacing } from 'store/constant';
import MainCard from 'components/ui/cards/MainCard';
import Chart from 'react-apexcharts';
import { boxHeight , HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';

// ============ last thirty visitor start
// dummy data sangeeta
export const FrequentlyReturningVisitorList = [
    {
       id:1,
       name:'AVINASH ARYAN',
       visitTimes : '88',
       mobileNo : '9644347100',
    },
  
    {
        id:2,
        name:'Rajeev Chauhan',
        visitTimes : '70',
        mobileNo : '9644347900',
     },
  
  
     {
        id:3,
        name:'Himesh Mehta',
        visitTimes : '58',
        mobileNo : '9646747100',
     },
  
  
     {
        id:4,
        name:'Darshan Bhandari',
        visitTimes : '40',
        mobileNo : '9644308100',
     },
  
  
     {
        id:5,
        name:'Aman Rawat',
        visitTimes : '89',
        mobileNo : '9654347600',
     },
  
  
     {
        id:6,
        name:'Rahul Singh',
        visitTimes : '78',
        mobileNo : '9674347100',
     },
  
  
     {
        id:7,
        name:'Aditya Panwar',
        visitTimes : '50',
        mobileNo : '9644347550',
     },
  
  
     {
        id:8,
        name:'Dinesh Rana',
        visitTimes : '38',
        mobileNo : '9644347980',
     },
  
  
     {
        id:9,
        name:'Mukesh Thakur',
        visitTimes : '58',
        mobileNo : '9644347980',
     },
  
  
     {
        id:10,
        name:'Sumit Singh',
        visitTimes : '48',
        mobileNo : '9644347980',
     },
  
     {
        id:11,
        name:'Hitesh Bisht',
        visitTimes : '65',
        mobileNo : '9644347764',
     },
  ]
  
export function LastThirtyDayVisitor() {
  
      const options = {
          series: [{
            name: "Visitors",
            data: [2, 4 , 3] // Placeholder data
          }],
          chart: {
            type: 'bar',
            zoom: {
              enabled: false
            },
            fontFamily: 'Plus Jakarta Sans, sans-serif', 
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          xaxis: {
            categories: ['January 20', 'February 5' ,'February 7' ]
          },
          legend: {
            labels: {
              colors: 'blue !important' 
            }
          }
        };
    return (
      <>
  
         <Paper spacing={gridSpacing} style={boxHeight} className='scrollbar' >
            <Grid sx={{padding:'24px'}}>
                  <Typography variant='h2' style={HeadingCss}>VISITORS OF LAST 30 DAYS</Typography> 
            </Grid>
  
  
            <Grid className='attandance-graph'  >
                <Chart options={options} series={options.series} type="bar" height={400} />
            </Grid>
  
           
         </Paper>
  
  
      </>
    );
  }
// ============ last thirty visitor end

const FrequentlyReturningVisitor = () => {
  return (
    <>
       <MainCard  style={boxHeight} className='scrollbar' > 
          <Grid container spacing={gridSpacing}>
             <Grid item xs={12} sx={{mb:3}}>
                <Grid  alignContent="center" justifyContent="space-between">

                    <Grid item sx={{mb:3}}>
                        <Typography variant='h2' style={HeadingCss}> Frequently Returning Visitors</Typography> 
                    </Grid>

                    {/* mapping data */}
                    {FrequentlyReturningVisitorList.map((item , index)=>(
                        <>
                            <Grid spacing={gridSpacing}  key={index} sx={{display:'flex' , justifyContent:'space-between'}}>
                                {/* name and mobile num */}
                                <Grid sx={{display:'flex', flexDirection:'column'}}>
                                    {/* this box contian name */}
                                    <Box> 
                                        <Typography variant="h3" style={subTitle}>
                                        {item.name}
                                        </Typography>
                                    </Box>

                                    {/* this box contiane mobile no */}
                                    <Box> 
                                        <Typography variant="h3" style={subtitle2}>
                                        {item.mobileNo}
                                        </Typography>
                                    </Box>
                                </Grid>

                            {/* visits time and mobile */}

                                <Grid sx={{display:'flex', flexDirection:'column'}}>
                                    {/* this box contains how many time vistor visits  */}
                                    <Box> 
                                        <Typography variant="h3" style={subTitle}>
                                        {item.visitTimes} Times
                                        </Typography>
                                    </Box>

                                    {/* mobile no */}
                                    <Box> 
                                        <Typography variant="h3" style={subtitle2}>
                                        Mobile
                                        </Typography>
                                    </Box>
                                </Grid>
    
                            </Grid>

                            <Divider sx={{ my: 1.5 , color:'1px solid #80808024'}} />
                        </>
                        
                    ))}
        
                </Grid>
             </Grid>
           </Grid>
       </MainCard> 

   </>
  )
}

export default FrequentlyReturningVisitor