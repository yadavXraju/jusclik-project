import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
// import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const MainCounters = ({ counters, secondaryCounters, gridStyles }) => {
  return (
    <>
      <Paper sx={{ border: '1px solid rgb(227, 227, 227)', boxShadow: '4px 4px 9px 2px #ddddddc2' }}>
        <Grid sx={gridStyles}>
          {counters.map((counter, index) => (
            <Box key={index} sx={{ flex: '0 0 25%', flexDirection: 'column', textAlign: 'center', display: 'flex', gap: '20px', alignItems: 'center', borderRight: `1px solid ${index !== counters.length - 1 ? 'rgb(227, 227, 227)' : 'transparent'}`, padding: '2rem' }}>
              <Box>
                <Typography variant='h3' sx={{ fontSize: '24px', color: counter.color }}>{counter.value}</Typography>
                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '400', paddingTop: '7px' }}>{counter.label}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        {secondaryCounters && (
          <Grid sx={{ display: 'flex', borderTop: '1px solid rgb(227, 227, 227)' }}>
            {secondaryCounters.map((secondaryCounter, index) => (
              <Box key={index} sx={{ flex: '0 0 25%', flexDirection: 'column', textAlign: 'center', display: 'flex', gap: '20px', alignItems: 'center', borderRight: `1px solid ${index !== secondaryCounters.length - 1 ? 'rgb(227, 227, 227)' : 'transparent'}`, padding: '2rem' }}>
                <Box>
                  <Typography variant='h3' sx={{ fontSize: '24px', color: secondaryCounter.color }}>{secondaryCounter.value}</Typography>
                  <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '400', paddingTop: '7px' }}>{secondaryCounter.label}</Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        )}
      </Paper>
    </>
  );
};

// MainCounters.propTypes = {
//   counters: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.number.isRequired,
//       label: PropTypes.string.isRequired,
//       color: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   secondaryCounters: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.number.isRequired,
//       label: PropTypes.string.isRequired,
//       color: PropTypes.string.isRequired,
//     })
//   ),
//   gridStyles: PropTypes.object.isRequired,
// };

export default MainCounters;
