// ======= Page Owner Vikash =========
// ======= Progress Steps in Preview =========
import { Box } from '@mui/system';
import React from 'react';
import Badge from '@mui/material/Badge';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

const ProgressSteps = () => {
  const stepContents = [
    {
      name: 'Unverified',
      value: 1
    },
    {
      name: 'Verified',
      value: 1
    },
    {
      name: 'Application Started',
      value: 1
    },
    {
      name: 'Payment Approved',
      value: 0
    },
    {
      name: 'Application Submitted',
      value: 0
    },
  ]; // Content for each step

  return (
    <Box className='scrollbar' mb={2} mt={1} sx={{ display: 'flex' }}> {/* Flex container */}
      {stepContents.map((content, index) => (
        <Box sx={{ margin: '12px 38px 0 0' }} key={index}> {/* Each box */}
          {content.value === 1 && (
            <Badge color="primary" sx={{ '& .MuiBadge-badge': { padding: '2px', border:'2px solid white' }}} badgeContent={<DoneOutlinedIcon sx={{ width: '12px' }} />}>
              <Box
                sx={{
                  padding: '10px 20px',
                  border: '1px solid',
                  width: 'max-content',
                  position: 'relative',
                  textAlign: 'center',
                  fontWeight: 700,
                  borderColor: '#2196f3',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    width: '20px',
                    color: '#2196f3',
                    background: '#2196f3',
                    height: '1px',
                    left: '-20px',
                  },
                  '&:after': {
                    content: '""',
                    position: index === stepContents.length - 1 ? 'static' : 'absolute',
                    top: '50%',
                    width: '20px',
                    color: '#2196f3',
                    background: '#2196f3',
                    height: '1px',
                    right: '-20px',
                  },
                }}
              >
                <Box color='#2196f3'>{content.name}</Box>
              </Box>
            </Badge>
          )}
          {content.value !== 1 && (
            <Box
              sx={{
                padding: '10px 20px',
                width: 'max-content',
                border: '1px solid #ccc',
                position: 'relative',
                textAlign: 'center',
                fontWeight: 700,
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  width: '20px',
                  color: '#ccc',
                  background: '#ccc',
                  height: '1px',
                  left: '-20px',
                },
                '&:after': {
                  content: '""',
                  position: index === stepContents.length - 1 ? 'static' : 'absolute',
                  top: '50%',
                  width: '20px',
                  color: '#ccc',
                  background: '#ccc',
                  height: '1px',
                  right: '-20px',
                },
              }}
            >
              <Box>{content.name}</Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ProgressSteps;
