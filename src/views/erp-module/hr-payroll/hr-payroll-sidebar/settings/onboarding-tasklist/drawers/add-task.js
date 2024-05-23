// PAGE OWNER: DAMANDEEP
import React from 'react'
import {Typography,TextField, Checkbox, Button,Box, Drawer } from '@mui/material'
import ParamAttachement from 'component/ParamAttachement'
import MultipleSelectChip from '../ChipSelect'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


export const AddTaskDrawer=({toggleDrawer,state})=>{
  const names = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];
  
  return (
      <>
      {/* <IconButton onClick={toggleDrawer('addTask', true)} sx={{ fontSize: '0.875rem', lineHeight: '1.75' }} id="addTask">
      <AddOutlinedIcon /> Add Task
    </IconButton> */}
    <Button onClick={toggleDrawer('addTask', true)} variant="outlined" sx={ {fontSize: '0.875rem', lineHeight: '1.75'} } id="addTask" startIcon={<AddOutlinedIcon />}>
    Add Task
          </Button>
      <Drawer anchor="right" open={state.addTask} onClose={toggleDrawer('addTask', false)}>
      {/* {form} */}
      <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: 2 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Add Task Group</Typography>

          <Button onClick={toggleDrawer('addTask', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        {/* ========= import Initiate Employee Exit Form ========== */}
       
        <Box>
        <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">Add  Task List Name</Typography>
        <TextField
          fullWidth
        />
         
         <Typography sx={{mt:2, mb:1}} variant="h5" color="initial">Description</Typography>
         <TextField
          fullWidth
          multiline
        />
          <Box xs={12} sx={{display:"flex", flexDirection:"row",justifyContent:"flex-start" ,width:"100%"}}>

            <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">Due on 
           5 after joined
            </Typography>


         </Box>
         <ParamAttachement label={"Attach File"}/>
         <Box>
         <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">
           Assigned to
            </Typography>
            <MultipleSelectChip name={names}/>
         </Box>

         <Box>
         <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">
           validator
            </Typography>
            <MultipleSelectChip name={names}/>
         </Box>
         <Box sx={{display:"flex" ,alignItems:"center"}}>
            <Checkbox />
           <Typography  variant="h5" color="initial">
           Send Reminder To Assigned
           </Typography>
        
         </Box>
         <Box sx={{display:"flex" ,alignItems:"center"}}>Send Reminder <TextField  sx={{width:"60px" ,mx:1,"& .MuiOutlinedInput-input":{height:"4px",textAlign:"center"}}}/> days before due Date</Box>

              
      </Box>

      <Box>
        <Button variant="contained" color="primary" sx={{position:"fixed",right:"80px",bottom:"10px"}}>
          Add
        </Button>
      </Box>
      </Box>
    </Drawer>
    </>
  )
}