import React from 'react';
import Box from '@mui/material/Box';
import { Table, TableCell, TableContainer, TableHead, TableRow, Typography, TableBody, Button } from '@mui/material';
import InviteUserDrawer from './InviteUserDrawer'
import Switch from '@mui/material/Switch';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
//import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';


const UserDetailsData = [
  {
    id: '1',
    details: {
      name: 'Rahul',
      email: 'test123@gmail.com',
      role: 'Admin',
      status: 'Active'
    }
  }
];

console.log(UserDetailsData);

function UserDetails() {
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'end'}}>
      <InviteUserDrawer/>
      </Box>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h4">User Details</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4">Role</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4">Status</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {UserDetailsData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="h5">{item.details.name}</Typography>
                    <Typography fontSize={'.75rem'} color={'#ccc'} variant="h5">
                      {item.details.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">{item.details.role}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography  variant="h5">
                      {/* {item.details.status} */}
                      <Switch />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                      {/* <Button sx={{ color: 'black', margin:'2px' }}>View</Button>
                      <Button sx={{ color: 'black', margin:'2px' }}>Edit</Button>
                      <Button sx={{ color: 'black', margin:'2px' }}>Cancel</Button> */}
                      <Button sx={{ color: 'black' }}> <VisibilityTwoToneIcon/> </Button>
                      <Button sx={{ color: 'black' }}> <EditTwoToneIcon/> </Button>
                      {/* <Button sx={{ color: 'black' }}> <DeleteTwoToneIcon/> </Button> */}
                    </Typography>
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

export default UserDetails;
