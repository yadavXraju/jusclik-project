import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled } from '@mui/system';
import { Box, useTheme, Tooltip } from '@mui/material';

const StyledContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#2196f3',
  cursor: 'pointer',
});

const StyledIcon = styled(CalendarMonthIcon)({
  color: 'white',
});

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

  return (
    <Box
      sx={{
        ml: 2,
        mr: 3,
        [theme.breakpoints.down('md')]: {
          mr: 2,
        },
      }}
    >
      <Tooltip title={`Academic Year ${academicYear}`} arrow>
        <StyledContainer>
          <StyledIcon data-testid="CalendarMonthIcon" />
        </StyledContainer>
      </Tooltip>
    </Box>
  );
};

export default AcademicYear;
