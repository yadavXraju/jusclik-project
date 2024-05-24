// ======= Page Owner Vikash =========
// ======= Class Teacher Profile Tabs =========
import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MainCard from 'components/ui/cards/MainCard';
import { useTheme, useMediaQuery, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router';
import ClassTeacherCard from './ClassTeacherCard';
import DocumentTabs from 'views/erp-module/parent/dashboard/studentProfile/DocumentsTab';
import ClassTeacherAssets from './ClassTeacherAssets';
import TeacherCredentials from './Teacher-Credentials';
import TeacherProfileForm from './TeacherProfileForm';
import TeacherContactDetails from './TeacherContactDetails';



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
function ClassTeacherProfile() {
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
          <Tab aria-label="basic tabs example" label="Profile" {...a11yProps(0)} />
          <Tab aria-label="basic tabs example" label="Contact Details" {...a11yProps(1)} />
          <Tab aria-label="basic tabs example" label="Documents" {...a11yProps(2)} />
          <Tab aria-label="basic tabs example" label="Asset Allocation" {...a11yProps(3)} />
          <Tab aria-label="basic tabs example" label="Credentials" {...a11yProps(4)} />
        </Tabs>
      </Box>

      {/* Content of each tab panel */}
      <CustomTabPanel value={value} index={0}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
         <ClassTeacherCard/>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TeacherProfileForm/>
        </Grid>
      </Grid>
      </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TeacherContactDetails/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DocumentTabs/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       <ClassTeacherAssets/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       <TeacherCredentials/>
      </CustomTabPanel>
    </Box>
    </MainCard>
    </>
  );
}

// Export the component
export default ClassTeacherProfile;
