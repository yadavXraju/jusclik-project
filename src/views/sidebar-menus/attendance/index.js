import * as React from 'react';
import ProgressAttendance from './ProgressAttendance';
import AttendanceChart from './AttendanceChart';
import Leaves from './Leaves';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UrlPage from 'views/navigation-for-pages';
import CalendarAtt from '../assignments/CalendarAtt';

export default function BasicDateCalendar() {
  return(
    <>
    <UrlPage />
      <ProgressAttendance />
      <Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
         <CalendarAtt/>
          <Grid item xs={12} sm={6} md={8}>
            <AttendanceChart />
          </Grid>
        </Grid>
      </Box>
      <Leaves />
    </>
  );
}
