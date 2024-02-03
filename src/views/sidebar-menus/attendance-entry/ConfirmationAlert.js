import * as React from 'react';
import { ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function ConfirmationDialog({ open, onClose, action }) {
  const [selectedText, setSelectedText] = React.useState('');

  const handleTextClick = (text) => {
    setSelectedText(text);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ListItemText onClick={() => handleTextClick(action)} />
            {selectedText && <span>Selected Text: {selectedText}</span>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Yes</Button>
          <Button onClick={onClose}>No</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
