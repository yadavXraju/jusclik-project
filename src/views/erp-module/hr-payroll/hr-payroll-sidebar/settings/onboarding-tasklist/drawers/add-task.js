// PAGE OWNER: DAMANDEEP
import React from 'react'
import {Typography,TextField, Checkbox, Button,Box, Drawer } from '@mui/material'
// import ParamAttachement from 'components/upload-file/Attachement'
import MultipleSelectChip from '../ChipSelect'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';



const selectDate = Array.from({ length: 50 }, (_, index) => ({ label: (index + 1).toString(), value: index + 1 }));
const option=[
{value:"1",label:"Before due date"},
{value:"2",label:"After due date"},
]

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
          <Typography variant="h4">Add Task to  </Typography>

          <Button onClick={toggleDrawer('addTask', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        {/* ========= import Initiate Employee Exit Form ========== */}
       
        <Box>
        <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">Add  Task  Name</Typography>
        <TextField
          fullWidth
        />
        </Box>
         <Box>
         <Typography sx={{mt:2, mb:1}} variant="h5" color="initial">Description</Typography>
         <TextField
          fullWidth
          multiline
          rows={3}
        />
        </Box>
        <Box>
         <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">
           Assigned to
            </Typography>
            <MultipleSelectChip name={names}/>
         </Box>

         <Box>
         <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">
           Validator
            </Typography>
            <MultipleSelectChip name={names}/>
         </Box>
          <Box xs={12} sx={{display:"flex", flexDirection:"row",justifyContent:"flex-start" ,width:"100%",alignItems:"center",mt:2,mb:1}}>
                      
          <ParameterizedAutoComplete
             option={selectDate}
             customStyle={{width:"60px",marginLeft:"10px",marginRight:"3px","& .MuiOutlinedInput-input":{height:"10px",textAlign:"center"}
             }}
             />
             <Typography  sx={{}}variant="h5" color="initial">days to done after joined</Typography>
         </Box>

         {/* <ParamAttachement label={"Attach File"}/> */}

         <Box sx={{display:"flex" ,alignItems:"center"}}>
            <Checkbox />
           <Typography  variant="h5" color="initial">
            Require the attachment from employee to mark the task as done.
           </Typography>

          </Box>
         <Box sx={{display:"flex" ,alignItems:"center"}}>
            <Checkbox />
           <Typography  variant="h5" color="initial">
           Send Reminder To Assigned
           </Typography>
        
         </Box>
         <Box sx={{display:"flex" ,alignItems:"center"}}>
          Send Reminder <TextField  sx={{width:"60px" ,mx:1,"& .MuiOutlinedInput-input":{height:"10px",textAlign:"center"}}}/> days before due Date  <ParameterizedAutoComplete
          option={option}
          customStyle={{width:"40%",marginLeft:"3px"
          }}
          />
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