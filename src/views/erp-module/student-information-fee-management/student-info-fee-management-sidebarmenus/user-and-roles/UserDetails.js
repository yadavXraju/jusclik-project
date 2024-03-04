import React from 'react';
import Box from '@mui/material/Box';
import { Table, TableCell, TableContainer, TableHead, TableRow, Typography, TableBody, Button } from '@mui/material';
//import { IconButton } from '@mui/material';
//import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
//import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
//import { ClassTeacherProfileDetails } from 'layout/MainLayout/Header/class-teacher/teacher-profile-section/TeacherProfile';

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
                    <Typography color={'Green'} variant="h5">
                      {item.details.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                      <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                      <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Cancal</Button>
                      {/* <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                          <div>
                            <IconButton {...bindTrigger(popupState)}>
                              <MoreHorizIcon />
                            </IconButton>
                            <Popover
                              {...bindPopover(popupState)}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                              }}
                            >
                              <Typography sx={{ p: 1, display: 'Grid' }}>
                                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                                <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                              </Typography>
                            </Popover>
                          </div>
                        )}
                      </PopupState> */}
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
