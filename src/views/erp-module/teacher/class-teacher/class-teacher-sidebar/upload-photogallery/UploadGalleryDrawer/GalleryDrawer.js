// import * as React from 'react';
// import { Box, Button, Grid, Drawer, Typography } from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
// import CreateNewDetails from './CreateNewDetails';

// export default function GalleryDrawer() {
//   const [state, setState] = React.useState({
//     right: false
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   // const isMobile = window.innerWidth < 600;

//   const form = (
//     <Box
//       sx={{ width: {xs:'100vw', sm:'650px'}, padding: 2 }} // Adjust width as needed for larger screens
//       role="presentation"
//     >
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
//         <Typography variant='h4'>Upload Photo Gallery</Typography>
//         <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
//           <CancelTwoToneIcon />
//           Close
//         </Button>
//       </Box>
//       <Grid>
//         <CreateNewDetails />
//       </Grid>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>
//         Create New Gallery
//       </Button>
//       <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
//         {form}
//       </Drawer>
//     </div>
//   );
// }


import React from 'react'
import withParamDrawer from 'components/withParamDrawer';
import CreateNewDetails from './CreateNewDetails';
const NewParamDrawer=withParamDrawer(CreateNewDetails);
function GalleryDrawer() {
  return (
    <div>
      <NewParamDrawer buttonLabel='Upload Photo Gallery' drawerTitle='Upload Photo Gallery' />
    </div>
  )
}

export default GalleryDrawer;