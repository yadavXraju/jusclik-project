import { Box, Button, IconButton, MenuItem, Paper, TextField, Tooltip, Typography } from '@mui/material';
import React from 'react';
import CommonDataGrid from 'views/common-section/commonDataGrid';
import withParamDrawer from 'views/common-section/withParamDrawer';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// these are panels of drawer componnent
const AddTaskList = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 70px)' ,marginTop:'1rem' }}>
        <TextField label="Task List Name" sx={{ marginBottom: '1rem' }} />
        <TextField label="Description" sx={{ marginBottom: '1rem' }} multiline={true} minRows={3} />
        <TextField select label="Copy Tasks From Existing Task List (Optional)" sx={{ marginBottom: '1rem' }}>
          {/* Dropdown options */}
          <MenuItem value="">None</MenuItem>
          {/* Add other dropdown options here */}
        </TextField>
        <Box sx={{ position: 'fixed', bottom: '10px', right: '10px' }}>
          <Button variant="contained" color="primary" sx={{ marginRight: '10px' }}>
            Add
          </Button>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};
const AddTask = () => {
  return <></>;
};
const EditTask = () => {
  return <></>;
};
const EditTaskList = () => {
  return <></>;
};
// custom drawer button
const EditTaskButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <EditTwoToneIcon />
  </IconButton>
);
const EditTaskListButton = ({ onClick }) => (
  <Typography>
    <IconButton onClick={onClick} sx={{ fontSize: '0.875rem', lineHeight: '1.75' }}>
      <EditTwoToneIcon />
      Edit Task List
    </IconButton>
  </Typography>
);
const DeleteTaskListButton = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ fontSize: '0.875rem', lineHeight: '1.75' }}>
    <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
    Delete Task List
  </IconButton>
);
const AddTaskListButton = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ fontSize: '0.875rem', lineHeight: '1.75' }}>
    <AddOutlinedIcon />
    Add Task List
  </IconButton>
);
// MAIN COMPONENT
const Onboarding = ({ panelSubheading, panelHeading }) => {
  // DRAWERS
  const AddTaskListDrawer = withParamDrawer(AddTaskList, AddTaskListButton);
  const AddTaskDrawer = withParamDrawer(AddTask);
  const EditTaskDrawer = withParamDrawer(EditTask, EditTaskButton);
  const EditTaskListDrawer = withParamDrawer(EditTaskList, EditTaskListButton);

  // data for datagrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90, align: 'left', headerAlign: 'left' },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 130,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: () => (
        <Box>
          <Tooltip>
            <EditTaskDrawer />
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={(event) => event.stopPropagation()}>
              <DeleteTwoToneIcon onClick={(event) => event.stopPropagation()} sx={{ color: '#f19e9e' }} />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  ];

  return (
    <>
      <Box sx={{ margin: '-40px 0 0 0' }}>
        <Box sx={{ marginTop: '-1rem', marginBottom: '1rem' }}></Box>
        {/* panel */}
        <Paper sx={{ marginBottom: '1rem', padding: '1rem', display: 'flex' }}>
          <Box sx={{ flex: '1' }}>
            <Typography variant="h2" mb={1}>
              {panelHeading}
            </Typography>
            <Typography variant="h4">{panelSubheading}</Typography>
          </Box>
          {/*  POPUP ---- DRAWERS FOR TASK-LISTS: ADD, EDIT, DELETE */}
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }} {...bindTrigger(popupState)}>
                  <MoreVertTwoToneIcon />
                </IconButton>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                  }}
                >
                  
                  <AddTaskListDrawer buttonLabel="Add New Task List" drawerTitle="Add New Task List" popupState={popupState} />              
                  <EditTaskListDrawer buttonLabel="Edit Task List" drawerTitle="Edit Task List" popupState={popupState} />
                  <DeleteTaskListButton buttonLabel="Delete Task List" drawerTitle="Delete Task List" popupState={popupState} />
                </Popover>
              </div>
            )}
          </PopupState>
        </Paper>

        <Paper sx={{ padding: '1rem' }}>
          {/* -----------DRAWER----ADD NEW TASK-------- */}
          <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '1rem' }}>
            <AddTaskDrawer buttonLabel="Add New Task" drawerTitle="Add New Task" />
          </Box>
          {/* ============== DATAGRID ============== */}
          <CommonDataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection={true}
            sx={{ backgroundColor: 'background.paper', height: 'calc(100vh - 480px)' }}
          />
        </Paper>
      </Box>
    </>
  );
};

export default Onboarding;
