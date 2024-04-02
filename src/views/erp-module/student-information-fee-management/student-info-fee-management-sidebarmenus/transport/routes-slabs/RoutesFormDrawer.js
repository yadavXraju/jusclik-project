import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, Tab, Tabs } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TransportRoutes from './TransportRoutes';
import Stoppage from './Stoppage';
//import BottomNavbar from '../../student-master/admission/admission-common-section/bottom-navbar';
import BottomNavbar from 'views/common-section/BottomNavbar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const RoutesFormDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const [tabValue, setTabValue] = useState(0); // State for controlling tabs

  const tabs = ['Transport Routes', 'Stoppage']; // Array of tab labels
  const tabLength = tabs.length; // Length of tabs array

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Add Route
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { sm: '100vw', md: 800 }, height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Route & Stoppage</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* Tabs for switching between TransportRoutes and Stoppage */}
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="Route tabs">
              {tabs.map((label, index) => (
                // <Tab key={index} label={label} />
                <Tab
                  key={index}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {label}
                      { <KeyboardArrowRightIcon />} {/* Add the Next icon if not the last tab */}
                    </Box>
                  }
                />
              ))}
            </Tabs>
            {/* Tab panels based on selected tab */}
            <Box sx={{ mt: 1 }}>
              {tabValue === 0 && <TransportRoutes />} {/* Render TransportRoutes if tabValue is 0 */}
              {tabValue === 1 && <Stoppage />} {/* Render Stoppage if tabValue is 1 */}
            </Box>
          </Box>
        </Box>+
        
        <BottomNavbar
          tabPageLength={tabLength}
          value={tabValue}
          setValue={setTabValue}
          customStyle={{ width: '42%', bottom: '0', borderRadius: '1px' }}
        />
      </Drawer>
    </>
  );
};

export default RoutesFormDrawer;





















// import React from 'react';
// import useDrawer from 'hooks/useDrawer';
// import Drawer from '@mui/material/Drawer';
// import { Button, Typography, Box } from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// // import RoutesStoppage from './RoutesStoppage';
// //import TransportRoutes from './TransportRoutes';


// const RoutesFormDrawer = () => {
//   // ========= call custom hook for toggle drawer ==========
//   const { anchor, toggleDrawer } = useDrawer();


//   return (
//     <>
//       <Button onClick={toggleDrawer('right', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
//       Add Route
//       </Button>
//       <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
//         <Box sx={{ width: { sm: '100vw', md: 900 }, height:'100vh', padding: 2 }} role="presentation">
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
//             <Typography variant="h4">Add Route & Stoppage</Typography>
//             <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
//               Close
//             </Button>
//           </Box>
//           <Box pt={3}>
//             {/* ========== Render Drawer Contant ============ */}
//             {/* <TransportRoutes/> */}
//             {/* <RoutesStoppage/> */}
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default RoutesFormDrawer;