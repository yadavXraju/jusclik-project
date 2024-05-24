// PAGE OWNER: DAMANDEEP
import { Box, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import React from 'react';
import CommonDataGrid from 'components/commonDataGrid';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { AddTaskListDrawer } from './drawers/add-task-list';
import { EditTaskListDrawer } from './drawers/edit-task-list';
import { AddTaskDrawer } from './drawers/add-task';
import WarningDialog from 'components/WarningDialog';
import { EditTaskDrawer } from './drawers/edit-task';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

const DeleteTaskListButton = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ marginRight: '8px' }}>
    <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
  </IconButton>
);

// MAIN COMPONENT
const Onboarding = ({ panelSubheading, panelHeading, taskGroups, setTaskGroups, value }) => {
  // rows state
  const [modalOpen, setmodalOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null); // State to store the id of the row to be deleted
  const handleDeleteRow = (id) => {
    // Set the id of the row to be deleted
    setDeleteId(id);
    // Open the warning dialog
    setmodalOpen(true);
  };
  
  const handleConfirmDelete = () => {
    // Filter out the row with the given id
    const updatedRows = rows.filter((row) => row.id !== deleteId);
    // Update the rows state
    setRows(updatedRows);
    // Close the warning dialog
    setmodalOpen(false);
    // Reset the deleteId state
    setDeleteId(null);
  };
  
  const handleModalClose = () => {
    setmodalOpen(false);
  };
  const [rows, setRows] = React.useState([
    { id: 1, task: 'IT Declaration', dueOn: '1 day(s) after joining day', assignedTo: 'Employee', validator: 'Payroll Admin' },
    { id: 2, task: 'Submit Bank Account Details', dueOn: '1 day(s) after joining day', assignedTo: 'Employee', validator: 'Payroll Admin' },
    { id: 3, task: 'Submit PAN Card details', dueOn: '0 day(s) after joining day', assignedTo: 'Employee', validator: 'Payroll Admin' },
    { id: 4, task: 'Collection of Forms', dueOn: '3 day(s) after joining day', assignedTo: 'Employee', validator: 'Payroll Admin' },
    { id: 5, task: 'Bank Account Creation', dueOn: '3 day(s) after joining day', assignedTo: 'Payroll Admin', validator: 'Not Available' },
    {
      id: 6,
      task: 'Submit Previous Employment...',
      dueOn: '1 day(s) after joining day',
      assignedTo: 'Employee',
      validator: 'Payroll Admin'
    },
    {
      id: 7,
      task: 'Enroll employee in benefit...',
      dueOn: '1 day(s) after joining day',
      assignedTo: 'Payroll Admin',
      validator: 'Not Available'
    }
  ]);
  // states to check which drawer is open
  const [state, setState] = React.useState({
    addTaskGroup: false,
    editTaskGroup: false,
    addTask: false,
    editTask: false
  });
  // const [modalOpen, setmodalOpen] = React.useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

  
  setState({ ...state, [anchor]: open });
};
// DRAWERS

// const [deleteId, setDeleteId] = React.useState(null); // State to store the id of the row to be deleted


  const columns = [
    { field: 'task', headerName: 'Task', width: 260 },
    { field: 'dueOn', headerName: 'Due On', width: 260 },
    { field: 'assignedTo', headerName: 'Assigned To', width: 260 },
    { field: 'validator', headerName: 'Validator', width: 250 },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 130,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box display="flex">
          <Tooltip>
            <IconButton onClick={toggleDrawer('editTask', true)} id="editTask" sx={{ marginRight: '8px' }}>
              <EditTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                handleDeleteRow(params.row.id);
              }}
            >
              <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];

  return (
    <>
      <Box sx={{ margin: '-40px 0 0 0', width: '65vw' }}>
        <Box sx={{ marginTop: '-1rem', marginBottom: '1rem' }}></Box>
        {/* panel */}
        <Paper sx={{ marginBottom: '1rem', padding: '1rem', display: 'flex' }}>
          <Box sx={{ flex: '6' }}>
            <Typography variant="h2" mb={1}>
              {panelHeading}
            </Typography>
            <Typography variant="h4">{panelSubheading}</Typography>
          </Box>
          <Box sx={{ flex: '1', alignItems: 'center', display: 'flex ', justifyContent: 'end' }}>
            {/*  POPUP ---- DRAWERS FOR TASK-LISTS: ADD, EDIT, DELETE */}
            {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* -----------------------------------popup drawers   ------------------------------------------------------- */}
            <AddTaskListDrawer
              toggleDrawer={toggleDrawer}
              value={value}
              taskGroups={taskGroups}
              setTaskGroups={setTaskGroups}
              state={state}
            />
            <EditTaskListDrawer
              toggleDrawer={toggleDrawer}
              value={value}
              taskGroups={taskGroups}
              setTaskGroups={setTaskGroups}
              state={state}
            />
            <DeleteTaskListButton buttonLabel="Delete Task List" drawerTitle="Delete Task List" />
          </Box>
        </Paper>

        <Paper sx={{ padding: '1rem' }}>
          {/* -----------DRAWER----ADD NEW TASK-------- */}
          <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '1rem' }}>
            <AddTaskDrawer toggleDrawer={toggleDrawer} value={value} taskGroups={taskGroups} setTaskGroups={setTaskGroups} state={state} />
            <EditTaskDrawer toggleDrawer={toggleDrawer} state={state} />
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
      {/* ========= import warning dialog ========== */}
      <WarningDialog
        open={modalOpen}
        onClose={handleModalClose}
        contentText="Are you sure you want to delete?"
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default Onboarding;
