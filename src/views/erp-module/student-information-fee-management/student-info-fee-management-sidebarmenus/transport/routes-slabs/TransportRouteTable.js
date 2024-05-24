// ======= Page Owner Vikash =========
// ======= Return Transport Route Table =========
import React from 'react';
import { IconButton, Typography, Switch, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'components/WarningDialog';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import RouteData from './Sample-RoutesData';
import RoutesFormDrawer from './RoutesFormDrawer';
import CommonDataGrid from 'components/commonDataGrid';
//import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
//import RoutesManageDrawer from './RoutesManageDrawer';

export default function TransportRouteTable() {
  //const navigate = useNavigate();
  const [tableRows, setTableRows] = React.useState(RouteData);

  // const Click = (id) => {
  //     navigate(`/erp/student-info-fee/transport/allocation/${id}`);
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
    setdeleteId(null);
  };

  // ========== function for handle delete row ===========
  const handleDeleteRow = (id) => {
    setdeleteId(id);
    setmodalOpen(true);
  };

  // ========= Data Grid Columns ==========
  const columns = [
    { field: 'routeName', headerName: 'Route Name', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'schedule', headerName: 'Schedule', flex: 1, minWidth: 130 },
    { 
        field: 'pickTimeRange', 
        headerName: 'Pick Time Range',
        flex: 1,
        minWidth: 130,
        valueGetter: (params) => `${params.row.pickstarttime} - ${params.row.pickendtime}`,
      },
      { 
        field: 'dropTimeRange', 
        headerName: 'Drop Time Range', 
        flex: 1,
        minWidth: 130,
        valueGetter: (params) => `${params.row.dropstarttime} - ${params.row.dropendtime}`,
      },
    { field: 'seatingCapacity', headerName: 'Seating Capacity', flex: 1, minWidth: 100 },
    { field: 'attachSlab', headerName: 'Attach Bus', flex: 1, minWidth: 100 },
    { field: 'classes', headerName: 'Classes', flex: 1, minWidth: 100 },
    {field: 'status',
    headerName: 'Status',
    flex: 1,
    minWidth: 100,
    renderCell: (params) => (
      <Box display="flex" alignItems="center">
        <Switch checked={params.value === 'Active'} disabled />
      </Box>
    )},

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
      <Box>
        <Box p={1} sx={{ borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between' }}>
          <Box sx={{display:'flex', alignItems:'end'}}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
              Route Details
            </Typography>
          </Box>
          <Box>
            <RoutesFormDrawer/>
          </Box>
        </Box>
        <Box mt={3}>
          <CommonDataGrid
            rows={tableRows} columns={columns}  width="100%"
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 50 }
              }
            }}
            pageSizeOptions={[10, 25, 50, 100]}
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
