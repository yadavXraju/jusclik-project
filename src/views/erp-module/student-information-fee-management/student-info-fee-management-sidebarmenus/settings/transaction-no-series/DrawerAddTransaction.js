// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { IconButton, TextField, Tooltip, Button, Box } from '@mui/material';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import WarningDialog from 'views/common-section/WarningDialog';
// // import ParamTime from 'views/common-section/ParamTime';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// const columns = [
//   { id: 'seriesname', label: 'Series Name', minWidth: 250 },
//   { id: 'typeofseries', label: 'Type of Series', minWidth: 250 },
//   { id: 'prefix', label: 'Prefix', minWidth: 250 },
//   { id: 'starting', label: ' Starting', minWidth: 250,  },
//   { id: 'manage', label: '', minWidth: 40, align: 'right' }
// ];

// const initialRows = [
//   { id: 1, seriesname: 'TXN-2024-001', typeofseries: 'Invoice', prefix: 'DPS/[Joining Year]' ,starting: '0001'},
//   { id: 2, seriesname: 'TXN-2024-001', typeofseries: 'Fee Reciept', prefix: 'DPS/[Joining Year]',starting: '0001' },
//   { id: 3, seriesname: 'TXN-2024-001', typeofseries: 'Invoice', prefix: 'DPS/[Joining Year]',starting: '001' },
//   { id: 4, seriesname: 'TXN-2024-001', typeofseries: 'Admission No.', prefix: 'DPS/[Joining Year]',starting: '001' },
//   { id: 5, seriesname: 'TXN-2024-001', typeofseries: 'Invoice', prefix: 'DPS/[Joining Year]',starting: '01' }
// ];

// export default function Stoppage() {
//   const [tableRows, setTableRows] = React.useState(initialRows);
//   const [modalOpen, setModalOpen] = React.useState(false);
//   const [deleteId, setDeleteId] = React.useState(null);

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   const handleConfirmDelete = () => {
//     const updatedRows = tableRows.filter((row) => row.id !== deleteId);
//     setTableRows(updatedRows);
//     setDeleteId(null);
//     setModalOpen(false);
//   };

//   const handleDeleteRow = (id) => {
//     setDeleteId(id);
//     setModalOpen(true);
//   };

//   const handleAddRow = () => {
//     const newRowId = tableRows.length > 0 ? tableRows[tableRows.length - 1].id + 1 : 1;
//     const newEmptyRow = { id: newRowId, stoppage: '', pickTime: '', dropTime: '' };
//     setTableRows([...tableRows, newEmptyRow]);
//   };

//   const handleStoppageChange = (id, newValue, field) => {
//     const updatedRows = tableRows.map((row) => (row.id === id ? { ...row, [field]: newValue } : row));
//     setTableRows(updatedRows);
//   };

//   return (
//     <>
//       <Paper sx={{ width: {xs:'93vw', md:'100%'}, overflow: 'hidden', borderRadius: 0, marginTop: { xs: 2, sm: 0 } }}>
//         <TableContainer sx={{ maxHeight: 'calc(100vh - 220px)' }}>
//           <Table stickyHeader aria-label="sticky table" sx={{ border: '1px solid #ccc' }}>
//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, fontWeight: 'bold' }}>
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {tableRows.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell sx={{ fontWeight: 'bold', padding:'8px' }}>
//                     <TextField
//                       fullWidth
//                       value={row.seriesname}
//                       variant="outlined"
//                       onChange={(e) => handleStoppageChange(row.id, e.target.value, 'stoppage')}
//                     />
//                   </TableCell>
//                   <TableCell sx={{padding:'8px', width:'150px'}}>
//                  <TextField 
//                    value={row.typeofseries}
//                  fullWidth/>
//                   </TableCell>
//                   <TableCell sx={{padding:'8px', width:'150px' }}>
//                   <TextField
//                     value={row.prefix}
//                   fullWidth/>
//                   </TableCell>
//                   <TableCell sx={{padding:'8px', width:'150px' }}>
//                   <TextField
//                     value={row.starting}
//                   fullWidth/>
//                   </TableCell>
//                   <TableCell align="right" sx={{padding:'8px'}}>
//                     <Box onClick={(event) => event.stopPropagation()}>
//                       <Tooltip title="Delete">
//                         <IconButton size="small" onClick={() => handleDeleteRow(row.id)} sx={{ color: '#f19e9e' }}>
//                           <DeleteTwoToneIcon />
//                         </IconButton>
//                       </Tooltip>
//                     </Box>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <Box p={1}>
//         <Button variant="outlined" size='small' onClick={handleAddRow} startIcon={<AddOutlinedIcon/>}>Add Transaction</Button>
//         </Box>
//       </Paper>
//       {/* ========= Import warning dialog ========== */}
//       <WarningDialog
//         open={modalOpen}
//         onClose={handleModalClose}
//         contentText="Are you sure you want to delete?"
//         onConfirm={handleConfirmDelete}
//       />
//     </>
//   );
// }





import React, { useState } from 'react';
import { Box, Button,Grid ,Stack,TextField} from '@mui/material';
import SelectList from 'views/common-section/ParamSelectList';
// import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';


const DrawerAddTransaction=() => {

  const [addTask, setAddTask] = useState('');
 
const Task = [
  { value: 'admissionno.', label: 'Admission No.' },
  { value: 'feereciept', label: 'Fee Reciept' },
  { value: 'invoice', label: 'Invoice' }
];
const addTaskChange = (event) => {
  setAddTask(event.target.value);
 };



  return (
    <>
       <Box>
        {/* <Typography variant="h5" sx={{ paddingTop: '20px', paddingLeft:'8px' }}>
          What is the reason for withdrawal?
        </Typography> */}
        <Grid container>
        <Grid item xs={12} sx={{ paddingTop: '20px', paddingLeft: '8px', paddingRight: '8px' }}>
            <TextField label="Series Name" fullWidth />
          </Grid>
          <Grid mt={1} item xs={12} sx={{ paddingLeft:'8px', paddingRight:'8px', paddingTop:'14px' }}>
            <SelectList
              label="Type of Series"
              options={Task}
              value={addTask}
              onChange={addTaskChange}
              // size={isMobile ? 'small' : 'normal'}
              // customSytle={{ width: '30%' }}
            />
          </Grid>
          
          
          <Grid item xs={12} sx={{ paddingTop: '20px', paddingLeft: '8px', paddingRight: '8px' }}>
            <TextField label="Prefix" fullWidth />
          </Grid> 
          <Grid item xs={12} sx={{ paddingTop: '20px', paddingLeft: '8px', paddingRight: '8px' }}>
            <TextField label="Starting" fullWidth />
          </Grid>    
        </Grid>
        <Box sx={{paddingTop:'30px'}}>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Save Changes</Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
          </Box>
      </Box>
    </>
  );
};
export default DrawerAddTransaction;