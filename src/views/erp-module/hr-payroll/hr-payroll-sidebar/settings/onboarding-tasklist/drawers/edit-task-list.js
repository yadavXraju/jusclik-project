import { Box, Button, Drawer, IconButton, TextField, Typography } from '@mui/material';
import React from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

export const EditTaskListDrawer=({toggleDrawer,state,value,taskGroups,setTaskGroups})=>{
  const [name,setName]=React.useState(taskGroups[value]?.name)
  const [desc,setDesc]=React.useState(taskGroups[value]?.description)
  const handleNameChange=(e)=>{
    const newName=e.target.value
      // console.log(name);
      setName(newName)
   
  }
  const handleDescChange=(e)=>{
    const newDesc=e.target.value
    setDesc(newDesc)

  }
const handleAdd=()=>{
    const newData=taskGroups[value]
    newData.name=name
    newData.desc=desc
    setTaskGroups((prev)=>({...prev,newData}))

}
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
          <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 70px)', marginTop: '1rem' }}>
      <TextField label="Task Group Name" value={name} sx={{ marginBottom: '1rem' }} onChange={(e)=>{handleNameChange(e)}} />
      <TextField label="Description" value={desc} sx={{ marginBottom: '1rem' }} multiline={true} minRows={3} onChange={(e)=>{handleDescChange(e)}} />
      <Box sx={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        <Button variant="contained" color="primary" sx={{ marginRight: '10px' }} onClick={handleAdd}>
          Add
        </Button>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
        </Box>
      </Drawer>
      </>
    )
}