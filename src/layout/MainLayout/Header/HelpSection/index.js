import React from 'react';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { styled } from '@mui/system';
import {  useTheme, Tooltip , Paper } from '@mui/material';

const HelpSection = () => {
  const theme = useTheme();  // Move this line up

  const StyledContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '34px',
    height: '34px',
    borderRadius: '8px',
    cursor: 'pointer',
  });

  const StyledIcon = styled(QuestionMarkOutlinedIcon)({
    color: '#5e35b1',
  });

  return (
    <Paper
    className='dynamicBg'
      sx={{
        backgroundColor: `rgba(${theme?.customization?.backgroundColor}, 0.5)`,
        ml: 2,
        mr: 0,
        [theme.breakpoints.down('md')]: {
          mr: 2,
        },
      }}
    >
      <Tooltip title={'Help'} arrow >
        <StyledContainer>
          <StyledIcon data-testid="CalendarMonthIcon" sx={{width:'20px'}} />
        </StyledContainer>
      </Tooltip>
    </Paper>
  );
};

export default HelpSection;
