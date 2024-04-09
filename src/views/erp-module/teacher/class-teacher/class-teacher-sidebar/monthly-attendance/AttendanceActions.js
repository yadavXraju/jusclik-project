import React from 'react';
import { Popover, List, ListItem, ListItemButton, ListItemText, Typography, Avatar } from '@mui/material';
import ConfirmAlert from './ConfirmAlert';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function AttendanceActions({ date, selectedAvatars = {}, setSelectedAvatars,onConfirm }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedAction, setSelectedAction] = React.useState('');

  const handleClickOpen = (action) => {
    setSelectedAction(action);
    setAnchorEl(null); // Close the popover
  };

  const handleConfirm = () => {
    // Implement confirmation logic here if needed
    // For example, updating state, making API calls, etc.
    setSelectedAction(''); // Reset selected action after confirming
    onConfirm(selectedAction);
    setAnchorEl(null); // Close the popover
  };

  const handleAvatarClick = (selectedAvatar, studentId) => {
    // Update the selected avatar for the individual student
    const updatedAvatars = { ...selectedAvatars };
    updatedAvatars[studentId] = selectedAvatar;
    setSelectedAvatars(updatedAvatars);
    // Close the popover after selecting an avatar
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedAction(''); // Reset selected action after closing popover
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Typography variant="h4" aria-describedby={id} onClick={handleClick}>
        {`${date.format('DD')} ${date.format('ddd')}`}
        <KeyboardArrowDownOutlinedIcon/>
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
          <ListItem disablePadding onClick={() => handleClickOpen('mark all holiday')}>
            <ListItemButton>
              <ListItemText id="1" primary="Mark all holiday" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => handleClickOpen('mark all present')}>
            <ListItemButton>
              <ListItemText id="2" primary="Mark all present" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => handleClickOpen('mark all absent')}>
            <ListItemButton>
              <ListItemText id="3" primary="Mark all absent" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
      {/* Render avatars for each student */}
      {Object.keys(selectedAvatars).map(studentId => (
        <Avatar
          key={studentId}
          sx={{
            bgcolor: '#7dceeb',
            width: 40,
            height: 40,
            cursor: 'pointer',
            color: '#000000'
          }}
          onClick={() => handleAvatarClick('H', studentId)}
        >
          {selectedAvatars[studentId]}
        </Avatar>
      ))}
      {/* Render ConfirmAlert outside Popover */}
      <ConfirmAlert
        open={Boolean(selectedAction)}
        onClose={() => setSelectedAction('')} // Reset selected action after closing ConfirmAlert
        onConfirm={handleConfirm} // Pass handleConfirm as the onConfirm prop
        action={selectedAction}
        selectedText={selectedAction}
      />
    </div>
  );
}

