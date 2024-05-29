// PAGE OWNER: DAMANDEEP
import { Box, Button, Drawer, IconButton,  Tooltip, Typography } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CustomTextField from 'components/ui/custom-input/TextField';

export const AddTaskListDrawer = ({ toggleDrawer, state, tabsData, setTabsData }) => {
  const [taskGroupName, setTaskGroupName] = React.useState('');
  const [taskGroupDesc, setTaskGroupDesc] = React.useState('');

  const handleAdd = (e) => {
    const tabs = tabsData;
    tabs.push({ name: taskGroupName, description: taskGroupDesc });
    setTabsData(tabs);
    const closeDrawer = toggleDrawer('addTaskGroup', false);
    closeDrawer(e);
  };
  return (
    <>
      <Tooltip title="Add Task Group">
        <IconButton onClick={toggleDrawer('addTaskGroup', true)} id="addTaskGroup" sx={{ marginRight: '8px' }}>
          <AddOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Drawer anchor="right" open={state.addTaskGroup} onClose={toggleDrawer('addTaskGroup', false)}>
        {/* {form} */}
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Add Task Group</Typography>

            <Button onClick={toggleDrawer('addTaskGroup', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          {/* ========= import Initiate Employee Exit Form ========== */}
          <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 70px)', marginTop: '1rem' }}>
            <CustomTextField 
              label="Task List Name"
              sx={{ marginBottom: '1rem' }}
              onChange={(e) => {
                let groupName = e.target.value;
                setTaskGroupName(groupName);
              }}
            />

            <CustomTextField 
             label="Description"
             sx={{ marginBottom: '1rem' }}
             multiline={true}
             minRows={3}
             onChange={(e) => {
               let groupDesc = e.target.value;
               setTaskGroupDesc(groupDesc);
             }}
            />
            <Box sx={{ position: 'fixed', bottom: '10px', right: '10px' }}>
              <Button variant="outlined" color="primary" sx={{ marginRight: '10px' }}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" sx={{ marginRight: '15px' }} onClick={(e) => handleAdd(e)}>
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
