import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

// Function to get a random number within a range
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Simulated asynchronous function with abort capability
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs();

// Custom component to display days with different styles based on presence data
function ServerDay(props) {
  const { day, outsideCurrentMonth, presenceData, ...other } = props;
  const isSunday = day.day() === 0; // Sunday check

  const isPresent = presenceData[day.format('YYYY-MM-DD')] === 'present';
  const isAbsent = presenceData[day.format('YYYY-MM-DD')] === 'absent';

  const dayStyle = {
    border: isSunday ? 'none' : isPresent ? '2px solid green' : isAbsent ? '2px solid red' : 'none',
    borderRadius: '50%',
    boxSizing: 'border-box',
  };

  return (
    <PickersDay
      {...other}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
      style={dayStyle}
    />
  );
}

// Main component
export default function CalendarMonthly() {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  // Sample presence data for each day
  const initialPresenceData = {
    '2024-01-01': 'absent',
    '2024-01-02': 'present',
    '2024-01-03': 'absent',
    '2024-01-05':'present',
    '2024-01-06':'present',
    '2024-01-08':'present',
    '2024-01-09':'present',
    '2024-01-11':'present',
    '2024-01-10':'present',
    '2024-01-12':'present','2024-01-13':'present','2024-01-16':'present','2024-01-17':'present','2024-01-18':'present',
    '2024-01-19':'present','2024-01-20':'present'
  };

  const [presenceData, setPresenceData] = React.useState(initialPresenceData);

  // Function to fetch highlighted days and update the state
  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  // Initial fetch on component mount
  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    return () => requestAbortController.current?.abort();
  }, []);

  // Function to handle month change, with abort capability
  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  // Use setPresenceData somewhere in your code
  React.useEffect(() => {
    // For example, you can update the presenceData here based on some condition
    setPresenceData((prevData) => ({
      ...prevData,
      '2024-01-04': 'present', // Update the presenceData as needed
    }));
  }, []);

  // Render the calendar component
  return (
    <Grid item xs={12} sm={6} md={5} lg={4}>
      <Paper sx={{ height: '525px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <Typography variant='h3' sx={{ mb: 4 }}>
            Monthly Calendar
          </Typography>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={initialValue}
            loading={isLoading}
            onMonthChange={handleMonthChange}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: (dayProps) => (
                <ServerDay
                  {...dayProps}
                  presenceData={presenceData}
                  isPresent={highlightedDays.includes(dayProps.day.date())}
                />
              ),
            }}
          />
        </LocalizationProvider>
        <Grid item sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'red', marginRight: '4px', fontSize: '1.5em' }}>•</span> Absent
          </Typography>
          <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
            <span style={{ color: 'green', marginRight: '4px', fontSize: '1.5em' }}>•</span> Present
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}
