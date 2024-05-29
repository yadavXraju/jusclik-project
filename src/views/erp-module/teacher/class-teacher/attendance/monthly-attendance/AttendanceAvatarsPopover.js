// Page Owner: Suraj
// Description: Monthly Attendance Popover

import React from 'react';
import { Typography, ListItemText, Avatar, Stack, Paper, Popover } from '@mui/material';

const AttendanceAvatarsPopover = ({ student, handleAvatarClick, selectedAvatarDate, open, anchorEl }) => {
  const handleAvatarSelection = (selectedAvatar) => {
    // Update the selected avatar for the individual student
    handleAvatarClick(selectedAvatar, student.id, selectedAvatarDate);
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={() => handleAvatarSelection(null)} // Close the popover when any avatar is clicked
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Paper>
        <ListItemText>
          <Typography variant="h4" color="text.secondary">
            <Stack direction="row" spacing={2} sx={{ p: 1 }}>
              <Avatar
                sx={{
                  bgcolor: '#7bc67b',
                  width: 30,
                  height: 30,
                  cursor: 'pointer',
                  color: '#000000',
                }}
                onClick={() => handleAvatarSelection('P')} // Select Present avatar
              >
                P
              </Avatar>
              <Avatar
                sx={{
                  bgcolor: '#e2526b',
                  width: 30,
                  height: 30,
                  cursor: 'pointer',
                  color: '#000000',
                }}
                onClick={() => handleAvatarSelection('A')} // Select Absent avatar
              >
                A
              </Avatar>
              <Avatar
                sx={{
                  bgcolor: '#eeb058',
                  width: 30,
                  height: 30,
                  cursor: 'pointer',
                  color: '#000000',
                }}
                onClick={() => handleAvatarSelection('L')} // Select Leave avatar
              >
                L
              </Avatar>
            </Stack>
          </Typography>
        </ListItemText>
      </Paper>
    </Popover>
  );
};

export default AttendanceAvatarsPopover;
