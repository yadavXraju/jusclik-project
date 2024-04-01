 import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box, Tooltip } from '@mui/material';
//import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import Stoppage from './Stoppage';


const RoutesManageDrawer = () => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();


  return (
    <>
     <Tooltip title="Manage">
     <SettingsTwoToneIcon  onClick={toggleDrawer('top', true)} />
     </Tooltip>
       
      {/* <Button onClick={toggleDrawer('right', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
      Add Slab
      </Button> */}
      <Drawer anchor={'top'} open={anchor.top} onClose={toggleDrawer('top', false)}>
        <Box sx={{width: '100%', height:'100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Manage Route</Typography>
            <Button onClick={toggleDrawer('top', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box pt={3}>
            {/* ========== Render Drawer Contant ============ */}
            <Stoppage/>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default RoutesManageDrawer;