import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ProgressAttendance from './ProgressAttendance';
import AttendanceChart from './AttendanceChart';
import Leaves from './Leaves';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function BasicDateCalendar() {
  return (
    <>
      <ProgressAttendance />
      <Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <AttendanceChart />
          </Grid>
        </Grid>
      </Box>
      <Leaves />
    </>
  );
}
