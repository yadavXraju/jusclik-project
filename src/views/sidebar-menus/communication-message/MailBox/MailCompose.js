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
  Paper,
  MenuItem,
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import AttachmentIcon from '@mui/icons-material/Attachment';

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
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const maxCharacterLimit = 1500;

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'script',
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

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 KB';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];  
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

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
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Tooltip title="Attachment" placement="right" arrow>
              <Box>
                <label htmlFor="fileInput">
                  <Input
                    id="fileInput"
                    type="file"
                    style={{ display: 'none' }}
                    multiple
                    onChange={handleFileChange}
                    key={fileInputKey}
                  />
                  <IconButton component="span">
                    <AttachmentIcon />
                  </IconButton>
                </label>
              </Box>
            </Tooltip>
            {attachments.length > 0 && (
              <Box>
                <ul style={{ listStyleType: 'none' }}>
                  {attachments.map((file, index) => (
                    <li key={index} style={{ display: 'flex' }}>
                      <Paper sx={{ backgroundColor: '#90caf9', paddingX: '10px', marginY: '3px', justifyContent: 'space-between' }}>
                        {file.name}- ({formatBytes(file.size)})
                        <IconButton size="small" onClick={() => handleRemoveAttachment(index)}>
                          <CloseIcon color='grey' />
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
