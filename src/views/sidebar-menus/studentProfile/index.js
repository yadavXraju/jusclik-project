// import React from 'react'

// const StudentProfile = () => {
//   return (
//     <div>Student Profile</div>
//   )
// }

// export default StudentProfile



// Import necessary dependencies from Material-UI
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MainCard from 'ui-component/cards/MainCard';
import { useTheme, useMediaQuery, Box, Typography } from '@mui/material';
import ProdileCard from './StudentProfile';
import Grid from '@mui/material/Grid';
import ProdileForm from './ProfileForm';


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
function Profile() {
  const [value, setValue] = useState(0);

  // Event handler for tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Render the tab section
  return (
    <MainCard title="Student Profile" >
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', '@media (max-width:600px)': { marginBottom: '15px' } }}>
        {/* Tabs for navigation */}
        <Tabs value={value} variant="scrollable" onChange={handleChange}>
          <Tab aria-label="basic tabs example" label="Primary" {...a11yProps(0)} />
          <Tab aria-label="basic tabs example" label="Transport" {...a11yProps(1)} />
          <Tab aria-label="basic tabs example" label="Father" {...a11yProps(2)} />
          <Tab aria-label="basic tabs example" label="Mother" {...a11yProps(3)} />
          <Tab aria-label="basic tabs example" label="Guardian" {...a11yProps(4)} />
        </Tabs>
      </Box>

      {/* Content of each tab panel */}
      <CustomTabPanel value={value} index={0}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
        <ProdileCard/>
        </Grid>
        <Grid item xs={12} sm={8}>
          <ProdileForm/>
        </Grid>
      </Grid>
    </Box>
      

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Tab Panal 2
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Tab Panal 6
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      Tab Panal 3
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      Tab Panal 4
      </CustomTabPanel>
    </Box>
    </MainCard>
  );
}

// Export the component
export default Profile;
