import React from 'react';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { styled } from '@mui/system';
import { useTheme, Tooltip, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

const HelpSection = () => {
  const theme = useTheme();

  const StyledContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '34px',
    height: '34px',
    borderRadius: '8px',
    cursor: 'pointer',
  });

  // const StyledIcon = styled(QuestionMarkOutlinedIcon)({
  //   color: `${theme?.customization?.backgroundColor} `,
  // });

    // to store state in this varible
    const customization = useSelector((state) => state.customization);

    
  // Extract background color and set opacity
  const backgroundColor = customization.backgroundColor || 'rgb(94, 53, 177)';
  const opacity = 0.2;

  return (
    <Paper
      className='dynamicBg'
      sx={{
        backgroundColor: `${backgroundColor.slice(0, -1)}, ${opacity}) !important`, // Adding opacity
        ml: 2,
        mr: 0,
        [theme.breakpoints.down('md')]: {
          mr: 2,
        },
        borderRadius: '7px',
      }}
    >
      <Tooltip title={'Help'} arrow>
        <StyledContainer>
          {/* <StyledIcon className='dynamicBg' data-testid="CalendarMonthIcon" sx={{ width: '20px' }} /> */}
          <QuestionMarkOutlinedIcon className='dynamicBg' sx={{
             color:`${theme?.customization?.backgroundColor} ` ,
             width: '20px'
             }}/>
        </StyledContainer>
      </Tooltip>
    </Paper>
  );
};

export default HelpSection;
