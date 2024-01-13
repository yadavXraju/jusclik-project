import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function CustomTabs({ value, onChange }) {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <Tabs value={value} onChange={onChange}>
      {days.map((day, index) => (
        <Tab
          key={day}
          style={{ minWidth: '10%', padding: '10px' }}
          aria-label={day}
          label={day}
          {...a11yProps(index)}
          id={value === index ? 'active' : null}
        />
      ))}
    </Tabs>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default CustomTabs;
