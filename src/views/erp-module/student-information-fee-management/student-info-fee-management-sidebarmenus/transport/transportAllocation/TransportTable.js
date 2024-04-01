import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
// import Typography from '@mui/material/Typography';
// import Popover from '@mui/material/Popover';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import rows from './TransportTableData';
import WarningDialog from 'views/common-section/WarningDialog';
//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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
    { field: 'class', headerName: 'Class', flex: 1, minWidth: 100 },
    { field: 'Section', headerName: 'Section', flex: 1, minWidth: 100 },
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
          <IconButton>
            <RemoveRedEyeTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
          </IconButton>
          <IconButton onClick={(event) => event.stopPropagation()}>
            <EditTwoToneIcon  />
          </IconButton>
          <IconButton onClick={(event) => event.stopPropagation()}>
            <DeleteTwoToneIcon onClick={() => handleDeleteRow(params.row.id)} sx={{ color: '#f19e9e' }} />
          </IconButton>
        </Box>
      )
    }
  ];


  return (
    <>
      <Box>
        {/* <Box sx={{ borderBottom: '1px solid #ccc' }}>
          <Grid container spacing={2} p={2} sx={{ alignItems: 'end' }}>
            <Grid item xs={12} sm={8} lg={8}>
              <Box sx={{ paddingBottom: '0px' }}>
                <Typography variant="h4" sx={{ pb: '0px' }}>
                  Transport Details
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                    
                <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                  <SearchOutlinedIcon />
                </IconButton>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <IconButton sx={{ background: '#cccccc54' }} {...bindTrigger(popupState)}>
                        <MoreVertTwoToneIcon />
                      </IconButton>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center'
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center'
                        }}
                      >
                        <Typography sx={{ p: 1, display: 'Grid' }}>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Import Contact</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Download Contact</Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            </Grid>
          </Grid>
        </Box> */}
        <Box mt={3}>
          <DataGrid
            rows={tableRows}
            columns={columns} // Use state variable for columns
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