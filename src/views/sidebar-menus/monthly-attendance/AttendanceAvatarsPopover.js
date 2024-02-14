import React from 'react';
import { Typography, ListItemText, Avatar, Stack, Paper } from '@mui/material';


const AttendanceAvatarsPopover = ({ student, handleAvatarClick, selectedAvatarDate }) => {
  const handleAvatarSelection = (selectedAvatar) => {
    // Update the selected avatar for the individual student
    handleAvatarClick(selectedAvatar, student.id, selectedAvatarDate);
  }; 
  
  return (
    <Paper>
      <ListItemText>
        <Typography variant="h4" color="text.secondary">
          <Stack direction="row" spacing={2} sx={{ p: 1 }}>
            <Avatar
              sx={{
                bgcolor: '#f1f1f1',
                width: 30,
                height: 30,
                cursor: 'pointer',
                color: '#000000'
              }}
              onClick={() => handleAvatarSelection('P')} // Select Present avatar
            >
              P
            </Avatar>
            <Avatar
              sx={{
                bgcolor: '#f1f1f1',
                width: 30,
                height: 30,
                cursor: 'pointer',
                color: '#000000'
              }}
              onClick={() => handleAvatarSelection('A')} // Select Absent avatar
            >
              A
            </Avatar>
            <Avatar
              sx={{
                bgcolor: '#f1f1f1',
                width: 30,
                height: 30,
                cursor: 'pointer',
                color: '#000000'
              }}
              onClick={() => handleAvatarSelection('L')} // Select Leave avatar
            >
              L
            </Avatar>
          </Stack>
        </Typography>
      </ListItemText>
    </Paper>
  );
};

export default AttendanceAvatarsPopover;
