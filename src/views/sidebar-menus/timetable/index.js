import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import timeTableData from './TimeTableData';

const TimeTable = () => {
  const [value, setValue] = useState('Monday');

  useEffect(() => {
    const currentDay = new Date().getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setValue(daysOfWeek[currentDay]);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    const daySchedule = timeTableData[value];

    if (!daySchedule) {
      return null;
    }

    return (
      <div>
        {/* <h2>{value} Timetable</h2> */}
        {daySchedule.map((scheduleItem) => (
          <Grid container spacing={0.5} style={{ marginTop: '10px' }} key={scheduleItem.id}>
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: scheduleItem.id === null ? '5px' : '10px', display: 'flex',lineHeight: '10px',
          color: scheduleItem.id  === null ? 'green' : '#00000' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ p: 1 , background: scheduleItem.period === null ? '#fffff' : '#ede7f6'}}>{scheduleItem.period}</Box>
                </Typography>
                <Typography variant="body1">
                  <Box sx={{ p: 1 }}>
                    <Box>{scheduleItem.subject}</Box>
                    <Box sx={{ fontSize: '.600rem', color: 'gray' }}>{scheduleItem.Teacher}</Box>
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ marginLeft: 'auto', display: 'flex',alignItems: 'center' }}>
              <Box sx={{ p: 1 }}>{scheduleItem.time}</Box>
              </Typography>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="Sunday" label="Sunday" />
          <Tab value="Monday" label="Monday" />
          <Tab value="Tuesday" label="Tuesday" />
          <Tab value="Wednesday" label="Wednesday" />
          <Tab value="Thursday" label="Thursday" />
          <Tab value="Friday" label="Friday" />
          <Tab value="Saturday" label="Saturday" />
        </Tabs>
      </Box>

      {renderTabContent()}
    </div>
  );
};

export default TimeTable;