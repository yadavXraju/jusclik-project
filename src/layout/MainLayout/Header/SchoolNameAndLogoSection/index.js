import React from 'react';
import { Box } from '@mui/system';
import { Typography ,  useMediaQuery } from '@mui/material';
import { SchoolData } from './SchoolData';


const SchoolName = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Box sx={{ mx: isMobile ? '0rem' : '2rem' , display: 'flex' , alignItems: 'center' }}>
            <Box  sx={{ mx: isMobile ? '0rem' : '1rem' , maxWidth:'300px' , maxHeight:'100px'  }}> 
              <img src={SchoolData.logo} alt="School Logo"  style={{objectFit:'cover', width:'100%', height:'100px'}}/> 
            </Box>
        <Box >  <Typography variant='h2' sx={{lineHeight:'.5px', fontSize:'26px', '@media (max-width:767px)': {
    fontSize: '18px',
  }}}>{SchoolData.name}</Typography> </Box>
      </Box>
    </>
  );
};

export default SchoolName;
