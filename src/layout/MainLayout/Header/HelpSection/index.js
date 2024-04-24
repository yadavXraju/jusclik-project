import React from 'react';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { styled } from '@mui/system';
import { useTheme, Tooltip, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const HelpSection = ({ setOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const StyledContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '34px',
    height: '34px',
    borderRadius: '8px',
    cursor: 'pointer',
  });


  const handleClick = () => {
    navigate('contact-support');
    setOpen(false); // Close the Popper
  };

    // to store state in this varible
    const customization = useSelector((state) => state.customization);

    
  // Extract theme color and set opacity
  const themeColor = customization.themeColor || 'rgb(30, 136, 229)';
  const opacity = 0.2;

  return (
    <Paper
      className='themeColor'
      sx={{
        backgroundColor: `${themeColor.slice(0, -1)}, ${opacity}) !important`, // Adding opacity
        ml: 2,
        mr: 0,
        [theme.breakpoints.down('md')]: {
          mr: 0,
          ml:0,
        },
        borderRadius: '7px',
      }}
    >
      <Tooltip title={'Help'} arrow onClick={handleClick}>
        <StyledContainer>
          {/* <StyledIcon className='dynamicBg' data-testid="CalendarMonthIcon" sx={{ width: '20px' }} /> */}
          <QuestionMarkOutlinedIcon className='themeColor' sx={{
             color:`${theme?.customization?.themeColor} ` ,
             width: '20px'
             }}/>
        </StyledContainer>
      </Tooltip>
    </Paper>
  );
};

export default HelpSection;
