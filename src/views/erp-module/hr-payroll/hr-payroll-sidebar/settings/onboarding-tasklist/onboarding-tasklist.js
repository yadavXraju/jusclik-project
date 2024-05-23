// PAGE OWNER: DAMANDEEP
import { Box, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import React from 'react';
import CommonDataGrid from 'views/common-section/commonDataGrid';
// import withParamDrawer from 'views/common-section/withParamDrawer';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { AddTaskListDrawer } from './drawers/add-task-list';
import { EditTaskListDrawer } from './drawers/edit-task-list';
import { AddTaskDrawer } from './drawers/add-task';
// import EditTask from './drawers/edit-task';
import WarningDialog from 'views/common-section/WarningDialog';
import { EditTaskDrawer } from './drawers/edit-task';

// custom drawer button
// const EditTaskButton = ({ onClick }) => (
//   <IconButton onClick={onClick} id="tarun">
//     <EditTwoToneIcon />
//   </IconButton>
// );0
const DeleteTaskListButton = ({ onClick }) => (
  <IconButton onClick={onClick}sx={{marginRight:'8px'}}>
    <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
  </IconButton>
);

// MAIN COMPONENT
const Onboarding = ({ panelSubheading, panelHeading,taskGroups,setTaskGroups,value }) => {
    // rows state
    const [rows, setRows] = React.useState(
      [
        { id: 1, task: 'IT Declaration', dueOn: '1 day(s) after joining day', assignedTo: 'Employee', validator: 'Payroll Admin' },
        { id: 2, task: 'Submit Bank Account Details', dueOn: '1 day(s) after joining day', assignedTo: 'Employee', validator: 'Payroll Admin' },
        { id: 3, task: 'Submit PAN Card details', dueOn: '0 day(s) after joining day', assignedTo: 'Employee', validator: 'Payroll Admin' },
        { id: 4, task: 'Collection of Forms', dueOn: '3 day(s) after joining day', assignedTo: 'Employee', validator: 'Payroll Admin' },
        { id: 5, task: 'Bank Account Creation', dueOn: '3 day(s) after joining day', assignedTo: 'Payroll Admin', validator: 'Not Available' },
        { id: 6, task: 'Submit Previous Employment...', dueOn: '1 day(s) after joining day', assignedTo: 'Employee', validator: 'Payroll Admin' },
        { id: 7, task: 'Enroll employee in benefit...', dueOn: '1 day(s) after joining day', assignedTo: 'Payroll Admin', validator: 'Not Available' }
      ]);
    // states to check which drawer is open
    const [state, setState] = React.useState({
      addTaskGroup: false,
      editTaskGroup: false,
      addTask:false,
      editTask:false
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  // DRAWERS
  // const EditTaskDrawer = withParamDrawer(EditTask, EditTaskButton);

  const handleDeleteRow = (id) => {
    // Filter out the row with the given id
    setmodalOpen(true);
    console.log(id);
    const updatedRows = rows.filter(row => row.id !== id);
    // Update the rows state
    setRows(updatedRows);
  };
  const [modalOpen, setmodalOpen] = React.useState(false);
  const handleModalClose = () => {
    setmodalOpen(false);
  };
  const handleConfirmDelete = () => {
    const updatedRows = tableRows.filter((row) => row.id !== deleteId);
    setTableRows(updatedRows);
    setmodalOpen(false);
    setdeleteId(null)
  };
  const columns = [
    { field: 'task', headerName: 'Task', width: 200 },
    { field: 'dueOn', headerName: 'Due On', width: 150 },
    { field: 'assignedTo', headerName: 'Assigned To', width: 200 },
    { field: 'validator', headerName: 'Validator', width: 200 },
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
                <EditTaskDrawer toggleDrawer={toggleDrawer} state={state} />
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton onClick={(event) => {
              event.stopPropagation();
              handleDeleteRow(params.row.id);
            }}>
                  <DeleteTwoToneIcon 
                  // onClick={(event) => event.stopPropagation()}
                   sx={{ color: '#f19e9e' }} />
                </IconButton>
              </Tooltip>
            </Box>
          )
        }
  ];


  return (
    <>
      <Box sx={{ margin: '-40px 0 0 0' ,width:'65vw'}}>
        <Box sx={{ marginTop: '-1rem', marginBottom: '1rem' }}></Box>
        {/* panel */}
        <Paper sx={{ marginBottom: '1rem', padding: '1rem', display: 'flex' }}>
          <Box sx={{ flex: '6' }}>
            <Typography variant="h2" mb={1}>
              {panelHeading}
            </Typography>
            <Typography variant="h4">{panelSubheading}</Typography>
          </Box>
          <Box sx={{ flex: '1',alignItems:'center',display:'flex ',justifyContent:'end' }} >
          {/*  POPUP ---- DRAWERS FOR TASK-LISTS: ADD, EDIT, DELETE */}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* -----------------------------------popup drawers   ------------------------------------------------------- */}
          <AddTaskListDrawer toggleDrawer={toggleDrawer}  value={value} taskGroups={taskGroups} setTaskGroups={setTaskGroups} state={state} />
          <EditTaskListDrawer toggleDrawer={toggleDrawer} value={value} taskGroups={taskGroups} setTaskGroups={setTaskGroups} state={state} />
          <DeleteTaskListButton buttonLabel="Delete Task List" drawerTitle="Delete Task List" />
          </Box>
        </Paper>

        <Paper sx={{ padding: '1rem' }}>
          {/* -----------DRAWER----ADD NEW TASK-------- */}
          <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '1rem' }}>
            <AddTaskDrawer toggleDrawer={toggleDrawer}  value={value} taskGroups={taskGroups} setTaskGroups={setTaskGroups} state={state} />
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
