import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  progressBar: {
    height: '4px',
    width:'140px' // Adjust the height as needed
  },
});

function ProgressBar() {
  // Set the total and filled units
  const totalUnits = 7;
  const filledUnits = 3;

  // Calculate the percentage of filled units
  const filledPercentage = (filledUnits / totalUnits) * 100;

  const classes = useStyles();

  return (
    <div>
      <LinearProgress 
        variant="determinate" 
        value={filledPercentage} 
        className={classes.progressBar} 
      />
    </div>
  );
}

export default ProgressBar;
