import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import EmployeeData from './EmployeeData';
import WarningDialog from 'views/common-section/WarningDialog';
import CommonDataGrid from 'views/common-section/commonDataGrid';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import EmployeeDrawer from './AddEmployeeDrawer';


export default function EmployeeTable() {
  const navigate = useNavigate();
  const [tableRows, setTableRows] = React.useState(EmployeeData);
  const [currEditItem, setCurrEditItem] = React.useState({});

  const Click = (rowData) => {
    navigate(`/erp/hr-payroll/employee-master/${rowData.id}`, { state: { rowData }});
  };

  // ========== function for handle Edit row ===========
   const handleEditClick = (editItem) => {
    setCurrEditItem(editItem);
  };
  
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
    { field: 'employeeId', headerName: 'Employee Id', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'firstName', headerName: 'First Name', flex: 1, minWidth: 130 },
    { field: 'lastName', headerName: 'Last Name', flex: 1, minWidth: 130 },
    // { field: 'ClassSection', headerName: 'Class/Section', flex: 1, minWidth: 100,
    //   valueGetter: (params) => `${params.row.class}-${params.row.Section}`
    // },
    { field: 'gender', headerName: 'Gender', flex: 1, minWidth: 130 },
    { field: 'dob', headerName: 'D.O.B', flex: 1, minWidth: 130 },
    { field: 'doj', headerName: 'Joining Date', flex: 1, minWidth: 130 },
    { field: 'designation', headerName: 'Designation', flex: 1, minWidth: 130 },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 130 },
    { field: 'mobile', headerName: 'Mobile', flex: 1, minWidth: 130 },
    { field: 'department', headerName: 'Department', flex: 1, minWidth: 130 },
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
            {/* <EditTwoToneIcon/> */}
            <EmployeeDrawer editIcon="true" currEditItem={currEditItem} handleClick={() => handleEditClick(params.row)} />
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
      <Box>
        <Box mt={3}>
          <CommonDataGrid
            rows={tableRows}
            columns={columns} // Use state variable for columns
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
    </>
  );
}

