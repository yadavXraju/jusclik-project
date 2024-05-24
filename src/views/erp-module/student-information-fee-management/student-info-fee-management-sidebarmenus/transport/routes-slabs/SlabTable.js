// ======= Page Owner Vikash =========
// ======= Return Slab Details Table  =========
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'components/WarningDialog';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SlabTableData from './Sample-SlabTableData';
import SlabFormDrawer from './SlabFormDrawer';

export default function SlabTable() {
  const [tableRows, setTableRows] = React.useState(SlabTableData);

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
    setdeleteId(null);
  };

  // ========== function for handle delete row ===========
  const handleDeleteRow = (id) => {
    setdeleteId(id);
    setmodalOpen(true);
  };

  // ========= Data Grid Columns ==========
  const columns = [
    { field: 'slabName', headerName: 'Slab Name', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'amount', headerName: 'Amount', flex: 1, minWidth: 130 },
    { field: 'yearUpto', headerName: 'Academic Year Upto', flex: 1, minWidth: 130 },
    { field: 'createdBy', headerName: 'Created by', flex: 1, minWidth: 100 },
    { field: 'createdOn', headerName: 'Created On', flex: 1, minWidth: 100 },

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
          <Tooltip title="Edit">
          <IconButton onClick={(event) => event.stopPropagation()}>
            <EditTwoToneIcon />
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
        <Box p={1} sx={{ borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between' }}>
          <Box sx={{display:'flex', alignItems:'end'}}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
              Slab Details
            </Typography>
          </Box>
          <Box>
            <SlabFormDrawer/>
          </Box>
        </Box>
        <Box mt={3}>
          <DataGrid
            rows={tableRows}
            columns={columns} // Use state variable for columns
            //onRowClick={(params) => Click(params.id)}
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
