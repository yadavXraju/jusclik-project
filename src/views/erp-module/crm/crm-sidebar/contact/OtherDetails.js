import React, { useState } from 'react';
import { Box } from '@mui/system';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';
import { Button } from '@mui/material';

function OtherDetails() {
  const [dateValue, setDateValue] = useState(); // State to hold the date value

  // Function to handle date changes
  const handleDateChange = (newDate) => {
    const formattedDate = newDate.format('DD-MM-YYYY'); // Format the date
    setDateValue(formattedDate); // Update the state with the formatted date
    console.log(formattedDate); // Log the formatted date to the console
  };

  return (
    <>
      <Box>
        {/* Render the ParameterizedDateComponent */}
        <ParameterizedDateComponent value={dateValue} label='dob' onChange={handleDateChange} />
      </Box>
      {/* Render the Save button */}
      <Button onClick={() => console.log(dateValue)}>Save</Button>
    </>
  );
}

export default OtherDetails;
