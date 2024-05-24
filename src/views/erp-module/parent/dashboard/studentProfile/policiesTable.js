// ======= Page Owner Vikash =========
// ======= Return Policy Table =========
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Pagination from 'components/table-data-grid/Pagination';

const columns = [
  { id: 'documenttitle', label: 'DOCUMENT TITLE', minWidth: 170 },
  { id: 'discription', label: 'DESCRIPTION', minWidth: 100 },
  { id: 'action', label: 'STATUS', minWidth: 170, align: 'right' },
  { id: 'lastupdated', label: 'LAST UPDATED', minWidth: 170, align: 'right' },
  { id: 'status', label: 'VIEW', minWidth: 170, align: 'right' },
];

function createData(documenttitle, discription, status, lastupdated) {
  return { documenttitle, discription, status, lastupdated };
}

const rows = [
  createData('Code of Conduct', 'Organization Code of Conduct...', 'true', '13 Jan, 2020'),
  createData('Code of Conduct', 'Organization Code of Conduct...', 'false', '13 Jan, 2020'),
  createData('Code of Conduct', 'Organization Code of Conduct...', 'true', '13 Jan, 2020'),
  createData('Code of Conduct', 'Organization Code of Conduct...', 'false', '13 Jan, 2020'),
];

export default function Policies() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius:0 }}>
      <TableContainer sx={{ maxHeight: 440 }} >
        <Table stickyHeader aria-label="sticky table" sx={{border: '1px solid #ccc'}} >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight:'bold' }}
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
                  <TableCell align="right" sx={{color: row.status === 'true'? 'rgb(0, 200, 83)': 'rgb(216, 67, 21)'}}>
                    <CheckCircleOutlineOutlinedIcon/>
                  </TableCell>
                  <TableCell align="right">
                    {row.lastupdated}
                  </TableCell>
                  <TableCell align="right">
                    {<VisibilityOutlinedIcon color="primary" />}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
      />
    </Paper>
  );
}
