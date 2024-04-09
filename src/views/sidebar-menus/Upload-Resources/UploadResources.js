import React from 'react';
import { Paper, IconButton, TableCell, TableRow, TableContainer, Table, TableHead, TableBody, Button, Typography, Popover, Grid } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import HomeworkDrawer from '../Student-homework-upload/HomeWorkDrawer/HomeworkDrawer';
import HomeworkData from '../Student-homework-upload/HomeworkData';

export default function Homework() {
  // Sample homework data (you can fetch this data from an API or other source)
  
  const getStatusColor = (status, submissionRate) => {
    if (status === 'Ready for grading') {
      if (parseInt(submissionRate) >= 95) {
        return '#FDBF60'; // Change text color to yellow if submission rate is above 95%
      }
    } else if (status === 'Graded successfully' && parseInt(submissionRate) === 100) {
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
              <Typography variant="h3">Upload Resources</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <HomeworkDrawer/>
            </div>
          </Grid>
        </Grid>
        <TableContainer className='scrollbar-2'>
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
              {/* Render each homework's data dynamically */}
              {HomeworkData.map((homework, index) => (
                <TableRow key={index}>
                  <TableCell>{homework.subject}</TableCell>
                  <TableCell>{homework.classSection}</TableCell>
                  <TableCell>{homework.homeworkDate}</TableCell>
                  <TableCell>{homework.dueDate}</TableCell>
                  <TableCell>{homework.submissionRate}</TableCell>
                  <TableCell style={{ color: getStatusColor(homework.status, homework.submissionRate) }}>{homework.status}</TableCell>
                  <TableCell>
                    <PopupState variant="popover" popupId={`demo-popup-popover-${index}`}>
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
