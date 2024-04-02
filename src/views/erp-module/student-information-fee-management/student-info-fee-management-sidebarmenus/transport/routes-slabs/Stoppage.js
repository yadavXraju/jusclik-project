import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton, TextField, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ParamTime from 'views/common-section/ParamTime';
import WarningDialog from 'views/common-section/WarningDialog';

const columns = [
  { id: 'stoppage', label: 'Stoppage', minWidth: 200 },
  { id: 'pickTime', label: 'Pick Time', minWidth: 200 },
  { id: 'dropTime', label: 'Drop Time', minWidth: 200 },
  { id: 'manage', label: '', minWidth: 100, align: 'right' }
];

function createData(id, stoppage, pickTime, dropTime) {
  return { id, stoppage, pickTime, dropTime };
}

const rows = [
  createData(1, 'Delhi', '10 AM', '4 PM'),
  createData(2, 'Dwarka', '10 AM', '4 PM'),
  createData(3, 'Noida', '10 AM', '4 PM'),
  createData(4, 'Gurgoan', '10 AM', '4 PM')
];

export default function Stoppage() {
  const [tableRows, setTableRows] = React.useState(rows);
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
    // Update rows state or perform deletion action as needed
  };

  const handleDeleteRow = (id) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  const handleStoppageChange = (id, newValue) => {
    const updatedRows = tableRows.map((row) => (row.id === id ? { ...row, stoppage: newValue } : row));
    setTableRows(updatedRows);
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 0, marginTop: { xs: 2, sm: 0 } }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
              {tableRows.map((row, rowIndex) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  <TableCell sx={{ fontWeight: 'bold' }}>
                    {
                      <TextField
                        fullWidth
                        value={row.stoppage}
                        variant="outlined"
                        onChange={(e) => handleStoppageChange(row.id, e.target.value)}
                      />
                    }
                  </TableCell>
                  <TableCell>{<ParamTime customStyle={{ paddingTop: '0px' }} />}</TableCell>
                  <TableCell>{<ParamTime customStyle={{ paddingTop: '0px' }} />}</TableCell>
                  <TableCell align="right">
                    {
                      <Box onClick={(event) => event.stopPropagation()}>
                        {/* <Button variant="contained" sx={{ padding: '4px 10px' }}>
                          Manage
                        </Button> */}
                        <Tooltip title="Delete">
                          <IconButton size="small">
                            <DeleteTwoToneIcon onClick={() => handleDeleteRow(row.id)} sx={{ color: '#f19e9e' }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
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
