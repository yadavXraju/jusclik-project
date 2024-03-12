import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main, // Change header background color
    color: theme.palette.common.white,
    fontWeight: 'bold', // Make header text bold
    fontSize: 16, // Increase header font size
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(salutation, firstName, lastName, email, workPhone, mobile) {
  return { salutation, firstName, lastName, email, workPhone, mobile };
}

const rows = [
  createData('Mr', 'John', 'Doe', 'john.doe@example.com', '123-456-7890', '987-654-3210'),
  createData('Ms', 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901', '876-543-2109'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Salutation</StyledTableCell>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Email Address</StyledTableCell>
            <StyledTableCell>Work Phone</StyledTableCell>
            <StyledTableCell>Mobile</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f3f3f3' : 'inherit' }}>
              <StyledTableCell component="th" scope="row">{row.salutation}</StyledTableCell>
              <StyledTableCell>{row.firstName}</StyledTableCell>
              <StyledTableCell>{row.lastName}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.workPhone}</StyledTableCell>
              <StyledTableCell>{row.mobile}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
