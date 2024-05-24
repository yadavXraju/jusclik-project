import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { HeadingCss } from 'components/dashboard-css/CommonCss';
import Typography from '@mui/material/Typography';
import { Box, Paper, Grid } from '@mui/material';

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
      <Grid
          sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0'
          }}
        >
          <Typography variant="h2" style={{ ...HeadingCss, border: 'none' }}>
          Frequently Issued Items
          </Typography>
        </Grid>

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
