import React from 'react';
import { Grid, Paper, Typography,   useMediaQuery  } from '@mui/material';
import { gridSpacing } from 'store/constant';
// import { Box } from '@mui/system';
// import { useNavigate } from 'react-router';
import timeTableData from 'views/sidebar-menus/timetable/TimeTableData';
import { HeadingCss , boxHeight } from './dashboard-css/CommonCss';
import './dashboard-css/Overflow.css'



const TimeTableHome = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  // const periodsToShow = 4;
  // const navigate = useNavigate();

   // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
   const currentDay = new Date().getDay();
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const currentDayName = daysOfWeek[currentDay];
 
   // Get the schedule for the current day
   const currentDaySchedule = timeTableData[currentDayName];
 
   if (!currentDaySchedule) {
     return <div>No schedule available for {currentDayName}.</div>;
   }




  return (
    <Grid spacing={gridSpacing} sx={{border:'1px solid #80808026', borderRadius:'8px'}} style={boxHeight} className='scrollbar'>
      <Grid item component={Paper} lg={12} md={12} sm={12} xs={12} sx={{ textAlign: 'right', p: 3, display: 'flex', flexDirection: 'column', gap: '37px' }}>
      <Typography variant='h2' sx={{ textAlign: 'left' ,}} style={HeadingCss}>today Timetable</Typography>

         {/* header sec start */}
         <Grid container sx={{ borderBottom: '1px solid #80808040;' , paddingBottom:'20px'}} >

            <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' , flexDirection: isMobile ? 'column' : 'row'  , textAlign: 'left'}} >
                    <Typography variant='span' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:'18px'  }}>Time</Typography>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' , flexDirection: isMobile ? 'column' : 'row'  ,textAlign: 'left',}} >
                    <Typography variant='span' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:'18px'  }}>Period</Typography>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' , flexDirection: isMobile ? 'column' : 'row'  ,textAlign: 'left',}} >
                    <Typography variant='span' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:'18px'  }}>Teacher</Typography>
                </Grid>
          </Grid>
          {/* header section end */}

          {currentDaySchedule.map((scheduleItem) => ( 
          <Grid container sx={{ textAlign: 'left', display: 'flex' , borderBottom: '1px solid #80808040;' , paddingBottom:'10px',}} key={scheduleItem.id}>
          
            <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex' , flexDirection: isMobile ? 'column' : 'row'  ,}} >
              <Typography variant='h5' sx={{fontSize:isMobile ? '14px' : '16px' }}>{scheduleItem.time}</Typography>
            </Grid>

            {scheduleItem.period !== null ? (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: isMobile ? '1px' : '16px' , flexDirection: isMobile ? 'column' : 'row'  , }}>
                <Typography variant='body2' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:isMobile ? '14px' : '16px'  }}>Period {scheduleItem.period} :</Typography>
                <Typography variant='h5'  sx={{fontSize:isMobile ? '14px' : '16px' }}>
                  <span>{scheduleItem.subject}</span>
                </Typography>
              </Grid>
            ) : (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex',  flexDirection: isMobile ? 'column' : 'row'  , }}>
                <Typography variant='h5'  sx={{fontSize: isMobile ? '14px' : '16px' }}>
                <Typography variant='body2' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize: isMobile ? '14px' : '16px'  }}>{scheduleItem.subject}</Typography>
                </Typography>
              </Grid>
            )}

            {scheduleItem.period !== null && (
              <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', gap: '16px' , flexDirection: isMobile ? 'column' : 'row'  , }}>
                <Typography variant='h5' sx={{fontSize: isMobile ? '14px' : '16px'  ,}}>{scheduleItem.Teacher}</Typography>
              </Grid>
            )}

          </Grid>
         ))}

      {/* <Box sx={{ }}>
        {periodsToShow < currentDaySchedule.length && (
          <Button variant="contained" onClick={() => navigate('/timetable')}>
            View More
          </Button>
        )}
      </Box> */}

      </Grid>
    </Grid>
  );
}

export default TimeTableHome;
