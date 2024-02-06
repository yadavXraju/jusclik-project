import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const CustomCircularProgress = ({ value, subject }) => {
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  const strokeColor = normalizedValue >= 0 ? '#2196f3' : '#aaaaaa';

  return (
    <Paper
      elevation={0}
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
        <div style={{ position: 'absolute', fontSize: '16px', fontWeight: 'bold' }}>
          {`${Math.round(normalizedValue)}%`}
        </div>
      </Box>
      <div style={{ marginTop: '8px', fontSize: '14px' }}>{subject}</div>
      </Paper>
  );
};

const ProgressChart = () => {
  const progressData = [
    { value: 75, subject: 'Maths 101' },
    { value: 40, subject: 'Maths 102' },
    { value: 60, subject: 'Maths 103' },
    { value: 20, subject: 'Maths 104' },
    { value: 90, subject: 'Maths 105' },
    { value: 30, subject: 'Maths 106' },
  ];

  return (
   <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        
        width: '100%',
        height: '50%',
      },
    }}
  >
    <Paper sx={{p:7}}>
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>
      {progressData.map((data, index) => (
        <CustomCircularProgress key={index} value={data.value} subject={data.subject} />
      ))}
    </div>
  </Paper>
   
  </Box>
  );
};

export default ProgressChart;
