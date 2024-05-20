import { Box, Button, Drawer, IconButton, MenuItem, TextField, Typography } from '@mui/material';
import React from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
const EditTaskListDrawerContent = () => {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 70px)', marginTop: '1rem' }}>
      <TextField label="Task List Name" sx={{ marginBottom: '1rem' }} />
      <TextField label="Description" sx={{ marginBottom: '1rem' }} multiline={true} minRows={3} />
      <TextField select label="Copy Tasks From Existing Task List (Optional)" sx={{ marginBottom: '1rem' }}>
        {/* Dropdown options */}
        <MenuItem value="">None</MenuItem>
        {/* Add other dropdown options here */}
      </TextField>
      <Box sx={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        <Button variant="contained" color="primary" sx={{ marginRight: '10px' }}>
          Add
        </Button>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
  </>
  )
}

//  export const AddTaskListButton = ({toggleDrawer,popupState}) => (
//   );

export const EditTaskListDrawer=({toggleDrawer,state})=>{
    return (
        <>
        <IconButton onClick={toggleDrawer('editTaskGroup', true)} sx={{ fontSize: '0.875rem', lineHeight: '1.75' }} id="editTaskGroup">
        <EditTwoToneIcon />
      </IconButton>
        <Drawer anchor="right" open={state.editTaskGroup} onClose={toggleDrawer('editTaskGroup', false)}>
        {/* {form} */}
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Edit Task Group</Typography>

            <Button onClick={toggleDrawer('editTaskGroup', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          {/* ========= import Initiate Employee Exit Form ========== */}
          <EditTaskListDrawerContent/>
        </Box>
      </Drawer>
      </>
    )
}