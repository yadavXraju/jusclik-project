import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';

import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const Queries = [
  {
    value: 'Transport',
    label: 'Transport',
  },
  {
    value: 'Fee',
    label: 'Fee',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];


const MailCompose = ({ open, onClose, onSend }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const maxCharacterLimit = 1500;

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image',
    'align', 'script',
  ];

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      [{ 'align': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
    ],
  };
  
  

  const handleSend = () => {
    const mailData = {
      to,
      subject,
      message,
    };
    onSend(mailData);
  };

  const handleQuillChange = (value) => {
    if (value.length <= maxCharacterLimit) {
      setMessage(value);
    }
  };

  const wordCount = message.trim() === '' ? 0 : message.trim().split(/\s+/).length;
  const isCharacterLimitReached = message.length >= maxCharacterLimit;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>New Message</div>
        <Button onClick={onClose} color="secondary" startIcon={<CloseIcon />} />
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="To"
          variant="outlined"
          margin="normal"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-select-queries"
            select
            label="Related to"
            style={{ width: '100%' }}
          >
            {Queries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <TextField
          fullWidth
          label="Subject"
          variant="outlined"
          margin="normal"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <ReactQuill
          style={{ height: '300px' }}
          value={message}
          onChange={handleQuillChange}
          formats={formats}
          modules={modules}
          readOnly={isCharacterLimitReached} 
        />
        <Typography style={{ marginTop: '20px', fontSize:'12px', color: isCharacterLimitReached ? 'red' : 'inherit' }}>
          Length: {wordCount} (max Character Limit: {maxCharacterLimit})
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSend} color="primary" startIcon={<SendIcon />} disabled={isCharacterLimitReached}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MailCompose;
