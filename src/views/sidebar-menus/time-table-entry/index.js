import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MainCard from 'ui-component/cards/MainCard';
import { useTheme, useMediaQuery, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router';


// Custom component for rendering the content of each tab panel
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: isSmallScreen ? 1 : 3 }}>
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
function TimetableTab() {
  const [value, setValue] = useState(0); 
 // Get the location object from react-router-dom
 const location = useLocation();

 // Set the initial tab value from the state in the location object
 
 useEffect(() => {
  if (location.state && location.state.initialTab !== undefined) {
    setValue(location.state.initialTab);
  }
}, [location.state]);



  // const [value, setValue] = useState(0);

  // Event handler for tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // Render the tab section
  return (
    <>
      <MainCard >
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', '@media (max-width:600px)': { marginBottom: '15px' } }}>
        {/* Tabs for navigation */}
        <Tabs value={value} variant="scrollable" onChange={handleChange}>
          <Tab aria-label="basic tabs example" label="My Timetable" {...a11yProps(0)} />
          <Tab aria-label="basic tabs example" label="Class Timetable" {...a11yProps(1)} />
        </Tabs>
      </Box>

      {/* Content of each tab panel */}
      <CustomTabPanel value={value} index={0}>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        
      </CustomTabPanel>
    </Box>
    </MainCard>
    </>
  );
}

// Export the component
export default TimetableTab;
