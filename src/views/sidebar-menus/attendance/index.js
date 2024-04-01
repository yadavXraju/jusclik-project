import * as React from 'react';
import ProgressAttendance from './ProgressAttendance';
import AttendanceChart from './AttendanceChart';
import Leaves from './Leaves';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CalendarMonthly from './NewCal'

export default function BasicDateCalendar() {
  return(
    <>
      <ProgressAttendance />
      <Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
         <CalendarMonthly/>
          <Grid item xs={12} sm={6} md={7} lg={8}>
            <AttendanceChart />
          </Grid>
        </Grid>
      </Box>
      <Leaves />
    </>
  );
}
