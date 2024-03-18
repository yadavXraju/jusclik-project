import React from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, Typography} from '@mui/material';

const NewArrivals = ({ data }) => {
  return (

      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell align="center"><Typography variant="subtitle1">S.No.</Typography></TableCell>
            <TableCell align="center"><Typography variant="subtitle1">Name</Typography></TableCell>
            <TableCell align="center"><Typography variant="subtitle1">Date</Typography></TableCell>
            <TableCell align="center"><Typography variant="subtitle1">Author</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} sx={index % 2 === 0 ? { backgroundColor: '#f9f9f9' } : {}}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};

export default NewArrivals;
