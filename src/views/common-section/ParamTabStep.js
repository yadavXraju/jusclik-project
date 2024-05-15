import React from 'react';
import { Box, Typography } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const TabsName = ({ name, number, numberShow, iconShow, lastIndex }) => {
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
        {numberShow && (
          <Typography
            style={{
              width: '30px',
              height: '30px',
              minHeight:'30px',
              minWidth:'30px',
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
            {number + 1}
          </Typography>
        )}
        <Typography sx={{color:'inherit'}}>{name}</Typography>
      </Box>
      {iconShow && number !== lastIndex && <ChevronRightOutlinedIcon sx={{ marginTop: '2px' }} />}
    </Box>
  );
};

export default TabsName;
