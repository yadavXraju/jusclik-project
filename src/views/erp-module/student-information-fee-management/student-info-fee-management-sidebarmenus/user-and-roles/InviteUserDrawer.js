import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {TextField} from '@mui/material';
import SelectList from 'views/common-section/ParamSelectList';
import { useState } from 'react';

const InviteUserDrawer = () => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();

  const [role, setrole] = useState('');
  const roleOptions = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Manager ', label: 'Manager' },  
    { value: 'senior manager', label: 'senior manager' },
  ];
  const roleChange = (event) => {
    setrole(event.target.value);
  };

  return (
    <>
      <Button onClick={toggleDrawer('right', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>
      Invite User
      </Button>
      <Drawer anchor={'right'} open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Invite User</Typography>
            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
            {/* ========== Render Drawer Contant Form ============ */}
          <form>
          <Box sx={{ padding: 2 }}>
            <Box pb={2}>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
            </Box>
            <Box pb={2}>
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
            </Box>
            <Box pb={2}>
            <TextField id="outlined-basic" label="Mobile" variant="outlined" fullWidth />
            </Box>
            <Box pb={2}>
            <SelectList label="Role" options={roleOptions} value={role} onChange={roleChange}/>
            </Box>
            <Box sx={{ padding: 2 }}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button sx={{ alignSelf: 'flex-end' }}>Cancal</Button>
            </Box>
          </Box>
        </form>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default InviteUserDrawer;
