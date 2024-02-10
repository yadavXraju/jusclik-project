import React, { useState } from 'react';
import {
  Box,
  Typography,
  ListItem,
  ListItemText,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import dayjs from 'dayjs';

export default function DateList() {
  const [selectedMonth, setSelectedMonth] = useState(dayjs());

  const handleMonthChange = (date) => {
    setSelectedMonth(date);
  };

  const generateDateList = () => {
    const startDate = selectedMonth.startOf('month');
    const endDate = selectedMonth.endOf('month');
    const dates = [];
    let currentDate = startDate;
    while (currentDate.isSameOrBefore(endDate, 'day')) {
      dates.push(currentDate);
      currentDate = currentDate.add(1, 'day');
    }
    return dates;
  };

  const formatDate = (date) => {
    return date.format('DD MMMM YYYY');
  };

  const renderDateList = () => {
    const dates = generateDateList();
    return (
      <Box>
        {dates.map((date) => (
          <ListItem key={date.format('YYYY-MM-DD')}>
            <ListItemText sx={{ flex: '0 0 70%', alignItems: 'center' }}>
              <Typography variant="h4" color="text.primary">
                {formatDate(date)}
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h4" color="text.primary">
                {date.format('dddd')}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </Box>
    );
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Month"
          openTo="month"
          views={['month', 'year']}
          value={selectedMonth}
          onChange={handleMonthChange}
          slots={{ openPickerIcon: CalendarMonthTwoToneIcon }}
        />
      </LocalizationProvider>
      {renderDateList()}
    </Box>
  );
}
