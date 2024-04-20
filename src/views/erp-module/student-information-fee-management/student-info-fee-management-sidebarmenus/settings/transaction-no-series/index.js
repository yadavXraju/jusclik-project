import React from 'react';
import { IconButton, Typography, Tooltip, Card , Box} from '@mui/material';
// import { Box } from '@mui/system';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'views/common-section/WarningDialog';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import TableRowData from './TableRowData';
import DrawerAddTransaction from './DrawerAddTransaction';
// import DrawerNewTask from './DrawerNewTask';
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

 

  const columns = [
    { field: 'seriesname', headerName: 'Series Name', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'typeofseries', headerName: 'Type of Series', flex: 1, minWidth: 130 },
    { field: 'prefix', headerName: 'Prefix', flex: 1, minWidth: 130, },
    { field: 'starting', headerName: 'Starting', flex: 1, minWidth: 130, },
    
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
  const AddNewChecklist = withParamDrawer(DrawerAddTransaction);

  return (
    <>
      <Card sx={{padding:'16px'}}>
      <Box>
        <Box p={1} sx={{ borderBottom: '1px solid #ccc', display:'flex', justifyContent:'space-between' }}>
          <Box sx={{display:'flex', alignItems:'end'}}>
            <Typography variant="h4" sx={{ pb: '0px' }}>
              Transaction Number Series
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
       <div style={{paddingRight:'5px'}}>
      <AddNewChecklist
        buttonLabel="Add Transaction Series"
        drawerTitle="Add Transaction Number Series" 
  
      />
    </div>
       </Box>
        </Box>
        <Box mt={3}>
          <CommonDataGrid
            className='scrollbar'
            rows={tableRows} columns={columns}  width="100%"
            // onRowClick={(params) => Click(params.id)}
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

