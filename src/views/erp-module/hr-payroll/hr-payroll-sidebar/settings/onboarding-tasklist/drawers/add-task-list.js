// PAGE OWNER: DAMANDEEP
import { Box, Button, Drawer, IconButton, TextField, Typography } from '@mui/material';
import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const AddTaskListDrawerContent = () => {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 70px)', marginTop: '1rem' }}>
      <TextField label="Task List Name" sx={{ marginBottom: '1rem' }} />
      <TextField label="Description" sx={{ marginBottom: '1rem' }} multiline={true} minRows={3} />
      <Box sx={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        
      <Button variant="outlined" color="primary" sx={{ marginRight: '10px' }}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" sx={{ marginRight: '15px' }}>
          Add
        </Button>
  
      </Box>
    </Box>
  </>
  )
}
export const AddTaskListDrawer=({toggleDrawer,state})=>{
    return (
        <>
        <IconButton onClick={toggleDrawer('addTaskGroup', true)} sx={{ fontSize: '0.875rem', lineHeight: '1.75' }} id="addTaskGroup">
        <AddOutlinedIcon />
      </IconButton>
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
          <AddTaskListDrawerContent/>
        </Box>
      </Drawer>
      </>
    )
}