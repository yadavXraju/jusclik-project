// ======= Page Owner Vikash =========
// ======= Return Stoppage Details Table =========
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton, TextField, Tooltip, Button, Box } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'components/WarningDialog';
import ParamTime from 'components/ui/custom-input/Time';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const columns = [
  { id: 'stoppage', label: 'Stoppage', minWidth: 300 },
  { id: 'pickTime', label: 'Pick Time', minWidth: 100 },
  { id: 'dropTime', label: 'Drop Time', minWidth: 100 },
  { id: 'manage', label: '', minWidth: 40, align: 'right' }
];

const initialRows = [
  { id: 1, stoppage: 'Delhi', pickTime: '10 AM', dropTime: '4 PM' },
  { id: 2, stoppage: 'Dwarka', pickTime: '10 AM', dropTime: '4 PM' },
  { id: 3, stoppage: 'Noida', pickTime: '10 AM', dropTime: '4 PM' },
  { id: 4, stoppage: 'Gurgoan', pickTime: '10 AM', dropTime: '4 PM' },
  { id: 5, stoppage: 'Hissar', pickTime: '10 AM', dropTime: '4 PM' }
];

export default function Stoppage() {
  const [tableRows, setTableRows] = React.useState(initialRows);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleConfirmDelete = () => {
    const updatedRows = tableRows.filter((row) => row.id !== deleteId);
    setTableRows(updatedRows);
    setDeleteId(null);
    setModalOpen(false);
  };

  const handleDeleteRow = (id) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  const handleAddRow = () => {
    const newRowId = tableRows.length > 0 ? tableRows[tableRows.length - 1].id + 1 : 1;
    const newEmptyRow = { id: newRowId, stoppage: '', pickTime: '', dropTime: '' };
    setTableRows([...tableRows, newEmptyRow]);
  };

  const handleStoppageChange = (id, newValue, field) => {
    const updatedRows = tableRows.map((row) => (row.id === id ? { ...row, [field]: newValue } : row));
    setTableRows(updatedRows);
  };

  return (
    <>
      <Paper sx={{ width: {xs:'93vw', md:'100%'}, overflow: 'hidden', borderRadius: 0, marginTop: { xs: 2, sm: 0 } }}>
        <TableContainer sx={{ maxHeight: 'calc(100vh - 220px)' }}>
          <Table stickyHeader aria-label="sticky table" sx={{ border: '1px solid #ccc' }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, fontWeight: 'bold' }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ fontWeight: 'bold', padding:'8px' }}>
                    <TextField
                      fullWidth
                      value={row.stoppage}
                      variant="outlined"
                      onChange={(e) => handleStoppageChange(row.id, e.target.value, 'stoppage')}
                    />
                  </TableCell>
                  <TableCell sx={{padding:'8px', width:'150px'}}>
                  <ParamTime customStyle={{ paddingTop: '0px' }} onChange={(e) => handleStoppageChange(row.id, e.target.value, 'pickTime')} />
                  </TableCell>
                  <TableCell sx={{padding:'8px', width:'150px' }}>
                  <ParamTime customStyle={{ paddingTop: '0px' }} onChange={(e) => handleStoppageChange(row.id, e.target.value, 'dropTime')} />
                  </TableCell>
                  <TableCell align="right" sx={{padding:'8px'}}>
                    <Box onClick={(event) => event.stopPropagation()}>
                      <Tooltip title="Delete">
                        <IconButton size="small" onClick={() => handleDeleteRow(row.id)} sx={{ color: '#f19e9e' }}>
                          <DeleteTwoToneIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box p={1}>
        <Button variant="outlined" size='small' onClick={handleAddRow} startIcon={<AddOutlinedIcon/>}>Stoppage</Button>
        </Box>
      </Paper>
      {/* ========= Import warning dialog ========== */}
      <WarningDialog
        open={modalOpen}
        onClose={handleModalClose}
        contentText="Are you sure you want to delete?"
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}