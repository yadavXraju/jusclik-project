import React from 'react';
import { Grid, Paper, Typography,   useMediaQuery  } from '@mui/material';
import { gridSpacing } from 'store/constant';
import timeTableData from 'views/sidebar-menus/timetable/TimeTableData';
import { HeadingCss , boxHeight, } from './dashboard-css/CommonCss';
import './dashboard-css/Overflow.css'



const TimeTableHome = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isSmallMobile = useMediaQuery('(max-width: 500px)');


   // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
   const currentDay = new Date().getDay();
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const currentDayName = daysOfWeek[currentDay];
 
   // Get the schedule for the current day
   const currentDaySchedule = timeTableData[currentDayName];
 
   if (!currentDaySchedule) {
     return <div>No schedule available for {currentDayName}.</div>;
   }


   const timeTableHeader = {
     display: 'flex',
     gap: '16px' , 
     flexDirection: isMobile ? 'column' : 'row'  ,
      textAlign: 'left',
   }


  return (
    <Grid spacing={gridSpacing} sx={{border:'1px solid #80808026', borderRadius:'8px'}} style={boxHeight} className='scrollbar'>
      <Grid item component={Paper} lg={12} md={12} sm={12} xs={12} sx={{ textAlign: 'right', p: 0, display: 'flex', flexDirection: 'column', }}>
      <Typography variant='h2' sx={{ textAlign: 'left' ,p:3}} style={HeadingCss}>today Timetable</Typography>

         {/* header sec start */}
         <Grid container sx={{ borderBottom: '1px solid #80808040;' , padding:'10px 24px'}} >

            <Grid item lg={4} md={4} sm={4} xs={4} style={timeTableHeader}>
                    <Typography variant='span'   sx={{fontSize:'18px'}} >Time</Typography>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4} style={timeTableHeader} >
                    <Typography variant='span'   sx={{fontSize:'18px'}} >Period</Typography>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4} style={timeTableHeader} >
                    <Typography variant='span'  sx={{fontSize:'18px'}}>Teacher</Typography>
                </Grid>
          </Grid>
          {/* header section end */}

          {currentDaySchedule.map((scheduleItem) => ( 
          <Grid container sx={{ textAlign: 'left', display: 'flex', padding:'13px 24px',
          backgroundColor: scheduleItem.id === null ? '#8080801a' : 'transparent',}} key={scheduleItem.id}>
          
          {/* time */}
            <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex' , flexDirection: isMobile ? 'column' : 'row'  , flex: isSmallMobile ? '0 0 25%' : 'auto' , }} >
              <Typography variant='h5' sx={{fontSize:isMobile ? '14px' : '15px' }}>{scheduleItem.time}</Typography>
            </Grid>


            {/* period  */}

            {scheduleItem.period !== null ? (

              // if period is not  null then  print period and subject

              <Grid item lg={4} md={4} sm={4} xs={4} 
              sx={{ display: 'flex',
               gap: isMobile ? '1px' : '16px' , 
               flexDirection: isMobile ? 'column' : 'row'  , 
               flex: isSmallMobile ? '0 0 40%' : 'auto' ,
               }}>

                <Typography variant='body2' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:isMobile ? '14px' : '16px'  }}>Period {scheduleItem.period} :</Typography>


                <Typography variant='h5'  sx={{fontSize:isMobile ? '14px' : '14px' , color: '#99a1b7', display:'flex', alignItems:'center' }}>
                  <span>{scheduleItem.subject}</span>
                </Typography>
              </Grid>
            ) 
            

            // if period is null then subject will be printing in place of period
            : (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex',  flexDirection: isMobile ? 'column' : 'row'   , flex: isSmallMobile ? '0 0 40%' : 'auto' ,}}>
                <Typography variant='h5'  sx={{fontSize: isMobile ? '14px' : '14px' }}>
                <Typography variant='body2' sx={{ color: '#000', fontWeight: '500' , fontSize: isMobile ? '14px' : '16px'  }}>
                  {scheduleItem.subject}
                  </Typography>

                </Typography>
              </Grid>
            )}


             {/* if period is not null then teacher is printing */}
             
            {scheduleItem.period !== null && (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' , flexDirection: isMobile ? 'column' : 'row'  , flex: isSmallMobile ? '0 0 35%' : 'auto' , }}>
                <Typography variant='h5' sx={{fontSize: isMobile ? '14px' : '14px'  ,}}>{scheduleItem.Teacher}</Typography>
              </Grid>
            )}

          </Grid>
         ))}



      </Grid>
    </Grid>
  );
}

export default TimeTableHome;
