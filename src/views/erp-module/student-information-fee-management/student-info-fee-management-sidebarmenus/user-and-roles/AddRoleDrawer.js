import React from 'react';
import useDrawer from 'hooks/useDrawer';
import Drawer from '@mui/material/Drawer';
import { Button, Typography, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
//import {TextField} from '@mui/material';
//import TextArea from 'antd/es/input/TextArea';
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
          <Box p={2}>
          <AddRoleStepper/>
          {/* <form>
          <Box sx={{ padding: 2 }}>
            <Box pb={2}>
            <TextField id="outlined-basic" label="Role Name" variant="outlined" fullWidth />
            </Box>
            <Box pb={2}>
              <Box p={0.5}>Description</Box>
              <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
            </Box>
        
            <Box>
                
                <RoleAccess/>
            </Box>
        
            <Box sx={{ padding: 2 }}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button sx={{ alignSelf: 'flex-end' }}>Cancal</Button>
            </Box>
          </Box>
        </form> */}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AddRoleDrawer;