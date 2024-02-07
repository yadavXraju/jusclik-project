import React from 'react';
import { Box, Typography, Divider, Grid, Paper, IconButton, Popover, Button } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import HomeworkDrawer from './HomeworkDrawer'

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
      <Paper elevation={1} sx={{ marginBottom: '16px', marginTop: '30px' }}>
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

        <Box sx={{ mt: 2 }}>
          <Paper sx={{ listStyleType: 'none', p: 0 }}>
            <Grid container spacing={0} p={3} >
              <Grid item xs={3}>
                <Typography variant="h4">Subject</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h4" >
               Class|Section
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h4" >
               Homework Date
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h4" >
                Due Date
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h4">
                 Submission Rate
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h4">
                 Status
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h4">
                  Action
                </Typography>
              </Grid>
            </Grid>

            <Divider />
            {/* First list for upload circular */}
            <Grid container p={3} alignItems="center">
              <Grid item xs={4} sm={3} sx={{display:'flex',alignItems:'center'}}>
                <Typography variant="h5">Maths 101|Unit-2:Linear Programming</Typography>
              </Grid> 
              <Grid item xs={3} sm={1}>
                <Typography variant="h5">V-A</Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Typography variant="h5">01/05/2024</Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Typography variant="h5">02/05/2024</Typography>
              </Grid>
              <Grid item xs={4} sm={1}>
                <Typography variant="h5">69%</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="h5" style={{ color: getStatusColor('Grade in progress', 69) }}>Grade in progress</Typography>
              </Grid>
              <Grid item xs={2} sm={1}>
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
                         <Typography sx={{ p: 1,display: 'Grid' }}>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Delete</Button>
                          <Button sx={{ color: 'black' }}>Grade</Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </Grid>
            </Grid>
            {/* First list for upload circular end*/}
            <Divider />
            {/* 2nd list for upload circular start*/}
            <Grid container spacing={0} p={3} alignItems="center">
              <Grid xs={4} sm={3} sx={{display:'flex',alignItems:'center'}}>
                <Typography variant="h5">Maths 102|Unit-2:Add and Subtract</Typography>
              </Grid>
              <Grid item xs={4} sm={1}>
                <Typography variant="h5">V-A</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="h5">07-01-2024</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="h5">07-02-2024</Typography>
              </Grid>
              <Grid item xs={4} sm={1}>
                <Typography variant="h5">95%</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="h5" style={{ color: getStatusColor('Ready for grading', 95) }}>Ready for grading</Typography>
              </Grid>
              <Grid item xs={2} sm={1}>
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
                        <Typography sx={{ p: 1,display: 'Grid' }}>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Delete</Button>
                          <Button sx={{ color: 'black' }}>Grade</Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </Grid>
            </Grid>
            {/* 2nd list for upload circular end*/}
            <Divider />
            {/* 3rd list for upload circular start*/}
            <Grid container spacing={0} p={3} alignItems="center">
              <Grid xs={4} sm={3} sx={{display:'flex',alignItems:'center'}}>
                <Typography variant="h5">Maths 103|Unit-2:Motion and Force</Typography>
              </Grid>
              <Grid item xs={4} sm={1}>
                <Typography variant="h5">V-A</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="h5">12-01-2024</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="h5">12-02-2024</Typography>
              </Grid>
              <Grid item xs={4} sm={1}>
                <Typography variant="h5">100%</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="h5" style={{ color: getStatusColor('Graded successfully', 100) }}>Graded successfully</Typography>
              </Grid>
              <Grid item xs={2} sm={1}>
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
                        <Typography sx={{ p: 1,display: 'Grid' }}>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Delete</Button>
                          <Button sx={{ color: 'black' }}>Grade</Button>
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </Grid>
            </Grid>
            {/* 3rd list for upload circular end*/}
          </Paper>
        </Box>
      </Paper>
    </>
  );
}
