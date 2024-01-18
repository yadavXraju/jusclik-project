import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import MainCard from 'ui-component/cards/MainCard';
import { useTheme, useMediaQuery, Box, Typography } from '@mui/material';
import FeeDataTable from './Fee_table';


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
function Feetabs() {
  const [value, setValue] = useState(0);

  // Event handler for tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Render the tab section
  return (
    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', '@media (max-width:600px)': { marginBottom: '15px' } }}>
        {/* Tabs for navigation */}
        <Tabs value={value} variant="scrollable" onChange={handleChange}>
          <Tab aria-label="basic tabs example" label="School Fee" {...a11yProps(0)} />
          <Tab aria-label="basic tabs example" label="Transport" {...a11yProps(1)} />
          <Tab aria-label="basic tabs example" label="Donation" {...a11yProps(2)} />
          <Tab aria-label="basic tabs example" label="Activity" {...a11yProps(3)} />
        </Tabs>
      </Box>

      {/* Content of each tab panel */}
      <CustomTabPanel value={value} index={0}>
       <FeeDataTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        2
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       3
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       4
      </CustomTabPanel>
    </Box>
    
  );
}

// Export the component
export default Feetabs;
