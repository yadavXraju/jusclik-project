// import React, { useState } from 'react';
// import Drawer from '@mui/material/Drawer';
// import { Button, Typography, Box } from '@mui/material';
// import DrawerAddTransaction from './DrawerAddTransaction'; // Import the content of the drawer

// const DrawerTransaction = ({ buttonLabel, drawerTitle }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Button to toggle the drawer */}
//       <Button onClick={toggleDrawer} variant="outlined">
//         {buttonLabel}
//       </Button>
      
//       {/* Drawer component */}
//       <Drawer anchor={'right'} open={isOpen} onClose={toggleDrawer}>
//         <Box sx={{ width: { xs: '100%', sm: 1100 }, padding: 2 }} role="presentation">
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
//             <Typography variant="h4">{drawerTitle}</Typography>
//             <Button onClick={toggleDrawer} sx={{ alignSelf: 'flex-end' }}>
//               Close
//             </Button> 
//           </Box> 
          
//           {/* Content of the drawer */}
//           <DrawerAddTransaction />
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default DrawerTransaction;
