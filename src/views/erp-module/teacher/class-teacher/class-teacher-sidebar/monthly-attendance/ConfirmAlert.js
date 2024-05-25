// Page Owner: Suraj
// Description: Monthly Attendnace Confirmation Dialoge

import * as React from 'react';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';

export default function ConfirmAlert({ open, onClose, action, onConfirm }) {
  const handleYesClick = () => {
    onConfirm(action); // Call onConfirm with the action
    onClose();  
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
