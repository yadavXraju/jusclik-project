import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ProgressAttendance from './ProgressAttendance';
import Leaves from './Leaves';

export default function BasicDateCalendar() {
  return (
    <>
    <ProgressAttendance/>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DateCalendar />
    </LocalizationProvider>
    <Leaves/>
    </>
  );
}