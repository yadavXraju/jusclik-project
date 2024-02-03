import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import { TextField } from '@mui/material';
import SearchFilter from '../updates/SearchFilter';

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('Sangeeta', "1323", 159, 6.0, 24, 4.0, 8.0, 5.0),
  createData('Anjali', "123", 237, 9.0, 37, 4.3, 6.0, 7.0),
  createData('Aman', "2434", 262, 16.0, 24, 6.0, 9.0, 8.0),
  createData('Jivesh', "24222", 305, 3.7, 67, 4.3, 5.0, 6.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
  createData('Gingerbread', "@$44", 356, 16.0, 49, 3.9, 7.0, 9.0),
];


export default function ColumnGroupingTable() {


 

  return (
    <Paper sx={{ width: '100%' }}>
      <SearchFilter/>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
              <TableCell align="left">ENGLISH</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} >
                <TableCell>{`${row.name} (${row.admissionNo})`}</TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="left">
                  <TextField fullWidth variant="outlined" size="small" sx={{ width: '60px' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
  );
}
