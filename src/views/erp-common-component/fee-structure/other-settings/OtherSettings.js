import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

// Sample data representing the quarters
const data = [
  {
    id: '1',
    content: 'Activate fee schedule for quarter 1'
  },
  {
    id: '2',
    content: 'Activate fee schedule for quarter 2'
  },
  {
    id: '3',
    content: 'Activate fee schedule for quarter 3'
  },
  {
    id: '4',
    content: 'Activate fee schedule for quarter 4'
  },
];

const OtherSettings = () => {
  // State to manage the state of switches for each quarter
  const [switches, setSwitches] = useState({
    quarter1: false,
    quarter2: false,
    quarter3: false,
    quarter4: false,
  });

  // Function to handle switch toggling
  const handleChange = (key) => (event) => {
    // Update the state of switches based on the key (quarter) and the checked state of the Switch component
    setSwitches({ ...switches, [key]: event.target.checked });
  };

  // Logging the state of each switch for debugging purposes
//   console.log(` Quater 1 : ${switches.quarter1 }, Quater 2 : ${switches.quarter2}, Quater 3 : ${switches.quarter3}, Quater 4 : ${switches.quarter4}`);

  return (
    // Grid container to hold all the Switch components
    <Grid container spacing={2} sx={{ padding: '24px', margin: '0', gap: '20px' }}>
      {data.map((item) => (
        // Grid item for each quarter's Switch and label
        <Grid component={Paper} elevation={2} lg={3} key={item.id} sx={{ border: '1px solid #3641525c', borderRadius: '12px', padding: '10px 24px 24px 24px' }}>
          <FormGroup>
            {/* 
              Switch component:
              - Dynamically set the checked state based on the current quarter's state
              - Dynamically set the onChange handler based on the current quarter
              - Set aria-label for accessibility
            */}
            <Switch
              checked={switches[`quarter${item.id}`]}  // Determine whether the switch is on or off for this quarter
              onChange={handleChange(`quarter${item.id}`)} // Handle the change event for this quarter's switch
              inputProps={{ 'aria-label': `Switch quarter ${item.id}` }} // Accessibility label
            />
          </FormGroup>
          {/* Display the content for each quarter */}
          <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>{item.content}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default OtherSettings;
