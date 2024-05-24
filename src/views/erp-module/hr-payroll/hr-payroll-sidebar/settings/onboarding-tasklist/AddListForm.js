import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete'
import CommonDataGrid from 'components/table-data-grid/commonDataGrid'


const option = [
    { value: 'Onbording - US 6', label: 'Onbording - US 6',id:1 },
    { value: 'Onboarding- UK', label: 'Onboarding- UK',id:2 },
    { value: 'Onboarding- India', label: 'Onboarding- India' ,id:3},
    { value: 'Onboarding- Middle East', label: 'Onboarding- Middle East' ,id:4},
    { value: 'Onboarding-  Southern Asia', label: 'Onboarding-  Southern Asia' ,id:5},
    // Add more options as needed
  ];


  
const columns = [
    { field: 'id', 
    headerName: 'Task ID'},
    {
      field: 'task',
      headerName: 'Task Name',
    },

  ];
  const rows = [
    { id: 1,task:"task1",  },
    { id: 2,task:"task2" },
    { id: 3,task:"task3" },
    { id: 4,task:"task4" },
    { id: 5,task:"task5" },
    { id: 6,task:"task6" },
  ];
  
  
const AddListForm = () => {
  return (
    <>
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
        <Typography  sx={{mt:2, mb:1}} variant="h5" color="initial">Copy Task From existing Tasklist </Typography>
         <ParameterizedAutoComplete option={option} label={'Select List'} customStyle={{width:"100% !important"}}  />
         <Box sx={{mt:2, mb:1}}>
            <Typography  variant="h5" color="initial">Task Title</Typography>
         <CommonDataGrid
          columns={columns}
          rows={rows}
          />
         </Box>

      </Box>
    </>
  )
}

export default AddListForm
