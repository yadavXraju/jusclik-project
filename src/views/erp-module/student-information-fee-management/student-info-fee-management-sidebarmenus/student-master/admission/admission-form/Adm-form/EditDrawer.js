import React from 'react';

import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';

import Mainform1 from './MainForm1';


const EditDrawer = ({anchor,toggleDrawer,currEditItem}) => {
  // ========= call custom hook for toggle drawer ==========
  


  return (
    <>
      <Drawer anchor={'top'} open={anchor.top} onClose={toggleDrawer('top', false)}>
        <Box sx={{ width: '100%', height:'100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Edit Student</Typography>
            <Button onClick={toggleDrawer('top', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box pt={3}>
            {/* ========== Render Drawer Contant ============ */}
            <Mainform1 currEditItem={currEditItem}/>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default EditDrawer;