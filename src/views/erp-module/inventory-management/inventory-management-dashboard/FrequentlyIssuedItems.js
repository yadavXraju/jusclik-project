import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { Box, Paper} from '@mui/material';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';

// Custom component to display linear progress with label
const LinearProgressWithLabel = ({ value, color }) => {
  return (
    <Box width="100%" mr={1}>
      <LinearProgress variant="determinate" value={value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: color } }} />
    </Box>
  );
};

const FrequentlyItems = () => {
  // Array of progress bars with values, labels, and colors
  const progressBars = [
    { value: 24, label: 'Sketch Pen', color: "#1b79c3" }, 
    { value: 20, label: 'Table Calender', color: "#f50057" }, 
    { value: 60, label: 'Highlighter', color: "#00897b" }, 
    { value: 85, label: 'Chalk Box', color: "#4caf50" },
    { value: 18, label: 'Dusters', color: "#9c27b0" },
    { value: 4, label: 'Lab Equipments', color: "#4caf50" },
  ];

  return (
    <Paper variant="elevation" elevation={3}>
        <ParamWidgetHeader title='Frequently Issued Items' />

      <Box height="425px" className='scrollbar-2' sx={{overflow: 'scroll', width: '100%', padding: '24px' }} >
        {/* Iterate over the progressBars array and render each progress bar */}
        {progressBars.map((progress, index) => (
          <Box key={index} sx={{ marginBottom: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
              <Typography>{progress.label}</Typography>
              <Typography>{progress.value} times</Typography>
            </Box>
            <LinearProgressWithLabel value={progress.value} color={progress.color} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default FrequentlyItems;
