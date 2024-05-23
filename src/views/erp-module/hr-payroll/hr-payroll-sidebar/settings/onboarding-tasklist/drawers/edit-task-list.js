// PAGE OWNER: DAMANDEEP
import { Box, Button, Drawer, IconButton, TextField, Typography } from '@mui/material';
import React from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

export const EditTaskListDrawer=({toggleDrawer,state,taskGroups,setTaskGroups,value})=>{
    const [name,setName]=React.useState(taskGroups[value]?.name)
  const [desc,setDesc]=React.useState(taskGroups[value]?.description)
  const handleNameChange=(e)=>{
    const newName=e.target.value
      setName(newName)   
  }
  const handleDescChange=(e)=>{
    const newDesc=e.target.value
    setDesc(newDesc)
  }
const handleAdd=()=>{
    const newData=taskGroups[value]
    newData.name=name
    newData.description=desc
    setTaskGroups((prev)=>({...prev,newData}))

}
  return (
      <>
      <IconButton onClick={toggleDrawer('EditTaskGroup', true)}  id="EditTaskGroup" sx={{marginRight:'8px'}}>
      <EditTwoToneIcon />
    </IconButton>
      <Drawer anchor="right" open={state.EditTaskGroup} onClose={toggleDrawer('EditTaskGroup', false)}>
      {/* {form} */}
      <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: 2 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Edit Task Group</Typography>

          <Button onClick={toggleDrawer('EditTaskGroup', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 70px)', marginTop: '1rem' }}>
      <TextField label="Task Group Name" value={name} sx={{ marginBottom: '1rem' }} onChange={(e)=>{handleNameChange(e)}} />
      <TextField label="Description" value={desc} sx={{ marginBottom: '1rem' }} multiline={true} minRows={3} onChange={(e)=>{handleDescChange(e)}} />
      <Box sx={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        <Button variant="outlined" color="primary" sx={{ marginRight: '10px' }}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" sx={{ marginRight: '15px' }} onClick={handleAdd}>
          Add
        </Button>
      </Box>
    </Box>
      </Box>
    </Drawer>
    </>
  )
}