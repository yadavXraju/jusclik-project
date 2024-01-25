import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Grid from '@mui/material/Grid';

const CalendarAtt = () => {
  // Dummy data for present and absent dates
  const presentDates = ['2024-01-10', '2024-01-15','2024-01-1','2024-01-4','2024-01-17'];
  const absentDates = ['2024-01-05', '2024-01-20','2024-01-09','2024-01-24','2024-01-23'];

  const shouldDisableDate = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return presentDates.includes(formattedDate) || absentDates.includes(formattedDate);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ height: '525px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <Typography variant='h3' sx={{ mb: 4 }}>
            Monthly Calendar
          </Typography>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            shouldDisableDate={shouldDisableDate}
          />
        </LocalizationProvider>
      </Paper>
    </Grid>
  );
};

export default CalendarAtt;
