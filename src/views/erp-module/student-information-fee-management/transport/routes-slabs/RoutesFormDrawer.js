// ======= Page Owner Vikash =========
// ======= Return Routes Form Drawer =========
import React, { useState } from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, Tab, Tabs } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TransportRoutes from './TransportRoutes';
import Stoppage from './Stoppage';
import BottomNavbar from 'components/BottomNavbar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const RoutesFormDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const [tabValue, setTabValue] = useState(0); // State for controlling tabs

  const tabs = ['Transport Routes', 'Stoppage'];
  const tabLength = tabs.length; 

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Add Route
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { sm: '100vw', md: 820 }, height: '100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Route & Stoppage</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* Tabs for switching between TransportRoutes and Stoppage */}
            <Tabs value={tabValue} onChange={handleTabChange} sx={{borderBottom:'1px solid #ccc'}} variant="scrollable" aria-label="Route tabs">
              {tabs.map((label, index) => (
                // <Tab key={index} label={label} />
                <Tab
                  sx={{padding:'12px 8px', margin:'0px 10px 0px 0px'}}
                  key={index}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{padding:'5px', border: `1px solid ${tabValue === index ? '#2196f3' : '#ccc'}`, borderRadius:'50%', width:'29px', marginRight:'5px'}}>{index + 1}</span>
                      {label}
                      { <KeyboardArrowRightIcon />}
                    </Box>
                  }
                />
              ))}
            </Tabs>
            {/* Tab panels based on selected tab */}
            <Box sx={{ mt: 1 }}>
              {tabValue === 0 && <TransportRoutes />}
              {tabValue === 1 && <Stoppage />}
            </Box>
          </Box>
        </Box>
        
        <BottomNavbar
          tabPageLength={tabLength}
          value={tabValue}
          setValue={setTabValue}
          customStyle={{ width: { sm: '100vw', md: '42%' }, bottom: '0', borderRadius: '1px' }}
        />
      </Drawer>
    </>
  );
};

export default RoutesFormDrawer;








// import React, { useState } from 'react';
// import useDrawer from 'hooks/useDrawer';
// import Drawer from '@mui/material/Drawer';
// import { Button, Typography, Box } from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import TransportRoutes from './TransportRoutes';
// import Stoppage from './Stoppage';
// //import BottomNavbar from '../../student-master/admission/admission-common-section/bottom-navbar';
// import BottomNavbar from 'components/BottomNavbar';
// // import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import ParamStepper from 'components/tabs/Stepper';

// const RoutesFormDrawer = () => {
//   const { anchor, toggleDrawer } = useDrawer();
//   const [tabValue, setTabValue] = useState(0); // State for controlling tabs

//   // const tabs = ['Transport Routes', 'Stoppage'];
//   // const tabLength = tabs.length; 

//   // const handleTabChange = (event, newValue) => {
//   //   setTabValue(newValue);
//   // };

//     const tabPage = [
//     {
//       id: 1,
//       name: 'Transport Routes',
//       value: '1',
//       component: TransportRoutes
//     },
//     {
//       id: 2,
//       name: 'Stoppage',
//       value: '2',
//       component: Stoppage
//     }
//   ];
//   const tabLength = tabPage.length;

//   return (
//     <>
//       <Button onClick={toggleDrawer('right', true)} sx={{ mr: '8px' }} variant="outlined" startIcon={<AddOutlinedIcon />}>
//         Add Route
//       </Button>
//       <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
//         <Box sx={{ width: { sm: '100vw', md: 820 }, height: '100vh', padding: 2 }} role="presentation">
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
//             <Typography variant="h4">Add Route & Stoppage</Typography>
//             <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
//               Close
//             </Button>
//           </Box>
//           <Box>
//             {/* Tabs for switching between TransportRoutes and Stoppage */}
//             {/* <Tabs value={tabValue} onChange={handleTabChange} sx={{borderBottom:'1px solid #ccc'}} variant="scrollable" aria-label="Route tabs">
//               {tabs.map((label, index) => (
//                 // <Tab key={index} label={label} />
//                 <Tab
//                   sx={{padding:'12px 8px', margin:'0px 10px 0px 0px'}}
//                   key={index}
//                   label={
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <span style={{padding:'5px', border: `1px solid ${tabValue === index ? '#2196f3' : '#ccc'}`, borderRadius:'50%', width:'29px', marginRight:'5px'}}>{index + 1}</span>
//                       {label}
//                       { <KeyboardArrowRightIcon />}
//                     </Box>
//                   }
//                 />
//               ))}
//             </Tabs> */}
//             <ParamStepper variant={'scrollable'} tabPage={tabPage} numberShow={false} showBottomNav={false} iconShow={false} />
//             {/* Tab panels based on selected tab */}
//             {/* <Box sx={{ mt: 1 }}>
//               {tabValue === 0 && <TransportRoutes />}
//               {tabValue === 1 && <Stoppage />}
//             </Box> */}
//           </Box>
//         </Box>
        
//         <BottomNavbar
//           tabPageLength={tabLength}
//           value={tabValue}
//           setValue={setTabValue}
//           customStyle={{ width: { sm: '100vw', md: '42%' }, bottom: '0', borderRadius: '1px' }}
//         />
//       </Drawer>
//     </>
//   );
// };

// export default RoutesFormDrawer;
