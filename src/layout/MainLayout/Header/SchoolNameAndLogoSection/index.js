import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import logo from './logo.png';
import { Typography ,  useMediaQuery } from '@mui/material';


const SchoolName = () => {
  const [schoolName, setSchoolName] = useState('');
  const [logoSrc, setLogoSrc] = useState('');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const SchoolDetails = () => {
    const schoolInfo = { id: 1, schoolName: 'THE WISDOM TREE SCHOOL', logo: logo };
    return schoolInfo;
  };

  useEffect(() => {
    const details = SchoolDetails();
    setSchoolName(details.schoolName);
    setLogoSrc(details.logo);
  }, []);

  return (
    <>
      <Box sx={{ mx: isMobile ? '0rem' : '2rem' , display: 'flex' , alignItems: 'center' }}>
            <Box  sx={{ mx: isMobile ? '0rem' : '1rem' , maxWidth:'300px' , maxHeight:'100px'  }}> 
              <img src={logoSrc} alt="School Logo"  style={{objectFit:'cover', width:'100%', height:'100px'}}/> 
            </Box>
        <Box >  <Typography variant='h2' sx={{lineHeight:'.5px', fontSize:'26px'}}>{schoolName}</Typography> </Box>
      </Box>
    </>
  );
};

export default SchoolName;
