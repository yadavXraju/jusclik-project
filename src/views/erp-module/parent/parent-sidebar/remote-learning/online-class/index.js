import React from 'react';
import OnlineClassCard from './OnlineClasscom/OnlineClassCard';
import { Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Import makeStyles only once

const useStyles = makeStyles((theme) => ({
  boxContainer: {
 
    padding: theme.spacing(3), // Add some padding to the container
  },
}));

const OnlineClass = () => {
  const classes = useStyles();

  // Dummy data for online classes

  return (
    <Paper className={classes.boxContainer}>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row">
      
          <OnlineClassCard/>

      </Box>
    </Paper>
  );
};

export default OnlineClass;
