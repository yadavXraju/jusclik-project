// ownedby sangeeta

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

const BottomFive = () => {
  // Array of progress bars with values, labels, and colors
  const progressBars = [
    { attendance: 70, name: 'Amit', color: "Red",dept:"IT" },
    { attendance: 78, name: 'Cinu', color: "Red",dept:"HR" },
    { attendance: 68, name: 'John', color: "Red",dept:"IT" },
    { attendance: 79, name: 'Mary', color: "Red" ,dept:"IT"},
    { attendance: 79.6, name: 'Bob', color: "Red",dept:"IT" }
  ];

  return (
    <Box height="425px" className='scrollbar-2' sx={{ overflow: 'scroll', width: '100%', }}>
      {/* Iterate over the progressBars array and render each progress bar */}
      {progressBars.map((progress, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
            <Typography sx={{ fontWeight: 'bold', color: 'primary.main' }}>{progress.name}({progress.dept})</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{progress.attendance} %</Typography>
          </Box>
          <LinearProgressWithLabel value={progress.attendance} color={progress.color} />
        </Box>
      ))}
    </Box>
  );
};

export default BottomFive;
