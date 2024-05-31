// Page Owner Abhishek Negi
// Description Progress bar used in Circular in Teacher Dashboard

import React from 'react'
import { Box, Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
const ProgressBar = ({ value , belowProgressBarText , variant='determinate' , size=100 , strokeColor }) => {

  const normalizedValue = Math.min(Math.max(value, 0), 100);

    return (
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          textAlign: 'center',
        }}
      >
        <Box position="relative" display="inline-flex" alignItems="center" justifyContent="center">
          <CircularProgress
            variant={variant}
            value={100}
            size={size}
            thickness={3}
            style={{ color: '#aaaaaa' }}
          />
          <CircularProgress
            variant="determinate"
            value={normalizedValue}
            size={size}
            thickness={3}
            style={{ color: strokeColor, position: 'absolute' }}
          />
          <Box style={{ position: 'absolute', fontSize: '16px', fontWeight: 'bold', zIndex: 2 }}>
            {`${Math.round(normalizedValue)}%`}
          </Box>
        </Box>
        <Box style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>{belowProgressBarText}</Box>
      </Paper>
    );
}

export default ProgressBar

