// PAGE OWNER: DAMANDEEP
import React from 'react';
import { Typography, TextField, Box, Checkbox, Button, Drawer } from '@mui/material';
import ParamMultipleSelect from 'components/ui/custom-input/MultipleSelect';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';

export const EditTaskDrawer = ({ toggleDrawer, state, editId, rows, setRows }) => {
  const rowData = rows[editId - 1];

  const names = [
    { id: 1, name: 'Employee' },
    { id: 2, name: 'Payroll Admin' },
    { id: 3, name: 'Not Available' }
  ];
  const valdiatorValue = names.find((ele) => ele.name == rowData?.validator);
  const assignedToValue = names.find((ele) => ele.name == rowData?.assignedTo);
  const [taskData, setTaskData] = React.useState(rowData);
  const [validator, setValidator] = React.useState(null);
  const [assignedTo, setAssignTo] = React.useState(null);

  React.useEffect(() => {
    setAssignTo([assignedToValue]);
    setValidator(valdiatorValue);
  }, [editId]);
  // console.log(validator,assignedTo);

  // const handleValidatorChange = (newVal) => {
  //   setTaskData((prev) => ({ ...prev, validator: newVal }));
  // };
  const selectDate = Array.from({ length: 50 }, (_, index) => ({ label: (index + 1).toString(), value: index + 1 }));
  const option = [
    { value: '1', label: 'Before due date' },
    { value: '2', label: 'After due date' }
  ];

  const handleSave = (e) => {
    const newRows = rows;
    newRows[editId] = taskData;
    setRows(newRows);
    const closeDrawer = toggleDrawer('editTask', false);
    closeDrawer(e);
  };

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
              <Typography sx={{ mt: 2, mb: 1 }} variant="h5" color="initial">
                Edit Task Name
              </Typography>
              <TextField
                fullWidth
                onChange={(e) => {
                  let taskName = e.target.value;
                  const task = taskName;
                  setTaskData((prev) => ({ ...prev, task: task, id: rows?.length + 1 }));
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ mt: 2, mb: 1 }} variant="h5" color="initial">
                Description
              </Typography>
              <TextField fullWidth multiline rows={3} />
            </Box>
            <Box>
              <Typography sx={{ mt: 2, mb: 1 }} variant="h5" color="initial">
                Assigned to
              </Typography>
              {/* <TextField fullWidth 
              onChange={(e)=>{
              let taskName=e.target.value
              const task=taskName
              setTaskData(prev=>({...prev,task:task}))
             }}
             value={taskData?.task}
            /> */}
              {editId && validator && <ParamMultipleSelect options={names} value={assignedTo} setValue={setAssignTo} />}
              <Box>
                <Typography sx={{ mt: 2, mb: 1 }} variant="h5" color="initial">
                  Validator
                </Typography>
                {editId && validator && <ParamMultipleSelect options={names} value={validator} setValue={setValidator} multiple={false} />}
              </Box>
              <Box
                xs={12}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  width: '100%',
                  alignItems: 'center',
                  mt: 2,
                  mb: 1
                }}
              >
                <ParameterizedAutoComplete
                  option={selectDate}
                  customStyle={{
                    width: '100px',
                    marginLeft: '10px',
                    marginRight: '3px',
                    '& .MuiOutlinedInput-input': { height: '10px', textAlign: 'center' }
                  }}
                />
                <Typography sx={{}} variant="h5" color="initial">
                  days to done after joined
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox />
                <Typography variant="h5" color="initial">
                  Require the attachment from employee to mark the task as done.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox />
                <Typography variant="h5" color="initial">
                  Send Reminder To Assigned
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                Send Reminder{' '}
                <TextField sx={{ width: '60px', mx: 1, '& .MuiOutlinedInput-input': { height: '10px', textAlign: 'center' } }} /> days
                before due Date <ParameterizedAutoComplete option={option} customStyle={{ width: '40%', marginLeft: '3px' }} />
              </Box>
            </Box>

            <Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ position: 'fixed', right: '80px', bottom: '10px' }}
                onClick={(e) => handleSave(e)}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
