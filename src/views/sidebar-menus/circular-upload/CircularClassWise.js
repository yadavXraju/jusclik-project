import * as React from 'react';
import { Box, Typography, Paper, IconButton, Popover, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import CircularDrawer from './CircularDrawer/CircularDrawer';

const CircularUpload = () => {
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Attachment</TableCell>
                  <TableCell>Course|Topic</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* First list for upload circular */}
                <CircularUploadRow
                  icon={<PictureAsPdfTwoToneIcon fontSize="large" />}
                  name="ClassPresentation.PDF"
                  course="Maths 101|Unit-2:Linear Programming"
                  date="04-02-2024"
                />

                {/* Second list for upload circular */}
                <CircularUploadRow
                  icon={<NoteAddTwoToneIcon fontSize="large" />}
                  name="SlideShow.PPT"
                  course="Maths 102|Unit-2:Add and Subtract"
                  date="07-02-2024"
                />

                {/* Third list for upload circular */}
                <CircularUploadRow
                  icon={<AssignmentTwoToneIcon fontSize="large" />}
                  name="Solving Sheets.XLS"
                  course="Maths 103|Unit-2:Motion and Force"
                  date="12-02-2024"
                />
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </>
  );
};

const CircularUploadRow = ({ icon, name, course, date }) => {
  return (
    <TableRow>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {icon}
          <Typography variant="h5" sx={{ ml: '8px' }}>{name}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Typography variant="h5">{course}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h5">{date}</Typography>
      </TableCell>
      <TableCell>
        <CircularUploadPopover />
      </TableCell>
    </TableRow>
  );
};

const CircularUploadPopover = () => {
  return (
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
              <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
              <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
              <Button sx={{ color: 'black' }}>Delete</Button>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default CircularUpload;
