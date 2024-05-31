// Page Owner Ruby
import React from 'react';
import { Box, Typography, Paper, IconButton, Popover, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';
import ProgressBar from 'components/ProgressBar';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import withParamDrawer from 'components/temp-withParamDrawer';
import CircularContent from './CircularContent';
import Carousel from 'components/Slider';


// =====================  circular upload  start


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
// =====================  circular upload  end

// ========== circular data start 
const CircularData = [
  {
    icon: <PictureAsPdfTwoToneIcon fontSize="large" />,
    name: 'ClassPresentation.PDF',
    course: 'Maths 101|Unit-2:Linear Programming',
    date: '04-02-2024'
  },
  {
    icon: <NoteAddTwoToneIcon fontSize="large" />,
    name: 'SlideShow.PPT',
    course: 'Maths 102|Unit-2:Add and Subtract',
    date: '07-02-2024'
  },
  {
    icon: <AssignmentTwoToneIcon fontSize="large" />,
    name: 'Solving Sheets.XLS',
    course: 'Maths 103|Unit-2:Motion and Force',
    date: '12-02-2024'
  }
  // Add more circular data objects as needed
];
// ========== circular data end

// ========== circular drawer start 
const NewParamDrawer=withParamDrawer(CircularContent);
function CircularDrawer() {
  return (
    <div>
      <NewParamDrawer buttonLabel=' New Circular' drawerTitle='Upload Circular' />
    </div>
  )
}
// ========== circular drawer end

const CircularUploads = () => {
  const progressData = [
    { value: 69, subject: 'Maths 101' },
    { value: 95, subject: 'Maths 102' },
    { value: 100, subject: 'Maths 103' },
    { value: 20, subject: 'Maths 104' },
    { value: 90, subject: 'Maths 105' },
    { value: 30, subject: 'Maths 106' },
  ];

  return (
    <Box>
       <Carousel slidesToShow={4}>
          {progressData.map((data, index) => (
            <Paper key={index} sx={{ p: 7, borderRadius: '0px' }}>
              <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>
                <ProgressBar value={data.value} belowProgressBarText={data.subject} />
              </Box>
            </Paper>
          ))}
       </Carousel>

       {/* =====================  circular upload  start */}
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
    </Box>
  )
}

export default CircularUploads