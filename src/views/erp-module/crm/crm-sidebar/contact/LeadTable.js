import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import rows from './LeadTableData';
import WarningDialog from 'views/common-section/WarningDialog';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CommonDataGrid from 'views/common-section/commonDataGrid';
// import EditLead from './EditLead';
import AddContactDrawer from './AddContactDrawer';


export default function ContactTable() {
  const navigate = useNavigate();
  const [tableRows, setTableRows] = React.useState(rows);
  const [currEditItem, setCurrEditItem] = React.useState({});

const Click = (rowData) => {
    navigate(`/erp/crm/contact/${rowData.id}`, { state: { rowData }});
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
    { field: 'contactNo', headerName: 'Lead No.', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'firstName', headerName: 'First Name', flex: 1, minWidth: 130 },
    { field: 'lastName', headerName: 'Last Name', flex: 1, minWidth: 130 },
    // { field: 'ClassSection', headerName: 'Class/Section', flex: 1, minWidth: 100,
    //   valueGetter: (params) => `${params.row.class}-${params.row.Section}`
    // },
    { field: 'leadOwner', headerName: 'Lead Owner', flex: 1, minWidth: 130 },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 130 },
    { field: 'mobile', headerName: 'Mobile', flex: 1, minWidth: 130 },
    { field: 'createdBy', headerName: 'Created By', flex: 1, minWidth: 130 },
    { field: 'description', headerName: 'Description', flex: 1, minWidth: 130 },
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
            <AddContactDrawer editIcon={true} currEditItem={currEditItem} handleClick={() => handleEditClick(params.row)} />
            {/* <EditLead currEditItem={currEditItem} handleClick={() => handleEditClick(params.row)}/> */}
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
