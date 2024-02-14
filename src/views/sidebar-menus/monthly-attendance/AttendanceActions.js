import React from 'react';
import { Popover, List, ListItem, ListItemButton, ListItemText, Typography, Avatar } from '@mui/material';
import ConfirmAlert from './ConfirmAlert';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function AttendanceActions({ onConfirm, date, selectedAvatars = {}, setSelectedAvatars }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = React.useState(false);
  const [selectedAction, setSelectedAction] = React.useState('');

  const handleClickOpen = (action) => {
    setSelectedAction(action);
    setConfirmationDialogOpen(true);
  };

  const handleConfirm = () => {
    // Pass the confirmed action to the parent component
    onConfirm(selectedAction);
    setConfirmationDialogOpen(false);
    setAnchorEl(null);
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
        <ConfirmAlert
          open={isConfirmationDialogOpen}
          onClose={() => setConfirmationDialogOpen(false)}
          onConfirm={handleConfirm}
          action={selectedAction}
          selectedText={selectedAction}
        />
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
    </div>
  );
}
