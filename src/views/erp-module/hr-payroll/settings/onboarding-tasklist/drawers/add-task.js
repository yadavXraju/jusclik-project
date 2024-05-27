// PAGE OWNER: DAMANDEEP
import React,{useState} from 'react'
import {Typography,TextField, Checkbox, Button,Box, Drawer } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';
import ParamMultipleSelect from 'components/ui/custom-input/MultipleSelect';

const selectDate = Array.from({ length: 50 }, (_, index) => ({ label: (index + 1).toString(), value: index + 1 }));

// const [taskData, setTaskData] = React.useState(null);




const option=[
{value:"1",label:"Before due date"},
{value:"2",label:"After due date"},
]

export const AddTaskDrawer=({toggleDrawer,state,setRows})=>{

  const[assignTo,setAssignTo]=useState([]);
  const [validator, setValidator] = React.useState([]);
  const handleSetValidator = (val) => {
    setValidator(val);
    setTaskData((prev) => ({ ...prev, validator: val?.name }));
  };
  const handleSetAssignedTo = (val) => {
    setAssignTo(val);
    const assignedToArr = val.map((ele) => ele.name);
    setTaskData((prev) => ({ ...prev, assignedTo: [assignedToArr] }));
  };
  // const[validator,setValidator]=useState([{ id: 2, name: 'tarun' }]);
  const names = [
    { id: 1, name: 'Employee' },
    { id: 2, name: 'Payroll Admin' },
    { id: 3, name: 'Not Available' }
  ];
  
  const [taskData,setTaskData]=React.useState('')
 
  // { id: 5, task: 'Bank Account Creation', dueOn: '3 day(s) after joining day', assignedTo: 'Payroll Admin', validator: 'Not Available' }
  const handleAdd=(e)=>{   

setRows(prev=>([...prev,{...taskData,id:prev.length+1}]))
const closeDrawer= toggleDrawer('addTask', false)
closeDrawer(e)
  }
  const handleDueDate = (e, value) => {
    setTaskData((prev) => ({ ...prev, dueOn: `${value.value} day(s) after joining day` }));
  };
  return (
      <>

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
        <Box>
        <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">Add  Task  Name</Typography>
        <TextField
          fullWidth
          onChange={(e)=>{
          let task=e.target.value
           setTaskData(prev=>({...prev,task:task}))
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
            <ParamMultipleSelect options={names}  value={assignTo||[]} setValue={handleSetAssignedTo}/>
         </Box>

         <Box>
         <Typography  sx={{mt:2, mb:1}}variant="h5" color="initial">
           Validator
            </Typography>
            {<ParamMultipleSelect options={names}  value={validator} setValue={handleSetValidator} multiple={false} />}
            {/* <ParameterizedAutoComplete
             option={ validator}
             fullWidth
             customStyle={{width:"100%"}}
        
             /> */}
         </Box>
          <Box xs={12} sx={{display:"flex", flexDirection:"row",justifyContent:"flex-start" ,width:"100%",alignItems:"center",mt:2,mb:1}}>
                      
          <ParameterizedAutoComplete
             option={selectDate}
             customStyle={{width:"100px",marginLeft:"10px",marginRight:"3px","& .MuiOutlinedInput-input":{height:"10px",textAlign:"center"}
             }}
             onChange={handleDueDate}
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
          Send Reminder <TextField  sx={{width:"60px" ,mx:1,"& .MuiOutlinedInput-input":{height:"10px",textAlign:"center"}}}/> days before due Date  <ParameterizedAutoComplete
          option={option}
          customStyle={{width:"40%",marginLeft:"3px"
          }}
          />
        </Box>
      </Box>
      <Box>
      <Button variant="outlined" color="primary" sx={{position:"fixed",right:"80px",bottom:"10px"}}
        onClick={(e)=>handleAdd(e)}
        >
        Cancel
        </Button>
        <Button variant="contained" color="primary" sx={{position:"fixed",right:"10px",bottom:"10px"}}
        onClick={(e)=>handleAdd(e)}
        >
          Add
        </Button>
      </Box>
      </Box>
    </Drawer>
    </>
  )
}