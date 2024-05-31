import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CustomTable = ({ rows, columns }) => {
  const tableHeader = columns.map((ele,index) => <TableCell key={"table column"+index} align="right">{ele}</TableCell>);
  const tableBody = rows.map((row,rowNum) => (
    <TableRow key={"table row"+rowNum}>{
      Object.keys(row).map((key,cellNo)=>(
      <TableCell key={`row-${rowNum}-cellNo=${cellNo}`} align="right">{row[key]}</TableCell>
      ))}
    </TableRow>
  ));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{tableHeader}</TableRow>
        </TableHead>
        <TableBody>{tableBody}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;

// rows[{},{}]
// columns []
