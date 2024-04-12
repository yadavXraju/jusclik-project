import React from 'react';
import { IconButton, Typography, Tooltip, Card , Box} from '@mui/material';
// import { Box } from '@mui/system';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'views/common-section/WarningDialog';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import TableRowData from './TableRowData';
import DrawerAddNew from './DrawerAddNew';
import DrawerNewTask from './DrawerNewTask';
import CommonDataGrid from 'views/common-section/commonDataGrid';
import withParamDrawer from 'views/common-section/withParamDrawer';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import { useNavigate } from 'react-router-dom';

export default function BusDetails() {
  const [tableRows, setTableRows] = React.useState(TableRowData);
  const [modalOpen, setmodalOpen] = React.useState(false);
  const [deleteId, setdeleteId] = React.useState(null);
  const navigate = useNavigate();

  const Click = (id) => {
    navigate(`/erp/student-info-fee/transport/bus-details/${id}`);
  };

  const handleModalClose = () => {
    setmodalOpen(false);
  };
  const handleConfirmDelete = () => {
    const updatedRows = tableRows.filter((row) => row.id !== deleteId);
    setTableRows(updatedRows);
    setmodalOpen(false);
    setdeleteId(null);
  };

  // ========== function for handle delete row ===========
  const handleDeleteRow = (id) => {
    setdeleteId(id);
    setmodalOpen(true);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Completed':
        return { backgroundColor: 'rgba(147, 213, 166, 0.38)', color: 'rgb(0, 200, 83)' }; // Green color for Completed status
      case 'Pending':
        return { backgroundColor: 'rgb(251, 233, 231)', color: 'rgb(216, 67, 21)' }; // Yellow color for In Progress status
        case 'In Progress':
          return { backgroundColor: 'rgb(30, 136, 229, 0.2)', color: 'rgb(30, 136, 229)' }; // Yellow color for In Progress status
      default:
        return { backgroundColor: '#ffffff', color: '#000000' }; // Default colors
    }
  };

  const columns = [
    { field: 'taskno', headerName: 'Task Name', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'assignedto', headerName: 'Assigned To', flex: 1, minWidth: 130 },
    { field: 'duedate', headerName: 'Due Date', flex: 1, minWidth: 130, },
    {
      field: 'status', 
      headerName: 'Status', 
      flex: 1, 
      minWidth: 130, 
      renderCell: (params) => (
        <Box 
          sx={{ 
            backgroundColor: getStatusStyles(params.value).backgroundColor,
            color: getStatusStyles(params.value).color,
            padding: '6px 10px',
            borderRadius: '20px'
          }}
        >
          {params.value}
        </Box>
      )
    },
    
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 130,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box onClick={(event) => event.stopPropagation()}>
          <Tooltip title="Preview">
          <IconButton>
            <RemoveRedEyeTwoToneIcon  sx={{ color: 'rgb(124, 178, 221)' }} />
          </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
          <IconButton>
            <EditTwoToneIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
          <IconButton>
            <DeleteTwoToneIcon onClick={() => handleDeleteRow(params.row.id)} sx={{ color: '#f19e9e' }} />
          </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];
  const AddNewChecklist = withParamDrawer(DrawerAddNew);

const AddNewTask = withParamDrawer(DrawerNewTask);

  return (
    <>
      <Card sx={{padding:'16px'}}>
      <Box>
        <Box p={1} sx={{ borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between' }}>
          <Box sx={{display:'flex', alignItems:'end'}}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
              Withdrawal Checklist
            </Typography>
          </Box>
          <Box sx={{display:"flex"}}>
       <div style={{paddingRight:'5px'}}>
      <AddNewChecklist
        buttonLabel="Add New"
        drawerTitle="Withdrawal Checklist" 
      />
    </div>
    <div>
      <AddNewTask
        buttonLabel="Import New Task" 
        drawerTitle="Withdrawal Checklist" 
      />
    </div>
       </Box>
        </Box>
        <Box mt={3}>
          <CommonDataGrid
            className='scrollbar'
            rows={tableRows} columns={columns}  width="100%"
            onRowClick={(params) => Click(params.id)}
            checkboxSelection={false}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 50 }
              },
            }}
              
            pageSizeOptions={[10, 25, 50, 100]}
          />
        </Box>
      </Box>
      {/* ========= import warning dialog ========== */}
      <WarningDialog
        open={modalOpen}
        onClose={handleModalClose}
        onRowClick={(params) => Click(params.id)}
        contentText="Are you sure you want to delete?"
        onConfirm={handleConfirmDelete}
      />
      </Card>
    </>
  );
}
































// import React from 'react';
// import ParamTable from 'views/erp-common-component/ParamTable';
// // import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import { Typography, Box, } from '@mui/material';
// // import Drawer from '@mui/material/Drawer';
// import DrawerAddNew from './DrawerAddNew';
// import DrawerNewTask from './DrawerNewTask';
// import withParamDrawer from 'views/common-section/withParamDrawer';



// const tableHeadings = [
//   {
//     id: 2,
//     tabHeading: "Task Name"
//   },
//   {
//     id: 3,
//     tabHeading: "Assigned To"
//   },
//   {
//     id: 4,
//     tabHeading: "Due Date"
//   },
//   {
//     id: 5,
//     tabHeading: "Status"
//   },
//   {
//     id: 6,
//     tabHeading: "Action"
//   }
// ]

// const data = [
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
//   {
//     "Task Name": "Withdrawal Approval Principal",
//     "Assigned To": "Not Assigned",
//     "Due Date": "08-03-2024",
//     "Status" : "In Progress"
//   },
  
// ];


// const WithdrawalChecklist = () => {
// //   const handleChange=()=>{

// //   }
// // Wrap your component with the withParamDrawer HOC
// const AddNewChecklist = withParamDrawer(DrawerAddNew);

// const AddNewTask = withParamDrawer(DrawerNewTask);
//   return (
//     <>
//    <Box>
//    <Box
//         sx={{
//           paddingRight: '20px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           borderBottom: '1px solid rgba(224, 224, 224, 1)',
//           background: '#fff',
//           padding: '16px 24px',
//           width:'85%'
//         }}
//       >
//         <Box>
//         <Typography variant="h3">Withdrawal Checklist</Typography>
//         <Typography variant="h5" paddingTop={2}>Add a checklist of task that need to be completed as part of exit process.</Typography>
//         </Box>
//        <Box sx={{display:"flex"}}>
//        <div style={{paddingRight:'5px'}}>
//       <AddNewChecklist
//         buttonLabel="Add New" 
//         drawerTitle="Withdrawal Checklist" 
//       />
//     </div>
//     <div>
//       <AddNewTask
//         buttonLabel="Import New Task" 
//         drawerTitle="Withdrawal Checklist" 
//       />
//     </div>
//        </Box>
//       </Box>
//      <Box sx={{}}>
//      <ParamTable columns={tableHeadings} data={data} tablePaper={{borderRadius:'0',height:'auto'}} />
//      </Box>
//    </Box>
//     </>
//   )
// }

// export default WithdrawalChecklist;








