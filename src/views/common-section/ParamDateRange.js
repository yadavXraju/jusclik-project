// ParamDateRangePicker.js
import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs'; // Import dayjs for date manipulation
import ParameterizedDateComponent from './ParamDateComponent';

const ParamDateRangePicker = ({ startDateValue, endDateValue, onStartDateChange, onEndDateChange, startLabel='', endLabel='' }) => {
  const [startDate, setStartDate] = useState(startDateValue);
  const [endDate, setEndDate] = useState(endDateValue);
  const endDateRef = useRef(null); // Ref for the end date input field

  // Function to handle start date change
  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (onStartDateChange) {
      onStartDateChange(date);
    }
    // Automatically focus on the end date input field after a short delay
    setTimeout(() => {
      if (endDateRef.current) {
        endDateRef.current.focus();
      }
    }, 100);
  };

  // Function to handle end date change
  const handleEndDateChange = (date) => {
    setEndDate(date);
    if (onEndDateChange) {
      onEndDateChange(date);
    }
  };

  // Function to calculate date range between start and end dates
  const calculateDateRange = () => {
    if (startDate && endDate) {
      const diffInDays = dayjs(endDate).diff(startDate, 'day');
      return diffInDays;
    }
    return null;
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ParameterizedDateComponent
          label={startLabel}
          value={startDate}
          onChange={handleStartDateChange}
        />

        <Box>-</Box>

        <ParameterizedDateComponent
          label={endLabel}
          value={endDate}
          onChange={handleEndDateChange}
          inputRef={endDateRef} // Assign the ref to the end date input field
        />
      </Box>
      <div>
        {startDate && endDate && (
          <p>Date Range: {calculateDateRange()} days</p>
        )}
      </div>
    </Box>
  );
};

export default ParamDateRangePicker;
















// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

//  const ParamDateRangePicker=({start,end})=>{
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangePicker']}>
//         <DateRangePicker localeText={{ start:start, end:end}} />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

// export default ParamDateRangePicker;