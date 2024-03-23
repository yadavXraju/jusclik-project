import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, IconButton, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Drawer from '@mui/material/Drawer';
//import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
//import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import AdmissionDrawer from './AdmissionDrawer';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
//import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import useDrawer from 'hooks/useDrawer';
import rows from './AdmissionTableData';
import EditDrawer from './EditDrawer';
import FilterStudents from 'views/erp-module/student-information-fee-management/student-info-fee-management-sidebarmenus/reports/common-report-section/filter-and-sort/Filter';
import WarningDialog from 'views/common-section/WarningDialog';
//import {Dialog, DialogTitle , DialogContent ,DialogContentText ,DialogActions } from '@mui/material';


export default function AdmissionTable() {
  const navigate = useNavigate();
  const [tableRows, setTableRows] = React.useState(rows);
  const [currEditItem, setCurrEditItem] = React.useState({});
  const {anchor,toggleDrawer}=useDrawer();
  //const { anchor, toggleDrawer } = useDrawer();
  // const handleRowClick = () => {
  //   navigate(`../registration`);
  // };

  const Click = (rowData) => {
    navigate('../admission-form/', { state: { rowData } });
  };

  // ========== function for handle Edit row ===========
  const handleEditClick = (editItem) => {
    // console.log(editItem)
    // setCurrEditItem({ ...currEditItem, ...editItem });
    setCurrEditItem(editItem);
  };

  // useEffect(() => {
  //   // console.log(currEditItem);
  // },[currEditItem]);

   // ========= render error model for duplicate date ==========
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
    // handleModalOpen();
    setdeleteId(id)
    setmodalOpen(true);
    // const updatedRows = tableRows.filter((row) => row.id !== id);
    // setTableRows(updatedRows);
  };

  const columns = [
    { field: 'AdmNo', headerName: 'Adm No.', type: 'number', flex: 1, minWidth: 130, align: 'left', headerAlign: 'left' },
    { field: 'AdmDate', headerName: 'Adm Date', flex: 1, minWidth: 130 },
    { field: 'StudentName', headerName: 'Name', flex: 1, minWidth: 130 },
    { field: 'class', headerName: 'Class', flex: 1, minWidth: 130 },
    { field: 'DOB', headerName: 'D.O.B', flex: 1, minWidth: 130 },
    { field: 'Studentcategory', headerName: 'Category', flex: 1, minWidth: 130 },
    { field: 'House', headerName: 'House', flex: 1, minWidth: 130 },
    { field: 'Status', headerName: 'Status', flex: 1, minWidth: 130 },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 130,
      renderCell: (params) => (
        <Box>
          <IconButton>
            <RemoveRedEyeTwoToneIcon sx={{ color: 'rgb(124, 178, 221)' }} />
          </IconButton>
          <IconButton onClick={(event) => event.stopPropagation()}>
            {/* <EditTwoToneIcon onClick={handleEdit} /> */}
            <EditDrawer currEditItem={currEditItem} handleClick={() => handleEditClick(params.row)} />
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
      <Card>
      <Box sx={{ borderBottom: '1px solid #ccc' }}>
        <Grid container spacing={2} p={2} sx={{ alignItems: 'end' }}>
          <Grid item xs={12} sm={8} lg={8}>
            <Box sx={{ paddingBottom: '0px' }}>
              <Typography variant="h4" sx={{ pb: '0px' }}>
                Students List
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
              {/* <Button sx={{ mr: 1 }} onClick={Click} variant="outlined" startIcon={<AddOutlinedIcon />}>
                Add Student
              </Button> */}
              <AdmissionDrawer />
              <IconButton sx={{ marginRight: '8px', background: '#cccccc54' }}>
                <FilterListRoundedIcon onClick={toggleDrawer('right',true)} />
                <Drawer
                  anchor="right"
                  open={anchor.right}
                  onClose={toggleDrawer('right', false)}
                >
                   <Box sx={{ width: { xs: '100%', sm: 650 }, padding: 2 }} role="presentation">
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
                            <Typography variant="h4">Filter</Typography>
                            <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
                                Close
                            </Button> 
                        </Box> 
                        <FilterStudents />
                    </Box>
                </Drawer>
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
      </Box>
      <Box p={2}>
        <DataGrid
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
    </Card>
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












// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Card, IconButton, Button, Grid } from '@mui/material';
// import { Box } from '@mui/system';
// import { useNavigate } from 'react-router-dom';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
// import Typography from '@mui/material/Typography';
// import Popover from '@mui/material/Popover';
// import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

// const columns = [
//   // { field: 'id', headerName: 'ID', flex: 1 },
//   { field: 'AdmNo', headerName: 'Adm No.', type: 'number', flex: 1, align: 'left', headerAlign: 'left' },
//   { field: 'AdmDate', headerName: 'Adm Date', flex: 1 },
//   { field: 'StudentName', headerName: 'Name', flex: 1 },
//   { field: 'class', headerName: 'Class', flex: 1 },
//   { field: 'DOB', headerName: 'D.O.B', flex: 1 },
//   { field: 'Studentcategory', headerName: 'Category', flex: 1 },
//   { field: 'House', headerName: 'House', flex: 1 },
//   { field: 'Status', headerName: 'Status', flex: 1 },
//   {
//     field: 'Action',
//     headerName: 'Action',
//     flex: 1,
//     renderCell: () => (
//       <Box>
//         <IconButton onClick={(event) => event.stopPropagation()}>
//           <EditTwoToneIcon />
//         </IconButton>
//         <IconButton onClick={(event) => event.stopPropagation()}>
//           <DeleteTwoToneIcon sx={{ color: '#f19e9e' }} />
//         </IconButton>
//       </Box>
//     )
//   }
// ];

// export default function AdmissionTable() {
//   const navigate = useNavigate(); // Import useNavigate hook

//   const handleRowClick = () => {
//     // Navigate to the student details page with the ID parameter
//     navigate(`../registration`);
//   };

//   const Click = () => {
//     navigate('../admission-form');
//   };

//   return (
//     <Card>
//       <Box sx={{borderBottom:'1px solid #ccc'}}>
//       <Grid container spacing={2} p={2} sx={{ alignItems: 'end' }}>
//         <Grid item xs={12} sm={8} lg={8}>
//           <Box sx={{paddingBottom:'0px'}}>
//             <Typography variant='h4' sx={{pb:'0px'}}>Students List</Typography>
//           </Box>
//         </Grid>

//         <Grid item xs={12} sm={4} lg={4}>
//           <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
//             <Button sx={{mr:1}} onClick={Click} variant="outlined" startIcon={<AddOutlinedIcon />}>
//               Add Student
//             </Button>
//             <IconButton sx={{marginRight:'8px', background:'#cccccc54'}}>
//             <FilterListRoundedIcon />
//             </IconButton>
//             <PopupState variant="popover" popupId="demo-popup-popover">
//                       {(popupState) => (
//                         <div>
//                           <IconButton  sx={{background:'#cccccc54',}} {...bindTrigger(popupState)}>
//                             <MoreVertTwoToneIcon />
//                           </IconButton>
//                           <Popover
//                             {...bindPopover(popupState)}
//                             anchorOrigin={{
//                               vertical: 'bottom',
//                               horizontal: 'center',
//                             }}
//                             transformOrigin={{
//                               vertical: 'top',
//                               horizontal: 'center',
//                             }}
//                           >
//                             <Typography sx={{ p: 1, display: 'Grid' }}>
//                               <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Import Contact</Button>
//                               <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Download Contact</Button>
//                             </Typography>
//                           </Popover>
//                         </div>
//                       )}
//             </PopupState>
//           </div>
//         </Grid>
//       </Grid>
//       </Box>
//       <Box p={2}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           onRowClick={handleRowClick}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 50 }
//             }
//           }}
//           pageSizeOptions={[10, 25, 50, 100]}
//           checkboxSelection
//           // onColumnOrderChange={}

//         />
//       </Box>
//     </Card>
//   );
// }
