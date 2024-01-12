import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MainCard from 'ui-component/cards/MainCard';
import BasicList from './Timetablelist';
import { Box, Typography } from '@mui/material';
import TestList from './Test';
import { getCurrentDay } from 'utils/dateUtils';

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
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Event handler for tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Render the tab section
  return (
    <MainCard title="Timetable" sx={{ '.MuiCardContent-root': { padding: 0 } }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {/* Tabs for navigation */}
          <Tabs value={value} onChange={handleChange}>
            <Tab style={{ minWidth: '10%', padding: '10px' }} aria-label="MON" label="MON" {...a11yProps(0)} />
            <Tab style={{ minWidth: '10%', padding: '10px' }} aria-label="TUE" label="TUE" {...a11yProps(1)} />
            <Tab style={{ minWidth: '10%', padding: '10px' }} aria-label="WED" label="WED" {...a11yProps(2)} />
            <Tab style={{ minWidth: '10%', padding: '10px' }} aria-label="THU" label="THU" {...a11yProps(3)} />
            <Tab style={{ minWidth: '10%', padding: '10px' }} aria-label="FRI" label="FRI" {...a11yProps(4)} />
            <Tab style={{ minWidth: '10%', padding: '10px' }} aria-label="SAT" label="SAT" {...a11yProps(5)} />
            {/* <Tab style={{ minWidth: '10%', padding: '10px' }} aria-label="SUN" label="SUN" {...a11yProps(6)} /> */}
          </Tabs>
        </Box>

        {/* Content of each tab panel */}
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
       <BasicList />
      <BasicList/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       <BasicList/>
       </CustomTabPanel>
       <CustomTabPanel value={value} index={5}>
       <BasicList/>
       </CustomTabPanel>
       {/* <CustomTabPanel value={value} index={6}>
       <BasicList/>
        Tab Panal 6
       </CustomTabPanel> */}
        
      </Box>
    </MainCard>
  );
}

// Export the component
export default Timetable;