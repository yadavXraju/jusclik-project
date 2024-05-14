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
import SelectList from 'views/common-section/ParamSelectList';


const columns = [
  { id: 'programmes', label: 'Programmes', minWidth: 150 },
  { id: 'school', label: 'School/College/Institution', minWidth: 150 },
  { id: 'university', label: 'Board/University', minWidth: 150 },
  { id: 'subjects', label: 'Subjects', minWidth: 150 },
  { id: 'marks', label: 'Marks(%)', minWidth: 150 },
  { id: 'medium', label: 'Medium', minWidth: 150 },
  { id: 'passingYear', label: 'Passing Year', minWidth: 150,  },
  { id: 'action', label: '', minWidth: 40, align:'right' },
];

const initialRows = [
  { id: 1, programmes:'abc', school:'MBS School', university:'Delhi',subjects:'Computer', marks:'80%', medium:'English', passingYear:'2014-2015' },
  { id: 2,  },
  { id: 3,  },
  { id: 4,  },
  { id: 5,  },
];

export default function Education() {
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
    const newEmptyRow = { id: newRowId, programmes:'', school:'', university:'',subjects:'', marks:'', medium:'', passingYear:'' };
    setTableRows([...tableRows, newEmptyRow]);
  };

  const handleRowChange = (id, newValue, field) => {
    const updatedRows = tableRows.map((row) => (row.id === id ? { ...row, [field]: newValue } : row));
    setTableRows(updatedRows);
  };


  // ========= state for Passing Year ============
  const mediumOptions = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Sanskrit', label: 'Sanskrit' },
    { value: 'French', label: 'French' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'German', label: 'German' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Science', label: 'Science' },
    { value: 'Assamese', label: 'Assamese' },
    { value: 'Bilingual', label: 'Bilingual' },
    { value: 'Punjabi', label: 'Punjabi' },
  ];

   // ========= state for Passing Year ============
   const PassingYearOptions = [
     { value: '2009-2010', label: '2009-2010' },
     { value: '2010-2011', label: '2010-2011' },
     { value: '2011-2012', label: '2011-2012' },
     { value: '2012-2013', label: '2012-2013' },
     { value: '2014-2015', label: '2014-2015' },
     { value: '2015-2016', label: '2015-2016' },
     { value: '2016-2017', label: '2016-2017' },
     { value: '2017-2018', label: '2017-2018' },
   ];

  return (
    <>
        <Box mb={2} sx={{borderBottom:'1px solid #ccc'}}>
        <Typography p={1} variant='h4'>Education</Typography>
      </Box>
      <Paper sx={{ width: {xs:'93vw', md:'100%'}, overflow: 'hidden', borderRadius: 0, marginTop: { xs: 2, sm: 0 } }}>
        <TableContainer className='scrollbar' sx={{ maxHeight: 'calc(100vh - 220px)' }}>
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
                      value={row.programmes}
                      variant="outlined"
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'programmes')}
                    />
                  </TableCell>
                  <TableCell sx={{padding:'8px'}}>
                  <TextField
                      fullWidth
                      value={row.school}
                      variant="outlined"
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'school')}
                    />
                  </TableCell>
                  <TableCell sx={{padding:'8px'}}>
                  <TextField
                      fullWidth
                      value={row.university}
                      variant="outlined"
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'university')}
                    />
                  </TableCell>
                  <TableCell sx={{padding:'8px'}}>
                  <TextField
                      fullWidth
                      value={row.subjects}
                      variant="outlined"
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'subjects')}
                    />
                  </TableCell>
                  <TableCell sx={{padding:'8px' }}>
                  <TextField
                      fullWidth
                      value={row.marks}
                      variant="outlined"
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'marks')}
                    />
                  </TableCell>
                  <TableCell sx={{padding:'8px', width:'150px'}}>
                    <SelectList 
                      hiddenLabel
                      options={mediumOptions}
                      value={row.medium}
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'medium')}
                    />
                  </TableCell>
                  <TableCell sx={{padding:'8px', width:'150px'}}>
                    <SelectList 
                      hiddenLabel
                      options={PassingYearOptions}
                      value={row.passingYear}
                      onChange={(e) => handleRowChange(row.id, e.target.value, 'passingYear')}
                    />
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
        <Button variant="outlined" size='small' onClick={handleAddRow} startIcon={<AddOutlinedIcon/>}>Add Row</Button>
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