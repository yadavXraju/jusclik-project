// Page Owner: Suraj
// Description: Confirmation Alert

import * as React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function ConfirmationDialog({ open, onClose, action, onConfirm }) {
  const handleYesClick = () => {
    onConfirm(action);
    onClose();  // Close the dialog
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
