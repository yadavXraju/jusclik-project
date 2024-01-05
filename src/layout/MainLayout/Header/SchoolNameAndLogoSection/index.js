import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import logo from './logo.png';

const SchoolName = () => {
  const [schoolName, setSchoolName] = useState('');
  const [logoSrc, setLogoSrc] = useState('');

  const SchoolDetails = () => {
    const schoolInfo = { id: 1, schoolName: 'The Wisdom Tree School', logo: logo };
    return schoolInfo;
  };

  useEffect(() => {
    const details = SchoolDetails();
    setSchoolName(details.schoolName);
    setLogoSrc(details.logo);
  }, []);

  return (
    <>
      <Box sx={{ mx: '2rem' , display: 'flex' , alignItems: 'center' }}>
        <Box  sx={{ mx: '2rem' , maxWidth:'300px'  }}>  <img src={logoSrc} alt="School Logo"  style={{objectFit:'cover', width:'100%'}}/> </Box>
        <Box  sx={{ mx: '2rem'}} >  <h3>{schoolName}</h3> </Box>
      </Box>
    </>
  );
};

export default SchoolName;
