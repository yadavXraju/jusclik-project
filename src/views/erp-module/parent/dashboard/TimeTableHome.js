import React, { useEffect, useState } from 'react';
import timeTableData1 from 'views/erp-module/parent/parent-sidebar/timetable/TimeTableData';
import { Typography, Grid, Paper, useMediaQuery } from '@mui/material';
import { HeadingCss, boxHeight } from 'views/common-section/dashboard-css/CommonCss';






const TimeTableHome = () => {
  const [timeTableData, setTimeTableData] = useState(null);

  // Media querys for responsiveness
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isSmallMobile = useMediaQuery('(max-width: 500px)');


  //  style for time table header

  const timeTableHeader = {
    display: 'flex',
    gap: '16px',
    flexDirection: isMobile ? 'column' : 'row',
    textAlign: 'left',
  }


  // fethcing data 

  useEffect(() => {
    const fetchData = async () => {
      const data = await timeTableData1;
      setTimeTableData(data);
    };

    fetchData();
  }, []);

  // Check if data has been fetched
  if (!timeTableData) {
    return <p>Loading...</p>;
  }

  // Get the current day
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Access the array for the current day
  const currentDayData = timeTableData[currentDay];

  // Check if data is available for the current day
  if (!currentDayData || currentDayData.length === 0) {
    return <p>No schedule available for {currentDay}</p>;
  }

  // Map over the array and display details
  return (
    <>

      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
          border: '1px solid rgba(128, 128, 128, 0.25)',
          boxShadow: '4px 4px 9px 2px #ddddddc2',
          marginBottom: '20px', // Add some bottom margin for spacing
        }}
      >
        <Grid
          sx={{
            // padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
          }}
        >
          <Typography variant='h2' sx={{ textAlign: 'left', p: 3 }} style={HeadingCss}>today Timetable</Typography>
        </Grid>
        <Grid style={boxHeight} >
          {/* header sec start */}
          <Grid container sx={{ borderBottom: '1px solid #80808040;', padding: '10px 24px' }} >


            <Grid item lg={3} md={3} sm={3} xs={3} style={timeTableHeader} >
              <Typography variant='span' sx={{ fontSize: isMobile ? '14px' : '18px' }} >Period</Typography>
            </Grid>

            <Grid item lg={3} md={3} sm={3} xs={3} style={timeTableHeader} >
              <Typography variant='span' sx={{ fontSize: isMobile ? '14px' : '18px' }} >Subject</Typography>
            </Grid>

            <Grid item lg={3} md={3} sm={3} xs={3} style={timeTableHeader} >
              <Typography variant='span' sx={{ fontSize: isMobile ? '14px' : '18px' }} >Teacher</Typography>
            </Grid>

            <Grid item lg={3} md={3} sm={3} xs={3} style={timeTableHeader}>
              <Typography variant='span' sx={{ fontSize: isMobile ? '14px' : '18px' }} >Time</Typography>
            </Grid>

          </Grid>
          {/* header section end */}



          {currentDayData.map((scheduleItem, index) => (
            <Grid container key={index}>

              {/* if period is Assembly or short break render only  period  cuz of bg color adjustment */}

              {scheduleItem.period === 'Assembly' || scheduleItem.period === 'Short Break'
                ?
                <Grid container sx={{ textAlign: 'left', display: 'flex', padding: '13px 24px', background: 'rgba(128, 128, 128, 0.1)' }}>
                  <Grid item lg={12} md={12} sm={12} xs={12}
                    sx={{
                      display: 'flex',
                      gap: isMobile ? '1px' : '16px',
                      flexDirection: isMobile ? 'column' : 'row',
                      flex: isSmallMobile ? '0 0 40%' : 'auto',
                    }}>
                    <Typography variant='body2' sx={{ color: 'green', fontWeight: '500', fontSize: isMobile ? '14px' : '16px', }}>
                      {scheduleItem.period}
                    </Typography>
                  </Grid>
                </Grid>

                //  else render all data  

                :

                <Grid container sx={{ textAlign: 'left', display: 'flex', padding: '13px 24px', }}>
                  <Grid item lg={3} md={3} sm={3} xs={3}
                    sx={{
                      display: 'flex',
                      gap: isMobile ? '1px' : '16px',
                      flexDirection: isMobile ? 'column' : 'row',
                      flex: isSmallMobile ? '0 0 40%' : 'auto',
                    }}>
                    <Typography variant='body2' sx={{ fontWeight: '500', fontSize: isMobile ? '14px' : '16px' }}>
                      {scheduleItem.period}
                    </Typography>
                  </Grid>


                  {scheduleItem.details.length > 0 ? (
                    <Grid item lg={9} md={9} sm={9} xs={9} >

                      {scheduleItem.details.map((detail, detailIndex) => (

                        <Grid key={detailIndex} sx={{ display: 'flex' }}>

                          <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flex: isSmallMobile ? '0 0 25%' : 'auto', }} >
                            {/* <Typography variant='h5' sx={{fontSize:isMobile ? '14px' : '15px' }}>{detail.time}</Typography> */}
                            <Typography variant='h5' sx={{ fontSize: isMobile ? '14px' : '14px', display: 'flex', alignItems: 'center' }}>
                              <span>{detail.subject}</span>
                            </Typography>
                          </Grid>

                          <Grid item lg={4} md={4} sm={4} xs={4}
                            sx={{ display: 'flex', gap: '16px', flexDirection: isMobile ? 'column' : 'row', flex: isSmallMobile ? '0 0 35%' : 'auto', }}>
                            <Typography variant='h5' sx={{ fontSize: isMobile ? '14px' : '14px', }}>{detail.teacher}</Typography>
                          </Grid>

                          <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flex: isSmallMobile ? '0 0 25%' : 'auto', }} >
                            <Typography variant='h5' sx={{ fontSize: isMobile ? '14px' : '15px' }}>{detail.time}</Typography>
                          </Grid>

                        </Grid>
                      ))}

                    </Grid>
                  ) : (
                    <p>  </p>
                  )}

                </Grid>



              }
              {/* map function for getting details  object*/}

            </Grid>
          ))}

        </Grid>
      </Paper>


    </>
  );
};

export default TimeTableHome;

