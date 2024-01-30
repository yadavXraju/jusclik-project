import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled } from '@mui/system';
import { Paper, useTheme, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';

export const StyledContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '34px',
  height: '34px',
  borderRadius: '8px',
  // backgroundColor: '#409ae9f5',
  cursor: 'pointer',
});

// const StyledIcon = styled(CalendarMonthIcon)({
//   color: 'white',
// });

// this function for set acadmic year 

const getAcademicYear = () => {

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); 
  const currentYear = currentDate.getFullYear();

  if (currentMonth >= 4) {
    return `${currentYear}-${currentYear + 1}`;
  } else {
    return `${currentYear - 1}-${currentYear}`;
  }
};

const AcademicYear = () => {
  const theme = useTheme();
  const academicYear = getAcademicYear();

    // to store state in this varible
    const customization = useSelector((state) => state.customization);


    // Extract background color and set opacity
    const backgroundColor = customization.backgroundColorV2 || 'rgb(30, 136, 229)';
    const opacity = 0.2;  

  return (
    <Paper
    className='dynamicBgV2'
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
      <Tooltip title={`Academic Year ${academicYear}`} arrow>
        <StyledContainer>
          {/* <StyledIcon data-testid="CalendarMonthIcon" sx={{width:'20px'}} /> */}
          <CalendarMonthIcon className='dynamicBgV2' sx={{
             color:`${theme?.customization?.backgroundColorV2} ` ,
             width: '20px'
             }}/>
        </StyledContainer>
      </Tooltip>
    </Paper>
  );
};

export default AcademicYear;


