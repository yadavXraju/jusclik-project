import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import logo from './logo.png';

const SchoolName = () => {
  const [schoolName, setSchoolName] = useState('');
  const [logoSrc, setLogoSrc] = useState('');

  const SchoolDetails = () => {
    const schoolInfo = { id: 1, schoolName: 'HRM GLOBAL SCHOOL (PITAMPURA)', logo: logo };
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
      <img src={logoSrc} alt="School Logo" />
        <h3>{schoolName}</h3>
      </Box>
    </>
  );
};

export default SchoolName;
