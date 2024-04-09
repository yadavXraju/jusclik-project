import React, { useState } from 'react';
import { Box, Button,Grid ,Stack} from '@mui/material';
import SelectList from 'views/common-section/ParamSelectList';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';


const DrawerAddNew=() => {

  const [addTask, setAddTask] = useState('');
  const [addAssigned, setAddAssigned] = useState('');
const Task = [
  { value: 'reason1', label: 'reason1' },
  { value: 'reason2', label: 'reason2' }
];
const addTaskChange = (event) => {
  setAddTask(event.target.value);
 };
 const Assigned = [
  { value: 'reason1', label: 'reason1' },
  { value: 'reason2', label: 'reason2' }
];
const addAssignedChange = (event) => {
  setAddAssigned(event.target.value);
 };

  return (
    <>
       <Box>
        {/* <Typography variant="h5" sx={{ paddingTop: '20px', paddingLeft:'8px' }}>
          What is the reason for withdrawal?
        </Typography> */}
        <Grid container>
          <Grid mt={1} item xs={12} sx={{ paddingLeft:'8px', paddingRight:'8px', paddingTop:'20px' }}>
            <SelectList
              label="Task Name"
              options={Task}
              value={addTask}
              onChange={addTaskChange}
              // size={isMobile ? 'small' : 'normal'}
              // customSytle={{ width: '30%' }}
            />
          </Grid>
          <Grid mt={1} item xs={12} sx={{ paddingLeft:'8px', paddingRight:'8px', paddingTop:'20px' }}>
            <SelectList
              label="Assigned To"
              options={Assigned}
              value={addAssigned}
              onChange={addAssignedChange}
              // size={isMobile ? 'small' : 'normal'}
              // customSytle={{ width: '30%' }}
            />
          </Grid>
          
          <Grid item xs={12} sx={{ paddingTop: '25px',paddingLeft:'8px', paddingRight:'8px' }}>
            <ParameterizedDateComponent label="Due Date" customStyle={{ width: '100%' }} />
          </Grid>      
        </Grid>
        <Box sx={{paddingTop:'30px'}}>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Save Changes</Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
          </Box>
      </Box>
    </>
  );
};
export default DrawerAddNew;