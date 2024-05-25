import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/system';

const ResponsiveCircularProgress = styled(CircularProgress)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  [theme.breakpoints.up('md')]: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const PerformanceChart = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <ResponsiveCircularProgress
        variant="determinate"
        {...props}
        value={100}
        color="error"
        sx={{
          color: '#DCDCDC',
          margin: '0 auto',
        }}
      />
      <ResponsiveCircularProgress
        variant="determinate"
        {...props}
        disableShrink
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          margin: 'auto',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid >
          <Typography
            component="div"
            color="text.secondary"
            sx={{
              fontSize: '31px',
              fontWeight: '800',
              [theme.breakpoints.down('xs')]: {
                fontSize: '20px',
              },
              [theme.breakpoints.between('sm', 'md')]: {
                fontSize: '25px',
              },
            }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
          <Typography
            component="div"
            color="text.secondary"
            sx={{
              fontSize: '15px',
              fontWeight: '600',
              paddingTop: '4px',
              [theme.breakpoints.down('xs')]: {
                fontSize: '12px',
              },
              [theme.breakpoints.between('sm', 'md')]: {
                fontSize: '14px',
              },
            }}
          >
            Total marks: 450/500
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

PerformanceChart.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number,
  thickness: PropTypes.number,
};

PerformanceChart.defaultProps = {
  size: 300,
  thickness: 1.4,
};

export default PerformanceChart;
