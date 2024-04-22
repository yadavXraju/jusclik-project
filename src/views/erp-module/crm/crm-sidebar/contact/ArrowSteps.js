import { Box } from '@mui/system';
import React from 'react';


const ProgressSteps = () => {
  const stepContents = [
    {
        name : 'Unverified',
        value : null
    },
    {
        name : 'Verified',
        value : null
    },
    {
        name : 'Application Started',
        value : 1
    },
    {
        name : 'Payment Approved',
        value : 0
    },
    {
        name : 'Application Submitted',
        value : 0
    },
   
]; // Content for each step

  return (
    <Box className='scrollbar' mb={2} mt={1} sx={{ display: 'flex' }}> {/* Flex container */}
      {stepContents.map((content, index) => (
        <Box key={index}> {/* Each box */}
          <Box
            sx={{
              padding: '10px 20px 10px 20px',
              margin: '0 3px',
              height: '41px',
              background: content.value === 1 ? '#2196f369' : 'rgb(227, 242, 253)',
              position: 'relative',
              textAlign:'center',
              fontWeight: 700,
            //   minWidth:'200px',
              width:'250px',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 'auto',
                width: 0,
                height: 0,
                borderTop: '24px solid transparent',
                borderBottom: '17px solid transparent',
                borderLeft: '17px solid #fff',
                zIndex: 0,
                transition: 'border-color 0.2s ease',
                left: 0,
              },
              '&:after': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: '-17px',
                width: 0,
                height: 0,
                boxSizing: 'inherit',
                borderTop: '24px solid transparent',
                borderBottom: '17px solid transparent',
                borderLeft: content.value === 1 ? '17px solid #2196f369' : '17px solid rgb(227, 242, 253)',
                zIndex: 2,
                transition: 'border-color 0.2s ease',
              },
            }}
          >
        {content.name} 
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProgressSteps;
