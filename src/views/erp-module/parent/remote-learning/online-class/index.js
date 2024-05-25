// sangeeta

import React from 'react';
import OnlineClassCard from './OnlineClasscom/OnlineClassCard';
import { Box, Paper , useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Import makeStyles only once


const useStyles = makeStyles((theme) => ({
  boxContainer: {
 
    padding: theme.spacing(3), // Add some padding to the container
  },
}));

const OnlineClass = () => {
  const classes = useStyles();

  // Dummy data for online classes   

   const res2560 = useMediaQuery('(min-width:2000px)')

   let rem = null;

   if(res2560){

    rem= '17rem'
   }

  return (
    <Paper className={classes.boxContainer}> 
    <Box sx={{paddingLeft:rem , paddingRight:rem}}>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row">
      
          <OnlineClassCard/>

      </Box>
      </Box>
    </Paper>
  );
};

export default OnlineClass;
