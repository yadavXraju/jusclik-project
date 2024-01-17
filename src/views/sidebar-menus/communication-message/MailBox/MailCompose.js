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
  Tooltip,
  IconButton,
  Input,
  Paper
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import AttachmentIcon from '@mui/icons-material/Attachment';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';

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
  const [attachments, setAttachments] = useState([]);

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
      [{ 'header': [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      [{ 'align': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
    ],
  };

  const handleSend = () => {
    const mailData = {
      userName: to,
      subject,
      message,
      attachments,
    };
    onSend(mailData);
    // Reset state and close the dialog after sending
    setTo('');
    setSubject('');
    setMessage('');
    setAttachments([]);
    onClose();
  };

  const handleQuillChange = (value) => {
    if (value.length <= maxCharacterLimit) {
      setMessage(value);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    // Update state with selected files
    setAttachments([...attachments, ...selectedFiles]);
    setFileInputKey(Date.now());

  };

  const handleRemoveAttachment = (index) => {
    const updatedAttachments = [...attachments];
    updatedAttachments.splice(index, 1);
    setAttachments(updatedAttachments);
  };

  const wordCount = message.trim() === '' ? 0 : message.trim().split(/\s+/).filter(Boolean).length;
  const isCharacterLimitReached = message.length >= maxCharacterLimit;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box>
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
            style={{ height: '200px' }}
            value={message}
            onChange={handleQuillChange}
            formats={formats}
            modules={modules}
            readOnly={isCharacterLimitReached}
          />
          <Box>
            <Typography style={{ marginTop: '50px', fontSize: '12px', color: isCharacterLimitReached ? 'red' : 'inherit' }}>
              Length: {wordCount} (max Character Limit: {maxCharacterLimit})
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between', padding: '10px' }}>
<<<<<<< HEAD
          <Box>
            <Tooltip title="Attachment" placement="right" arrow>
=======
          <Box >
            <Tooltip title="Attachment">
>>>>>>> 26f7360949d3e70051b07266127431d6b3597d2f
              <label htmlFor="fileInput">
                <Input
                  id="fileInput"
                  type="file"
                  style={{ display: 'none' }}
                  multiple
                  onChange={handleFileChange}
                />
                <IconButton component="span">
                  <AttachmentIcon />
                </IconButton>
              </label>
            </Tooltip>
            {attachments.length > 0 && (
              <Box>
                <ul style={{ listStyleType: 'none' }}>
                  {attachments.map((file, index) => (
                    <li key={index}>
                      <Paper>
                        {file.name}
                        <IconButton size="small" onClick={() => handleRemoveAttachment(index)}>
                          <CloseIcon />
                        </IconButton>
                      </Paper>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </Box>
          <Box>
            <Button onClick={handleSend} color="primary" variant="contained" endIcon={<SendIcon />} disabled={isCharacterLimitReached}>
              Send
            </Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default MailCompose;
