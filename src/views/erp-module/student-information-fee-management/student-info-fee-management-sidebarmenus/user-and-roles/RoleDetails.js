import React from 'react';
import Box from '@mui/material/Box';
import { Table, TableCell, TableContainer, TableHead, TableRow, Typography, TableBody } from '@mui/material';

const UserDetailsData = [
  {
    id: '1',
    details: {
      roleName: 'Rahul',
      Description: 'Unrestricted access to all modules',
    }
  }
];

console.log(UserDetailsData);

function RoleDetails() {
  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h4">Role Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4">Description</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {UserDetailsData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="h5">{item.details.roleName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">{item.details.Description}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default RoleDetails;
