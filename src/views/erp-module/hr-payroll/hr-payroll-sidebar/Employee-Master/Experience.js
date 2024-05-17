import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton, TextField, Tooltip, Button, Box, Typography } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import WarningDialog from 'views/common-section/WarningDialog';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParameterizedDateComponent from 'views/common-section/ParamDateComponent';

const columns = [
  { id: 'organization', label: 'Organization', minWidth: 150 },
  { id: 'fromDate', label: 'From Date', minWidth: 150 },
  { id: 'toDate', label: 'To Date', minWidth: 150 },
  { id: 'workedAs', label: 'Worked As', minWidth: 150 },
  { id: 'totalExp', label: 'Total Exp. In (Years/months)', minWidth: 150 },
  { id: 'action', label: '', minWidth: 40, align: 'right' }
];

const initialRows = [
  { id: 1, organization: 'abc', fromDate: '', toDate: '', workedAs: '', totalExp: '' },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
];

export default function Experience({ disabled=false }) {
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
    const newEmptyRow = { id: newRowId, organization: '', fromDate: '', toDate: '', workedAs: '', totalExp: '' };
    setTableRows([...tableRows, newEmptyRow]);
  };

  const handleRowChange = (id, newValue, field) => {
    const updatedRows = tableRows.map((row) => (row.id === id ? { ...row, [field]: newValue } : row));
    setTableRows(updatedRows);
  };

  return (
    <>
      <Box mb={2} sx={{borderBottom:'1px solid #ccc'}}>
        <Typography p={1} variant='h4'>Experience</Typography>
      </Box>
      <Paper sx={{ width: { xs: '100%', md: '100%' }, overflow: 'hidden', borderRadius: 0, marginTop: { xs: 2, sm: 0 } }}>
        <TableContainer className="scrollbar" sx={{ maxHeight: 'calc(100vh - 220px)' }}>
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
                  <TableCell sx={{ fontWeight: 'bold', padding: '8px' }}>
                    <TextField
                      fullWidth
                      value={row.organization}
                      variant="outlined"
                      disabled={disabled}
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'organization')}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <ParameterizedDateComponent
                      value={row.fromDate}
                      disabled={disabled}
                      customStyle={{width:'100%'}}
                      onChange={(date) => handleRowChange(row.id, date ? date.format('DD-MM-YYYY') : '', 'fromDate')}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <ParameterizedDateComponent
                      value={row.toDate}
                      disabled={disabled}
                      customStyle={{width:'100%'}}
                      onChange={(e) => handleRowChange(row.id, e.format('DD-MM-YYYY'), 'toDate')}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      fullWidth
                      value={row.workedAs}
                      variant="outlined"
                      disabled={disabled}
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'workedAs')}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      fullWidth
                      value={row.totalExp}
                      variant="outlined"
                      disabled={disabled}
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'totalExp')}
                    />
                  </TableCell>

                  {disabled === false && (
                    <TableCell align="right" sx={{ padding: '8px' }}>
                      <Box onClick={(event) => event.stopPropagation()}>
                        <Tooltip title="Delete">
                          <IconButton size="small" onClick={() => handleDeleteRow(row.id)} sx={{ color: '#f19e9e' }}>
                            <DeleteTwoToneIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {disabled === false && (
          <Box p={1}>
            <Button variant="outlined" size="small" onClick={handleAddRow} startIcon={<AddOutlinedIcon />}>
              Add Row
            </Button>
          </Box>
        )}
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