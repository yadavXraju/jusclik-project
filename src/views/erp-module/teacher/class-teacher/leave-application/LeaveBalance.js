// ======= Page Owner Vikash =========
// ======= Leave Balance Component =========
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';


const LeaveBalProgress = ({ value, subject }) => {

  const isMobile = useMediaQuery('(max-width:1024px)');

  const normalizedValue = Math.min(Math.max(value, 0), 5); // Define 5 as the maximum value
  const strokeColor = normalizedValue >= 0 ? '#2196f3' : '#aaaaaa';

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        textAlign: 'center'
      }}
    >
      <Box position="relative" display="inline-flex" alignItems="center" justifyContent="center" sx={{marginTop: isMobile ? '38px' : '0px',marginBottom: isMobile ? '20px' : '0px'}}>
        <CircularProgress variant="determinate" value={100} size={isMobile ? 150 : 209} thickness={3} style={{ color: '#aaaaaa' }} />
        <CircularProgress
          variant="determinate"
          value={normalizedValue * 20} // Convert to percentage
          size={isMobile ? 150 : 209}
          thickness={3}
          style={{ color: strokeColor, position: 'absolute' }}
        />
        <div style={{ position: 'absolute', fontSize: '16px', fontWeight: 'bold', zIndex: 2 }}>
          {normalizedValue + ' - 5'}  {/* Display value directly */}
        </div>
      </Box>
      <div style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>{subject}</div>
    </Paper>
  );
};

const LeaveBalance = () => {
  const progressData = [
    { value: 2.75, subject: 'Casual Leave' },
    { value: 2.5, subject: 'Earned Leave' },
    { value: 4, subject: 'Medical Leave' },
    { value: 1.5, subject: 'Festival Leave' }
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Default slides to show
    slidesToScroll: 1,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          color: '#c8c8c8 !important',
          width: '32px !important',
          height: '32px !important',
          borderRadius: '50%',
          right: '24px !important'
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosIcon
        sx={{
          color: '#c8c8c8 !important',
          width: '32px !important',
          height: '32px !important',
          borderRadius: '50%',
          zIndex: '1',
          left: '24px !important'
        }}
      />
    ),
  };

  return (
    <>
      <Typography variant="h4" p={2} pb={0} gutterBottom color={'rgb(33, 150, 243)'}>
        Leave Balance
      </Typography>
      <Slider {...settings}>
        {progressData.map((data, index) => (
          <Paper key={index} sx={{ p: 5.7, borderRadius: '10px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              <LeaveBalProgress value={data.value} subject={data.subject} />
            </div>
          </Paper>
        ))}
      </Slider>
    </>
  );
};

export default LeaveBalance;
