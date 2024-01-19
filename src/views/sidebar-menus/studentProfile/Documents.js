import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


const columns = [
  { id: 'documenttitle', label: 'Document Title', minWidth: 170 },
  { id: 'discription', label: 'Description', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 170, align: 'right' },
  { id: 'lastupdated', label: 'LastUpdated', minWidth: 170, align: 'right' },
  { id: 'status', label: 'Verification Status', minWidth: 170, align: 'right' },
];

function createData(documenttitle, discription, lastupdated, status) {
  return { documenttitle, discription, lastupdated, status };
}

const rows = [
  createData('Code of Conduct', 'Organization Code of Conduct...', '13 Jan, 2020', 'true'),
  createData('Code of Conduct', 'Organization Code of Conduct...', '13 Jan, 2020', 'false'),
  createData('Code of Conduct', 'Organization Code of Conduct...', '13 Jan, 2020', 'true'),
  createData('Code of Conduct', 'Organization Code of Conduct...', '13 Jan, 2020', 'false'),
];

export default function Documents() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <Paper sx={{ width: '100%', overflow: 'hidden',borderRadius:0 }}>
      <TableContainer sx={{ maxHeight: 440 }} >
        <Table stickyHeader aria-label="sticky table" sx={{border: '1px solid #ccc'}} >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  <TableCell sx={{fontWeight:'bold'}}>
                    {row.documenttitle}
                  </TableCell>
                  <TableCell>
                    {row.discription}
                  </TableCell>
                  <TableCell align="right">
                    <Button  size='small'  onClick={() => handleButtonClick('uploadClick')}>Upload</Button>
                    <Button  size='small'  onClick={() => handleButtonClick('deleteClick')}>Delete</Button>
                  </TableCell>
                  <TableCell align="right">
                    {row.lastupdated}
                  </TableCell>
                  <TableCell align="right" sx={{color: row.status === 'true'? 'rgb(0, 200, 83)': 'rgb(216, 67, 21)'}}>
                    {<CheckCircleOutlineOutlinedIcon/>}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
