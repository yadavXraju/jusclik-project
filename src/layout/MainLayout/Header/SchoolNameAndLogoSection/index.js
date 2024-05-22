// Page Owner Abhishek
// Description : Component holds school logo and name

import React from 'react';
import { Box } from '@mui/system';
import { Typography ,  useMediaQuery } from '@mui/material';
import logo from './logo.png';

export const SchoolData = {
  logo: logo, 
  name: 'THE WISDOM TREE SCHOOL',
};

// school data like logo and name  from school data
const SchoolName = () => {
  const isMediumDesktop = useMediaQuery('(max-width: 1600px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Box sx={{ mx: isMobile ? '0rem' : '2rem' , display: 'flex' , alignItems: 'center' , justifyContent: isMobile ? 'left' : null }}>
            <Box  sx={{ mx: isMobile ? '0rem' : '1rem' , maxWidth:'300px' , maxHeight:'100px'  }}> 
              <img src={SchoolData.logo} alt="School Logo"  style={{objectFit:'cover', width:'70px', height:'7 0px'}}/> 
            </Box>
        <Box > 
        <Typography variant='h2' sx={{ lineHeight: '1.2', fontSize: isMobile ? '18px' : (isMediumDesktop ? '18px' : '21px') }}>
               {SchoolData.name}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SchoolName;
