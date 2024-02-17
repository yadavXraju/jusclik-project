import React from 'react';
import {  Paper, IconButton,TableCell,TableRow,TableContainer,Table,TableHead,TableBody, Button, Typography, Popover, Grid } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import HomeworkDrawer from '../Student-homework-upload/HomeWorkDrawer/HomeworkDrawer';
import "../../dashboard/Default/dashboard-css/Overflow.css";

export default function Homework() {

  const getStatusColor = (status, submissionRate) => {
    if (status === 'Ready for grading') {
      if (submissionRate >= 95) {
        return '#FDBF60'; // Change text color to yellow if submission rate is above 95%
      }
    } else if (status === 'Graded successfully' && submissionRate === 100) {
      return 'green'; // Change text color to green if submission rate is 100%
    }
    return 'inherit'; // Default color if no condition is met
  };

  return (
    <>
      <Paper elevation={1} sx={{ marginBottom: '16px', marginTop: '30px'}}>
      <Grid container spacing={2} p={2} alignItems="end">
          <Grid item xs={12} sm={8} lg={8}>
            <div>
              <Typography variant="h3">Homework</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <HomeworkDrawer/>
            </div>
          </Grid>
        </Grid>
        <TableContainer   className='scrollbar-2'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Class|Section</TableCell>
                <TableCell>Homework Date</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Submission Rate</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* First list for upload circular */}
              <TableRow>
                <TableCell>Maths 101|Unit-2:Linear Programming</TableCell>
                <TableCell>V-A</TableCell>
                <TableCell>01/05/2024</TableCell>
                <TableCell>02/05/2024</TableCell>
                <TableCell>69%</TableCell>
                <TableCell style={{ color: getStatusColor('Grade in progress', 69) }}>Grade in progress</TableCell>
                <TableCell>
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <IconButton {...bindTrigger(popupState)}>
                          <MoreVertOutlinedIcon />
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
                          <Typography sx={{ p: 1, display: 'grid' }}>
                            <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                            <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Delete</Button>
                            <Button sx={{ color: 'black' }}>Grade</Button>
                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
                </TableCell>
              </TableRow>
              {/* Second list for upload circular */}
              <TableRow>
                <TableCell>Maths 102|Unit-2:Add and Subtract</TableCell>
                <TableCell>V-A</TableCell>
                <TableCell>07-01-2024</TableCell>
                <TableCell>07-02-2024</TableCell>
                <TableCell>95%</TableCell>
                <TableCell style={{ color: getStatusColor('Ready for grading', 95) }}>Ready for grading</TableCell>
                <TableCell>
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <IconButton {...bindTrigger(popupState)}>
                          <MoreVertOutlinedIcon />
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
                          <Typography sx={{ p: 1, display: 'grid' }}>
                            <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                            <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Delete</Button>
                            <Button sx={{ color: 'black' }}>Grade</Button>
                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
                </TableCell>
              </TableRow>
              {/* Third list for upload circular */}
              <TableRow>
                <TableCell>Maths 103|Unit-2:Motion and Force</TableCell>
                <TableCell>V-A</TableCell>
                <TableCell>12-01-2024</TableCell>
                <TableCell>12-02-2024</TableCell>
                <TableCell>100%</TableCell>
                <TableCell style={{ color: getStatusColor('Graded successfully', 100) }}>Graded successfully</TableCell>
                <TableCell>
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <IconButton {...bindTrigger(popupState)}>
                          <MoreVertOutlinedIcon />
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
                          <Typography sx={{ p: 1, display: 'grid' }}>
                            <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                            <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Delete</Button>
                            <Button sx={{ color: 'black' }}>Grade</Button>
                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
