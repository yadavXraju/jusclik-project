import React from 'react';
import Box from '@mui/material/Box';
import { Table, TableCell, TableContainer, TableHead, TableRow, Typography, TableBody } from '@mui/material';
import AddRoleDrawer from './AddRoleDrawer';

const UserDetailsData = [
  {
    id: '1',
    details: {
      roleName: 'Admin',
      Description: 'Unrestricted access to all modules',
    }
  },
  {
    id: '2',
    details: {
      roleName: 'manager',
      Description: 'Access to all modules except organisation settings',
    }
  },
  {
    id: '3',
    details: {
      roleName: 'senior manager',
      Description: 'Access to all modules except organisation settings',
    }
  }
];

console.log(UserDetailsData);

function RoleDetails() {
  return (
    <>
    {/* ============== Role details tables ========== */}
    <Box sx={{display:'flex', justifyContent:'end'}}>
      <AddRoleDrawer/>
      </Box>
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
