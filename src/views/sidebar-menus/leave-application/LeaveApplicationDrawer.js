import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import useDrawer from 'hooks/useDrawer';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box } from '@mui/system';
import LeaveApplicationDrawerContent from './LeaveApplicationDrawerContent';
import { Typography } from '@mui/material';


export default function LeaveDrawer() {
  const { anchor, toggleDrawer } = useDrawer();

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>
        Leave Application
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
      <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Request Leave</Typography>
          <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        <LeaveApplicationDrawerContent/>
      </Box>
        
      </Drawer>
    </div>
  );
}
