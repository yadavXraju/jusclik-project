import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const TeacherTimeTable = ({ timetableData }) => {
  const [value, setValue] = useState('Monday');

   // ======== get the Current Day =============
  useEffect(() => {
    const currentDay = new Date().getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setValue(daysOfWeek[currentDay]);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    const daySchedule = timetableData[value];

    if (!daySchedule) {
      return null;
    }

    return (
      <>
        {daySchedule.map((scheduleItem) => (
          <Grid container style={{ marginTop: '6px' }} key={scheduleItem.id}>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                style={{
                  padding: scheduleItem.id === null ? '5px' : '10px',
                  display: 'flex',
                  lineHeight: '10px',
                  color: scheduleItem.id === null ? 'green' : '#00000'
                }}
              >
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ p: 1, background: scheduleItem.period === null ? '#fffff' : '#ede7f6' }}>{scheduleItem.period}</Box>
                </Typography>
                <Typography variant="body1">
                  <Box sx={{ p: 1 }}>
                   {scheduleItem.class ? scheduleItem.class : scheduleItem.Teacher}
                    <Box
                      sx={{
                        fontSize: scheduleItem.id === null ? '.875rem' : '.600rem',
                        color: scheduleItem.id === null ? 'green' : 'gray'
                      }}
                    >
                      {scheduleItem.subject}
                    </Box>
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ p: 1 }}>{scheduleItem.time}</Box>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <>
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
        <Box sx={{ p: 1, '& > div': { padding: 0 } }}>{renderTabContent()}</Box>
      </div>
    </>
  );
};

export default TeacherTimeTable;
