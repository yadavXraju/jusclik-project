// ======= Page Owner Vikash =========
// ======= Entry Page of Timetable =========
import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import timeTableData1 from './TimeTableData';
import useMediaQuery from '@mui/material/useMediaQuery';

const TimeTable = () => {
  const [value, setValue] = useState('Mon');
  const [timeTableData, setTimeTableData] = useState([]);
  const res2560 = useMediaQuery('(min-width:2000px)')
  let rem = null

  if (res2560){
    
   rem = '18rem'
    
  }

  useEffect(() => {
    const currentDay = new Date().getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setValue(daysOfWeek[currentDay]);

    // ========= function for get the data from TimeTableData ========
   const fetchData = async () => {
      try {
        const data = await timeTableData1;
        setTimeTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    const daySchedule = timeTableData[value];

    if (!daySchedule || daySchedule.length === 0) {
      return <Typography variant="h3">No schedule available for {value}.</Typography>;
    }

    return (
      <>

          
        {daySchedule.map((scheduleItem, index) => (
          <Grid container spacing={0.5} style={{ marginTop: '6px' }} key={index} >
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: scheduleItem.details.length === 0 ? '5px' : '10px', display: 'flex', lineHeight: '10px' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ p: 1, background: scheduleItem.details.length === 0 ? '#fffff' : '#ede7f6', color: scheduleItem.details.length === 0 ? 'green' : 'black'}}>
                    {scheduleItem.period}
                  </Box>
                </Typography>
                {scheduleItem.details.map((classInfo, classIndex) => (
                  <React.Fragment key={classIndex}>
                    <Typography variant="body1">
                      <Box sx={{ p: 1 }}>
                        <Box>{classInfo.subject}</Box>
                        <Box sx={{ fontSize: '.600rem', color: 'gray' }}>{classInfo.teacher}</Box>
                      </Box>
                    </Typography>
                    <Typography variant="body1" sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ p: 1 }}>{classInfo.time}</Box>
                    </Typography>
                  </React.Fragment>
                ))}
              </Paper>
            </Grid>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <>

     
      <Card sx={{ padding: { xs: 1, md: 3 }  }}>
      <Grid sx={{paddingRight:rem , paddingLeft:rem}}>
        <Typography sx={{ p: 2, borderBottom: '1px solid #ccc', fontSize: '1.3rem' }} variant="h5" component="div">
          Timetable
        </Typography>
        <div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs variant="scrollable" value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                <Tab style={{ minWidth: '10%', padding: '10px' }} value="Sunday" label="SUN" />
                <Tab style={{ minWidth: '10%', padding: '10px' }} value="Monday" label="MON" />
                <Tab style={{ minWidth: '10%', padding: '10px' }} value="Tuesday" label="TUE" />
                <Tab style={{ minWidth: '10%', padding: '10px' }} value="Wednesday" label="WED" />
                <Tab style={{ minWidth: '10%', padding: '10px' }} value="Thursday" label="THU" />
                <Tab style={{ minWidth: '10%', padding: '10px' }} value="Friday" label="FRI" />
                <Tab style={{ minWidth: '10%', padding: '10px' }} value="Saturday" label="SAT" />
              </Tabs>
            </Box>
          </Box>
          <Box sx={{ p: 1 }}>{renderTabContent()}</Box>
        </div>
        </Grid>
      </Card>

      
    </>
  );
};

export default TimeTable;
