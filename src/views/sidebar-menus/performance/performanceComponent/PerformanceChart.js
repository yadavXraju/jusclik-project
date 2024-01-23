import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function PerformanceChart(props) {

  
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props}  color="secondary" sx={{
      
      }}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid sx={{textAlign:"center"}} >
        <Typography  component="div" color="text.secondary"  sx={{fontSize:"31px",fontWeight:"500"}}>
          {`${Math.round(props.value)}%`}
        </Typography>
        <Typography  component="div" color="text.secondary"  sx={{fontSize:"15px"}}>
          {/* {`${Math.round(props.value)}%`} */}
         Total marks : 450/500
        </Typography>
        </Grid>
      </Box>
    </Box>
  );
}

PerformanceChart.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
  size: PropTypes.number,
  thickness: PropTypes.number
};

PerformanceChart.defaultProps = {
    size: 300, // Set a default size if not provided
    thickness:1.4,

  };
export default PerformanceChart;