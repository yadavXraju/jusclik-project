// ======= Page Owner Vikash =========
// ======= Return Transport Table =========
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import rows from './Sample-TransportTableData';
import WarningDialog from 'components/WarningDialog';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';


export default function TransportTable() {
  const navigate = useNavigate();
  const [tableRows, setTableRows] = React.useState(rows);

//   const Click = (rowData) => {
//     navigate('/erp/student-info-fee/student-master/admission-form', { state: { rowData } });
//   };
const Click = (id) => {
    navigate(`/erp/student-info-fee/transport/allocation/${id}`);
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
    { field: 'AdmNo', headerName: 'Admission No.', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'StudentName', headerName: 'Name', flex: 1, minWidth: 130 },
    { field: 'ClassSection', headerName: 'Class/Section', flex: 1, minWidth: 100, 
      valueGetter: (params) => `${params.row.class}-${params.row.Section}` 
    },
    { field: 'EffectFrom', headerName: 'Effect From', flex: 1, minWidth: 130 },
    { field: 'PickRoute', headerName: 'Pick Route', flex: 1, minWidth: 130 },
    { field: 'DropRoute', headerName: 'Drop Route', flex: 1, minWidth: 130 },
    { field: 'TransportMonths', headerName: 'Transport Months', flex: 1, minWidth: 130 },
    { field: 'FeeSlab', headerName: 'Fee Slab', flex: 1, minWidth: 130 },
    { field: 'PickStop', headerName: 'Pick Stop', flex: 1, minWidth: 130 },
    { field: 'DropStop', headerName: 'Drop Stop', flex: 1, minWidth: 130 },
    { field: 'TransportLeftDate', headerName: 'Transport Left Date', flex: 1, minWidth: 130 },
    { field: 'Remarks', headerName: 'Remarks', flex: 1, minWidth: 130 },
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
          <Tooltip title="Edit">
          <IconButton onClick={(event) => event.stopPropagation()}>
            <EditTwoToneIcon  />
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
          <DataGrid
            rows={tableRows}
            columns={columns}
            onRowClick={(params) => Click(params.id)}
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