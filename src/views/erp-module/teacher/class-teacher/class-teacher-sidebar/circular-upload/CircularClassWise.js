import * as React from 'react';
import { Box, Typography, Paper, IconButton, Popover, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import CircularDrawer from './CircularDrawer/CircularDrawer';
import CircularData from './CircularDrawer/CircularData'

const CircularUpload = () => {
  // Sample circular data (you can fetch this data from an API or other source)


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
          <TableContainer component={Paper} className='scrollbar-2'>
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
                {/* Render each circular's data dynamically */}
                {CircularData.map((circular, index) => (
                  <CircularUploadRow
                    key={index}
                    icon={circular.icon}
                    name={circular.name}
                    course={circular.course}
                    date={circular.date}
                  />
                ))}
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
