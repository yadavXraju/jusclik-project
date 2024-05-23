// ======= Page Owner Vikash =========
import React from 'react'
import { Card, Box } from '@mui/material'
import { IconButton, Tooltip } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import rows from './LeaveTableData';
import WarningDialog from 'views/common-section/WarningDialog';
import CommonDataGrid from 'views/common-section/commonDataGrid';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';


const LeaveTable = () => {
//   const navigate = useNavigate();
  const [tableRows, setTableRows] = React.useState(rows);
//   const [currEditItem, setCurrEditItem] = React.useState({});

// const Click = (rowData) => {
//     navigate(`/erp/crm/contact/${rowData.id}`, { state: { rowData }});
//   };

//    // ========== function for handle Edit row ===========
//    const handleEditClick = (editItem) => {
//     setCurrEditItem(editItem);
//   };
 

  // ========= render error model for Delete row ==========
  const [modalOpen, setmodalOpen] = React.useState(false);
  const [deleteId, setdeleteId] = React.useState(null);

  const handleModalClose = () => {
    setmodalOpen(false);
  };
  const handleConfirmDelete = () => {
    const updatedRows = tableRows.filter((row) => row.id !== deleteId);
    setTableRows(updatedRows);
    setmodalOpen(false);
    setdeleteId(null)
  };

  // ========== function for handle delete row ===========
  const handleDeleteRow = (id) => {
    setdeleteId(id)
    setmodalOpen(true);
  };

  // ========= Data Grid Columns ==========
  const columns = [
    { field: 'contactNo', headerName: 'Emp. Code', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'firstName', headerName: 'Emp. Name', flex: 1, minWidth: 130 },
    { field: 'lastName', headerName: 'Department', flex: 1, minWidth: 130 },
    { field: 'leadOwner', headerName: 'Application No', flex: 1, minWidth: 130 },
    { field: 'email', headerName: 'Leave Type', flex: 1, minWidth: 130 },
    { field: 'mobile', headerName: 'App. Date', flex: 1, minWidth: 130 },
    { field: 'createdBy', headerName: 'Planned/Unplanned', flex: 1, minWidth: 130 },
    { field: 'description', headerName: 'Applied', flex: 1, minWidth: 130 },
    { field: 'status', headerName: 'Status', flex: 1, minWidth: 130 },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 130,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Preview">
          <IconButton>
            <RemoveRedEyeTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
          </IconButton>
          </Tooltip>
          <Tooltip >
          <IconButton onClick={(event) => event.stopPropagation()}>
             <EditTwoToneIcon/>
          </IconButton>
          
          </Tooltip>
          <Tooltip title="Delete">
          <IconButton onClick={(event) => event.stopPropagation()}>
            <DeleteTwoToneIcon onClick={() => handleDeleteRow(params.row.id)} sx={{ color: '#f19e9e' }} />
          </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];


  return (
    <>
    <Card sx={{padding:'16px'}}>
    <Box>
        <Box mt={3}>
          <CommonDataGrid
            rows={tableRows}
            columns={columns}
            onRowClick={(params) => Click(params.row)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 50 }
              }
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            checkboxSelection
          />
        </Box>
      </Box>
      {/* ========= import warning dialog ========== */}
      <WarningDialog
        open={modalOpen}
        onClose={handleModalClose}
        contentText="Are you sure you want to delete?"
        onConfirm={handleConfirmDelete}
      />
    </Card>
    </>
  )
}

export default LeaveTable