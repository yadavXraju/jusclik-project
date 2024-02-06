import * as React from 'react';
import { Box, Typography, Divider, Grid, Paper, IconButton, Popover, Button } from '@mui/material';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import CircularDrawer from './CircularDrawer';

export default function CircularUpload() {
  return (
    <>
      <Paper elevation={1} sx={{ marginBottom: '16px', marginTop: '30px' }}>
        <Grid container spacing={2} p={2} alignItems="end">
          <Grid item xs={12} sm={8} lg={8}>
            <div>
              <Typography variant="h3">Upload Circular</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <CircularDrawer />
            </div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2 }}>
          <Paper sx={{ listStyleType: 'none', p: 0 }}>
            <Grid container spacing={0} p={3} >
              <Grid item xs={3}>
                <Typography variant="h4">Attachment</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4" >
                  Course|Topic
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h4">
                  Date
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h4">
                  Action
                </Typography>
              </Grid>
            </Grid>

            <Divider />
            {/* First list for upload circular */}
            <Grid container p={3} alignItems="center">
              <Grid item xs={4} sm={3} sx={{display:'flex',alignItems:'center'}}>
                <PictureAsPdfTwoToneIcon fontSize="large" />
                <Typography variant="h4">ClassPresentation.PDF</Typography>
              </Grid>
              <Grid item xs={3} sm={4}>
                <Typography variant="h4">Maths 101|Unit-2:Linear Programming</Typography>
              </Grid>
              <Grid item xs={4} sm={3}>
                <Typography variant="h4">04-02-2024</Typography>
              </Grid>
              <Grid item xs={2} sm={2}>
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
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                          <Button sx={{ color: 'black' }}>Delete</Button>
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
                <NoteAddTwoToneIcon fontSize="large" />
                <Typography variant="h4">SlideShow.PPT</Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Typography variant="h4">Maths 102|Unit-2:Add and Subtract</Typography>
              </Grid>
              <Grid item xs={4} sm={3}>
                <Typography variant="h4">07-02-2024</Typography>
              </Grid>
              <Grid item xs={2} sm={2}>
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
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                          <Button sx={{ color: 'black' }}>Delete</Button>
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
                <AssignmentTwoToneIcon fontSize="large" />
                <Typography variant="h4">Solving Sheets.XLS</Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Typography variant="h4">Maths 103|Unit-2:Motion and Force</Typography>
              </Grid>
              <Grid item xs={4} sm={3}>
                <Typography variant="h4">12-02-2024</Typography>
              </Grid>
              <Grid item xs={2} sm={2}>
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
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                          <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                          <Button sx={{ color: 'black' }}>Delete</Button>
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
