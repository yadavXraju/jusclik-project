import React from 'react';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';

export default function ConfirmationDialog({ open, onClose, action, onConfirm,onTextSelect }) {

    const handleYesClick = () => {
        onConfirm(action);
        
        onClose();  // Close the dialog
        if (onTextSelect) {
            onTextSelect(selectedText);
          }
      };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant='h3' color={'#364152'}>
              Do you really want to {action}?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYesClick}>Yes</Button>
          <Button onClick={onClose}>No</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
