import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddRoleStepper from './AddRoleStepper';
//import RoleAccess from './RoleAccess';

const AddRoleDrawer = () => {
  const { anchor, toggleDrawer } = useDrawer();


  return (
    <>
      <Button onClick={toggleDrawer('top', true)} variant="outlined" startIcon={<AddOutlinedIcon />}>
      Add Role
      </Button>
      <Drawer anchor={'top'} open={anchor.top} onClose={toggleDrawer('top', false)}>
        <Box sx={{ width: '100%', height:'100vh', padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Role</Typography>
            <Button onClick={toggleDrawer('top', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box pt={2}>
          <AddRoleStepper/>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AddRoleDrawer;