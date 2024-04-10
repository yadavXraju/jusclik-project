import React from 'react';
import { Button, Popover, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ConfirmationDialog from './Confirmation';

function ActionButton({ onTextSelect,onConfirm }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = React.useState(false);
  const [selectedAction, setSelectedAction] = React.useState('');
  const [selectedText, setSelectedText] = React.useState('');
  
  const handleClickOpen = (action,text) => {
    setSelectedAction(action);
    setSelectedText(text);
    setConfirmationDialogOpen(true);
  };

  const handleConfirm = () => {
    // Pass the confirmed action to the parent component
    onConfirm(selectedAction, selectedText);
    setConfirmationDialogOpen(false);
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
      <Button
        variant="outlined"
        size="small"
        onClick={handleClick}
        sx={{ padding: '10px', margin: '0 0 6px 8px', width: '100px' }}
      >
        Actions
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List sx={{ width: '100%', bgcolor: 'background.paper' }} aria-label="contacts">
          <ListItem>
            <ListItemButton sx={{padding:"4px 16px"}}
            disablePadding onClick={() => handleClickOpen("A", "Mark all A")}>
              <ListItemText  primary="Mark all A" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{padding:"4px 16px"}}
             disablePadding onClick={() => handleClickOpen("B", "Mark all B")}>
              <ListItemText primary="Mark all B" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton  sx={{padding:"4px 16px"}}
            disablePadding onClick={() => handleClickOpen("C", "Mark all C")}>
              <ListItemText primary="Mark all C" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{padding:"4px 16px"}}
             disablePadding onClick={() => handleClickOpen("D", "Mark all D")}>
              <ListItemText primary="Mark all D" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton sx={{padding:"4px 16px"}}
            disablePadding onClick={() => handleClickOpen("Clear All", "Clear All")}>
              <ListItemText primary="Clear All" />
            </ListItemButton>
          </ListItem>
        </List>
        <ConfirmationDialog
         open={isConfirmationDialogOpen}
         onClose={() => setConfirmationDialogOpen(false)}
         onConfirm={handleConfirm}
         action={selectedAction}
         selectedText={selectedText}
         onTextSelect={onTextSelect} 
        />
      </Popover>
    </div>
  );
}

export default ActionButton;
