import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';

const SchoolName = () => {
  const [schoolName, setSchoolName] = useState('');

  useEffect(() => {
    setSchoolName('HRM GLOBAL SCHOOL (PITAMPURA)');
  }, []);

  return (
    <>
      <Box sx={{ mx: '2rem' }}>
        <h3>{schoolName}</h3>
      </Box>
    </>
  );
};

export default SchoolName;
