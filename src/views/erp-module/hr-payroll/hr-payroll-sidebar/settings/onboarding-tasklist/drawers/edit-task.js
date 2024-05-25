// PAGE OWNER: DAMANDEEP
import React from 'react';
import { Typography, TextField, Box, Checkbox, Button, Drawer } from '@mui/material';
import ParamMultipleSelect from 'components/ui/custom-input/MultipleSelect';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';


export const EditTaskDrawer = ({ toggleDrawer, state,editId,rows,setRows}) => {
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
    'Kelly Snyder'
  ];
  const [taskData,setTaskData]=React.useState({
    id:editId,
    task:rows[editId-1]?.task,
    description:rows[editId-1]?.description
  })
  const handleSave=(e)=>{
    const newRows=rows
    newRows[editId]=taskData
    setRows(newRows)
    const closeDrawer= toggleDrawer('editTask', false)
closeDrawer(e)
  }
  return (
    <>
      <Drawer anchor="right" open={state.editTask} onClose={toggleDrawer('editTask', false)}>
        {/* {form} */}
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4">Edit Task</Typography>

            <Button onClick={toggleDrawer('editTask', false)} sx={{ alignSelf: 'flex-end' }}>
              Close
            </Button>
          </Box>
          <Box>
        <Box>
        <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">Add  Task  Name</Typography>
        <TextField
          fullWidth
          onChange={(e)=>{let taskName=e.target.value
           const task=taskName
           setTaskData(prev=>({...prev,task:task,id:rows?.length+1}))
          }}
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
            <TextField fullWidth 
              onChange={(e)=>{
              let taskName=e.target.value
              const task=taskName
              setTaskData(prev=>({...prev,task:task}))
             }}
             value={taskData?.task}
            />

         <Box>
         <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">
           Validator
            </Typography>
            <ParamMultipleSelect options={names}  value={validator} setValue={setValidator}/>
        
         </Box>
          <Box xs={12} sx={{display:"flex", flexDirection:"row",justifyContent:"flex-start" ,width:"100%",alignItems:"center",mt:2,mb:1}}>
                      
          <ParameterizedAutoComplete
             option={selectDate}
             customStyle={{width:"100px",marginLeft:"10px",marginRight:"3px","& .MuiOutlinedInput-input":{height:"10px",textAlign:"center"}
             }}
            
             />
             <Typography  sx={{}}variant="h5" color="initial">days to done after joined</Typography>
         </Box>

     

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
          Send Reminder <TextField  sx={{width:"60px" ,mx:1,"& .MuiOutlinedInput-input":{height:"10px",textAlign:"center"}}}/>   days before due Date  <ParameterizedAutoComplete
          option={option}
          customStyle={{width:"40%",marginLeft:"3px"
          }}
          />
        </Box>
      </Box>


          <Box>
            <Button variant="contained" color="primary" sx={{ position: 'fixed', right: '80px', bottom: '10px' }} onClick={(e)=>handleSave(e)}>
              Save
            </Button>
          </Box>
        </Box>
        </Box>
      </Drawer>
    </>
  );
};
