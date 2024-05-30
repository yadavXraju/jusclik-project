// ======= Page Owner Vikash =========
// ======= Render DataGrid Table for Bus Details ========
import React from 'react';
import { IconButton, Typography, Tooltip, Card } from '@mui/material';
import { Box } from '@mui/system';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'components/WarningDialog';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import BusDetailsData from './Sample-BusDetailsData';
import CommonDataGrid from 'components/table-data-grid/DataGrid';
import BusDetailsDrawer from './BusDetailsDrawer';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import { useNavigate } from 'react-router-dom';

export default function BusDetails() {
  const [tableRows, setTableRows] = React.useState(BusDetailsData);
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

  const columns = [
    { field: 'registrationNo', headerName: 'Registration No', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'seatingCapacity', headerName: 'Seating Capacity', flex: 1, minWidth: 130 },
    { field: 'ownerName', headerName: 'Owner Name', flex: 1, minWidth: 130, },
    { field: 'ownerMobile', headerName: 'Owner Mobile', flex: 1, minWidth: 130, },
    { field: 'driverName', headerName: 'Driver Name', flex: 1, minWidth: 130, },
    { field: 'driverMobile', headerName: 'Driver mobile', flex: 1, minWidth: 130, },
    { field: 'conductorName', headerName: 'Conductor Name', flex: 1, minWidth: 130, },
    { field: 'conductorMobile', headerName: 'Conductor mobile', flex: 1, minWidth: 130, },
    { field: 'attendantName', headerName: 'Attendant Name', flex: 1, minWidth: 130,  },
    { field: 'attendantMobile', headerName: 'Attendant Mobile', flex: 1, minWidth: 130,  },
    { field: 'inchargeName', headerName: 'Incharge Name', flex: 1, minWidth: 130, },
    { field: 'inchargeMobile', headerName: 'Incharge Mobile', flex: 1, minWidth: 130, },
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
            <RemoveRedEyeTwoToneIcon onClick={() => Click(params.row.id)} sx={{ color: 'rgb(124, 178, 221)' }} />
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

  return (
    <>
      <Card sx={{padding:'16px'}}>
      <Box>
        <Box p={1} sx={{ borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between' }}>
          <Box sx={{display:'flex', alignItems:'end'}}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
              Bus Details
            </Typography>
          </Box>
          <Box>
            <BusDetailsDrawer/>
          </Box>
        </Box>
        <Box mt={3}>
          <CommonDataGrid
            className='scrollbar'
            rows={tableRows} columns={columns}  width="100%"
            onRowClick={(params) => Click(params.id)}
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
