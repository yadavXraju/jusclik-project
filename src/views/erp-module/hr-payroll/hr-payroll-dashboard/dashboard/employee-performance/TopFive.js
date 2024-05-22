// owned by sangeeta

import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

// Custom component to display linear progress with label
const LinearProgressWithLabel = ({ value, color }) => {
  return (
    <Box width="100%" mr={1}>
      <LinearProgress variant="determinate" value={value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: color }, height: 15 }} />
    </Box>
  );
};

const TopFive = () => {
  // Array of progress bars with values, labels, and colors
  const progressBars = [
    { attendance: 90, name: 'Amit', color: "#A8CD9F" },
    { attendance: 94, name: 'Cinu', color: "#A8CD9F" },
    { attendance: 88, name: 'John', color: "#A8CD9F" },
    { attendance: 96, name: 'Mary', color: "#A8CD9F" },
    { attendance: 100, name: 'Bob', color: "#A8CD9F" }
  ];

  return (
    <Box height="425px" className='scrollbar-2' sx={{ overflow: 'scroll', width: '100%', }}>
      {/* Iterate over the progressBars array and render each progress bar */}
      {progressBars.map((progress, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
            <Typography>{progress.name}</Typography>
            <Typography>{progress.attendance} %</Typography>
          </Box>
          <LinearProgressWithLabel value={progress.attendance} color={progress.color} />
        </Box>
      ))}
    </Box>
  );
};

export default TopFive;
