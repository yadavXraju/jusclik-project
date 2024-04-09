import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
// import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Grid from '@mui/material/Grid';

const CalendarAtt = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ height: '525px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <Typography variant='h3' sx={{ mb: 4 }}>
            Monthly Calendar
          </Typography>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDateCalendar shouldDisableDate={() => false} />
        </LocalizationProvider>
      </Paper>
    </Grid>
  );
};

export default CalendarAtt;
