import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MainCard from 'ui-component/cards/MainCard';
import BasicList from './Timetablelist';
import TestList from './Test';
import { Box, Typography } from '@mui/material';
import { getCurrentDay } from 'utils/dateUtils';
import Thursday from './Thursday';
import Friday from './Friday';

// Custom component for rendering the content of each tab panel
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Function to generate accessibility props for each tab
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Main component for rendering the tab section
function Timetable() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(getCurrentDay());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainCard title="Timetable" sx={{ '.MuiCardContent-root': { padding: 0 } }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
              <Tab
                key={day}
                style={{ minWidth: '10%', padding: '10px' }}
                aria-label={day}
                label={day}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <BasicList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <BasicList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TestList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Thursday />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Friday/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <BasicList />
        </CustomTabPanel>
      </Box>
    </MainCard>
  );
}

export default Timetable;
