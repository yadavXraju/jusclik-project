import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SlabForm from './SlabForm';


const SlabFormDrawer = () => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();


  return (
    <>
      <Button onClick={toggleDrawer('right', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
      Add Slab
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{width: { xs: '100vw', sm: 650 }, height:'100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Slab</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box pt={3}>
            {/* ========== Render Drawer Contant ============ */}
            <SlabForm/>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SlabFormDrawer;