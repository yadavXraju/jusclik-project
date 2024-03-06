import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Button from '@mui/material/Button';

const ReusableTable = ({ columns, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ width: "100%", backgroundColor: "#1219260f" }}>
          <TableRow >
            {columns.map((column) => (
              column.tabHeading !== "Records" ? (
                <TableCell key={column.id}>{column.tabHeading}</TableCell>
              ) : (
                <TableCell key={column.id} sx={{ color: "#2196f3" }}>{data.length} {column.tabHeading}</TableCell>
              )
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {
                Object.keys(row).map((key) => {
                  if (key === "id") {
                    return null;
                  }
                  return (
                    <TableCell key={row.id}>
                      {key !== "records" ? (
                        <Typography>{row[key]}</Typography>
                      ) : (
                        <Button sx={{ height: "40px", color: '#fff' }} variant="contained">Select</Button>
                      )}
                    </TableCell>
                  );
                })
              }
              <TableCell><Typography><MoreHorizOutlinedIcon /></Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReusableTable;

