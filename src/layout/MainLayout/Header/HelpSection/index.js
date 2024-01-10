import React from 'react';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';


import { styled } from '@mui/system';
import { Box, useTheme, Tooltip } from '@mui/material';

export const StyledContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '34px',
  height: '34px',
  borderRadius: '8px',
  backgroundColor: '#ede7f6',
  
  cursor: 'pointer',
});

const StyledIcon = styled(QuestionMarkOutlinedIcon)({
  color: '#5e35b1',
});



const HelpSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ml: 2,
        mr: 0,
        [theme.breakpoints.down('md')]: {
          mr: 2,
        },
      }}
    >
      <Tooltip title={'Help'} arrow>
        <StyledContainer>
          <StyledIcon data-testid="CalendarMonthIcon" sx={{width:'20px'}} />
        </StyledContainer>
      </Tooltip>
    </Box>
  );
};

export default HelpSection;
