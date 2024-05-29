import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box , Paper, IconButton, TableCell, TableRow, TableContainer, Table, TableHead, TableBody, Button, Typography, Popover, Grid  } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import HomeworkDrawer from './HomeworkDrawer';
import HomeworkData from './HomeworkData';

// HomeworkProgressChart start ============= 
const HomeworkProgress = ({ value, subject }) => {
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  const strokeColor = normalizedValue >= 0 ? '#2196f3' : '#aaaaaa';

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        textAlign: 'center',
      }}
    >
      <Box position="relative" display="inline-flex" alignItems="center" justifyContent="center">
        <CircularProgress
          variant="determinate"
          value={100}
          size={100}
          thickness={3}
          style={{ color: '#aaaaaa' }}
        />
        <CircularProgress
          variant="determinate"
          value={normalizedValue}
          size={100}
          thickness={3}
          style={{ color: strokeColor, position: 'absolute' }}
        />
        <div style={{ position: 'absolute', fontSize: '16px', fontWeight: 'bold', zIndex: 2 }}>
          {`${Math.round(normalizedValue)}%`}
        </div>
      </Box>
      <div style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>{subject}</div>
    </Paper>
  );
};

const HomeworkProgressChart = () => {
  const progressData = [
    { value: 69, subject: 'Maths 101' },
    { value: 95, subject: 'Maths 102' },
    { value: 100, subject: 'Maths 103' },
    { value: 20, subject: 'Maths 104' },
    { value: 90, subject: 'Maths 105' },
    { value: 30, subject: 'Maths 106' },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Default slides to show
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon sx={{ color : '#c8c8c8 !important',  width : '32px !important', height : '32px !important',borderRadius:'50%',right:'24px !important' }}/>,
    prevArrow: <ArrowBackIosIcon sx={{ color : '#c8c8c8 !important',  width : '32px !important', height : '32px !important',borderRadius:'50%', zIndex:'1', left:'24px !important'}}/>,
    responsive: [
      {
        breakpoint: 1500, // Large devices (laptops/desktops)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500, // Medium devices (tablets, landscape phones)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Small devices (phones)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {progressData.map((data, index) => (
        <Paper key={index} sx={{ p: 7, borderRadius:'0px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>
            <HomeworkProgress value={data.value} subject={data.subject} />
          </div>
        </Paper>
      ))}
    </Slider>
  );
};
// HomeworkProgressChart end  ============= 

// Home work start  ============= 
export  function Homework() {
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
              <Typography variant="h3">Homework</Typography>
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
// Home work end  ============= 

const StudentHomeworkUpload = () => {
  return (
    <>
      <HomeworkProgressChart/>
      <Homework/>
  </>
  )
}

export default StudentHomeworkUpload;