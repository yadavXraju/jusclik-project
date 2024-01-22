import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ProgressAttendance from './ProgressAttendance';
import AttendanceChart from './AttendanceChart';
import Leaves from './Leaves';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material';
import UrlPage from 'views/navigation-for-pages';

export default function BasicDateCalendar() {
  return (
    <>
    <UrlPage />
      <ProgressAttendance />
      <Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>

            <Paper sx={{ height: '525px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Grid item>
                <Typography variant='h3' sx={{mb:4}}>
                  Monthly Calendar
                </Typography>
              </Grid>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </Paper>
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
