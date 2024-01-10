import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const MailCompose = ({ open, onClose, onSend }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const mailData = {
      to,
      subject,
      message,
    };
    onSend(mailData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>New Message</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="To"
          variant="outlined"
          margin="normal"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <TextField
          fullWidth
          label="Subject"
          variant="outlined"
          margin="normal"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <ReactQuill
          value={message}
          onChange={(value) => setMessage(value)}
          modules={{ toolbar: [['bold', 'italic', 'underline', 'strike'], [{ 'list': 'ordered' }, { 'list': 'bullet' }]] }}
          formats={['bold', 'italic', 'underline', 'strike', 'list', 'bullet']}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" startIcon={<CloseIcon />}>
          Close
        </Button>
        <Button onClick={handleSend} color="primary" startIcon={<SendIcon />}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MailCompose;
