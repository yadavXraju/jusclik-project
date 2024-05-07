import React from 'react';
import { Box, Typography } from '@mui/material'; // Assuming you are using Material-UI

function TabNumber({ number, text }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <Typography
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            textAlign: 'center',
            lineHeight: '22px',
            fontSize: '15px',
            fontWeight: 'bold',
            border: '1px solid rgb(221, 221, 221)',
            boxSizing: 'border-box',
            borderColor: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '5px',
          }}
          className="number-bg"
        >
          {number}
        </Typography>
        <Typography sx={{ color: 'inherit', fontWeight: 'bold' }}>{text}</Typography>
      </Box>
    </Box>
  );
}

export default TabNumber;