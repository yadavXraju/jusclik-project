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
  cursor: 'pointer',
});


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


    // Extract theme color and set opacity
    const themeColor = customization.themeColorV2 || 'rgb(30, 136, 229)';
    const opacity = 0.2;  

  return (
    <Paper
    className='themeColorV2'
    sx={{
      backgroundColor: `${themeColor.slice(0, -1)}, ${opacity}) !important`, // Adding opacity
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
          <CalendarMonthIcon className='themeColorV2' sx={{
             color:`${theme?.customization?.themeColor} ` ,
             width: '20px'
             }}/>
        </StyledContainer>
      </Tooltip>
    </Paper>
  );
};

export default AcademicYear;


