// PAGE OWNER: DAMANDEEP
import React from 'react';
import CustomTabs from './CustomTabs';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const OnboardingTasklist = () => {
  // tab and panel data based on selected tab
  const [taskGroups, setTaskGroups] = React.useState({
    0: {
      name: 'Document Submission',
      description: 'Tasks related to submitting documents'
    },
    1: {
      name: 'Payroll Tasks',
      description: 'Tasks related to payroll processing'
    },
    2: {
      name: 'Interns Tasks',
      description: 'Tasks related to interns management'
    },
    3: {
      name: 'IT Team Tasks',
      description: 'Tasks related to IT team activities'
    },
    4: {
      name: 'HR Tasks',
      description: 'Tasks related to HR management'
    }
  });

  const [rows, setRows] = React.useState([
    { id: 1, task: 'IT Declaration', dueOn: '1 day(s) after joining day', assignedTo:[ 'Employee' ],validator: 'Payroll Admin' },
    { id: 2, task: 'Submit Bank Account Details', dueOn: '1 day(s) after joining day', assignedTo:[ 'Employee'],validator: 'Payroll Admin' },
    { id: 3, task: 'Submit PAN Card details', dueOn: '0 day(s) after joining day', assignedTo:[ 'Employee', ],validator: 'Payroll Admin' },
    { id: 4, task: 'Collection of Forms', dueOn: '3 day(s) after joining day', assignedTo:[ 'Employee'],validator: 'Payroll Admin' },
    { id: 5, task: 'Bank Account Creation', dueOn: '3 day(s) after joining day', assignedTo:[ 'Payroll Admin'], validator: 'Not Available' },
    {
      id: 6,
      task: 'Submit Previous Employment...',
      dueOn: '1 day(s) after joining day',
      assignedTo:[ 'Employee'],      
      validator: 'Payroll Admin'
    },
    {
      id: 7,
      task: 'Enroll employee in benefit...',
      dueOn: '1 day(s) after joining day',
      assignedTo:[ 'Payroll Admin'],
      validator: 'Not Available'
    }
  ]);
  const [rowModalOpen, setRowModalOpen] = React.useState(false);
  const [tabModalOpen, setTabModalOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null); // State to store the id of the row to be deleted
  const [editId,setEditId]=React.useState(null)
  const [state, setState] = React.useState({
    addTaskGroup: false,
    editTaskGroup: false,
    addTask: false,
    editTask: false
  });

  const handleEditRow=(e,id)=>{
    setEditId(id)
    const openDrawer=toggleDrawer('editTask', true)
    openDrawer(e)
  }
  const handleDeleteRow = (id) => {
    // Set the id of the row to be deleted
    setDeleteId(id);
    // Open the warning dialog
    setRowModalOpen(true);
  };

  const handleConfirmDelete = () => {
    // Filter out the row with the given id
    const updatedRows = rows.filter((row) => row.id !== deleteId);
    // Update the rows state
    setRows(updatedRows);
    // Close the warning dialog
    setRowModalOpen(false);
    // Reset the deleteId state
    setDeleteId(null);
  };

  const handleModalClose = (str) => {
    if(str==='row')
    setRowModalOpen(false);
  if(str==='tab')
    setTabModalOpen(false)
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const columns = [
    { field: 'task', headerName: 'Task', 
    // width: 260
    flex:1},
    { field: 'dueOn', headerName: 'Due On',
    //  width: 260
     flex:1
    },
    { field: 'assignedTo', headerName: 'Assigned To',
    //  width: 260,
     flex:1,
     renderCell: (params) => (
      <Box>
        {params.value.map((task, index) => (
          <Typography key={index}>{task}</Typography>
        ))}
      </Box>
    ), },
    { field: 'validator', headerName: 'Validator',
    //  width: 250,
    flex:1
     },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      // minWidth: 130,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box display="flex">
          <Tooltip title="Edit Task">
            <IconButton onClick={(e)=>handleEditRow(e,params.row.id)} id="editTask" sx={{ marginRight: '8px' }}>
              <EditTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Task">
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
  const [tabsData,setTabsData] =React.useState( [
    {
      name: 'Document Submission',
      description: 'Tasks related to submitting documents'
    },
    {
      name: 'Payroll Tasks',
      description: 'Tasks related to payroll processing'
    },
    {
      name: 'Interns Tasks',
      description: 'Tasks related to interns management'
    },
    {
      name: 'IT Team Tasks',
      description: 'Tasks related to IT team activities'
    },
    {
      name: 'HR Tasks',
      description: 'Tasks related to HR management'
    }
  ]);
  const [selectedTab, setSelectedTab] = React.useState(0);
  
  return (
    <>
      <CustomTabs
        tabsData={tabsData}
        setTabsData={setTabsData}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        rowModalOpen={rowModalOpen}
        tabModalOpen={tabModalOpen}
        setTabModalOpen={setTabModalOpen}
        setRowModalOpen={setRowModalOpen}
        rows={rows}
        setRows={setRows}
        columns={columns}
        handleConfirmDelete={handleConfirmDelete}
        handleModalClose={handleModalClose}
        taskGroups={taskGroups}
        setTaskGroups={setTaskGroups}
        state={state}
        toggleDrawer={toggleDrawer}
        editId={editId}
      />
    </>
  );
};

export default OnboardingTasklist;
