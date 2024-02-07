import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon sx={{ color : '#c8c8c8 !important',  width : '32px !important', height : '32px !important',borderRadius:'50%',right:'24px !important' }}/>,
    prevArrow: <ArrowBackIosIcon sx={{ color : '#c8c8c8 !important',  width : '32px !important', height : '32px !important',borderRadius:'50%', zIndex:'1', left:'24px !important'}}/>,

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

export default HomeworkProgressChart;
