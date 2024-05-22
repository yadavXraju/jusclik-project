
// Page owner - Kulwinder Singh
// online Registration - Tab Change Icon
import React from 'react';
import { Box, Typography } from '@mui/material';

function TabNumber({ number, text, isActive }) {
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
          variant="body1"
          sx={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            textAlign: 'center',
            lineHeight: '30px',
            fontSize: '15px',
            fontWeight: 'bold',
            border: isActive ? '1px solid white' : '1px solid black',
            backgroundColor: isActive ? '#ffe71b' : 'white',
            color: isActive ? 'black' : 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '5px',
          }}
         
        >
          {number}
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }}>{text}</Typography>
      </Box>
    </Box>
  );
}

export default TabNumber;
