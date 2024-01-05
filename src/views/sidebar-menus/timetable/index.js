// import React from 'react'

// const TimeTable = () => {
//   return (
//     <TimeTable/>
    
//   )
// }

// export default TimeTable

// Import necessary dependencies from Material-UI
// import React, { useState } from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// //import GutterlessList from './Timetablelist';
// import MainCard from 'ui-component/cards/MainCard';




// // Custom component for rendering the content of each tab panel
// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// // Function to generate accessibility props for each tab
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// // Main component for rendering the tab section
// function Timetable() {
//   const [value, setValue] = useState(0);

//   // Event handler for tab change
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // Render the tab section
//   return (
//     <MainCard title="Timetable" >
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         {/* Tabs for navigation */}
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="MON" {...a11yProps(0)} />
//           <Tab label="TUE" {...a11yProps(1)} />
//           <Tab label="WED" {...a11yProps(2)} />
//           <Tab label="THU" {...a11yProps(3)} />
//           <Tab label="FRI" {...a11yProps(4)} />
//           <Tab label="SAT" {...a11yProps(5)} />
//           <Tab label="SUN" {...a11yProps(6)} />
//         </Tabs>
//       </Box>

//       {/* Content of each tab panel */}
//       <CustomTabPanel value={value} index={0}>
//         Item One
        
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         Item Three
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={3}>
//         Item For
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={4}>
//         Item Five
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={5}>
//         Item Six
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={6}>
//         Item Seven
//       </CustomTabPanel>
//     </Box>
//     </MainCard>
//   );
// }
// // Export the component
// export default Timetable;

// Import necessary dependencies from Material-UI
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import MainCard from 'ui-component/cards/MainCard';
import BasicList from './Timetablelist';
import { useTheme, useMediaQuery, Box, Typography } from '@mui/material';


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
function Timetable() {
  const [value, setValue] = useState(0);

  // Event handler for tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Render the tab section
  return (
    <MainCard title="Timetable" >
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {/* Tabs for navigation */}
        <Tabs value={value} onChange={handleChange}>
          <Tab style={{minWidth: "10%", padding: "10px"}} aria-label="basic tabs example" label="MON" {...a11yProps(0)} />
          <Tab style={{minWidth: "10%", padding: "10px"}} aria-label="basic tabs example" label="TUE" {...a11yProps(1)} />
          <Tab style={{minWidth: "10%", padding: "10px"}} aria-label="basic tabs example" label="WED" {...a11yProps(2)} />
          <Tab style={{minWidth: "10%", padding: "10px"}} aria-label="basic tabs example" label="THU" {...a11yProps(3)} />
          <Tab style={{minWidth: "10%", padding: "10px"}} aria-label="basic tabs example" label="FRI" {...a11yProps(4)} />
          <Tab style={{minWidth: "10%", padding: "10px"}} aria-label="basic tabs example" label="SAT" {...a11yProps(5)} />
          <Tab style={{minWidth: "10%", padding: "10px"}} aria-label="basic tabs example" label="SUN" {...a11yProps(6)} />
        </Tabs>
      </Box>

      {/* Content of each tab panel */}
      <CustomTabPanel value={value} index={0}>
      
        <BasicList/>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <BasicList/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Tab Panal 6
      {/* <BasicList/> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      Tab Panal 3
      {/* <BasicList/> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      Tab Panal 4
      <BasicList/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
      Tab Panal 5
      {/* <BasicList/> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
      {/* <BasicList/> */}
       Tab Panal 6
      </CustomTabPanel>
    </Box>
    </MainCard>
  );
}

// Export the component
export default Timetable;
