import React, { useState, useEffect } from 'react';
import {Dialog,DialogTitle,DialogContent,DialogActions,Button,TextField,Typography,Box,Tooltip,IconButton,Input,Paper,MenuItem,FormControl,Select,OutlinedInput,InputLabel,useMediaQuery,useTheme,} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { contactData } from '../Contact-list';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

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

const MailCompose = ({ open, onClose, onSend, emailData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [personName, setPersonName] = useState([]);
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const maxCharacterLimit = 1500;

  useEffect(() => {
    if (emailData) {
      setTo(emailData.to || ''); // Set the 'to' field to the provided recipient's email address
    }
  }, [emailData]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill, we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setTo(value);
  };

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
          <FormControl fullWidth sx={{ my: 1 }}>
            <InputLabel id="demo-multiple-name-label">To</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              input={<OutlinedInput label="To" />}
              onChange={handleChange}
              MenuProps={MenuProps}
              renderValue={(selected) => selected.join(', ')}
            >
              {contactData.map((contact) => (
                <MenuItem
                  key={contact.name}
                  value={contact.name}
                  style={getStyles(contact.name, personName, theme)}
                >
                  {contact.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            id="demo-multiple-name-label"
            onChange={(e) => setSubject(e.target.value)}
          />
          <ReactQuill
            style={{ height: isMobile ? '150px' : '200px' }}
            value={message}
            onChange={handleQuillChange}
            formats={formats}
            modules={modules}
            readOnly={isCharacterLimitReached}
          />
          <Box>
            <Typography
              style={{ marginTop: '50px', fontSize: '12px', color: isCharacterLimitReached ? 'red' : 'inherit' }}
            >
              Length: {wordCount} (max Character Limit: {maxCharacterLimit})
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between', padding: '10px' }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Tooltip title="Attachment" placement="right" arrow>
              <Box>
                {/* <label htmlFor="fileInput"> */}
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
                {/* </label> */}
              </Box>
            </Tooltip>
            {attachments.length > 0 && (
              <Box>
                <ul style={{ listStyleType: 'none' }}>
                  {attachments.map((file, index) => (
                    <li key={index} style={{ display: 'flex' }}>
                      <Paper
                        sx={{
                          backgroundColor: '#90caf9',
                          paddingX: '10px',
                          marginY: '3px',
                          justifyContent: 'space-between',
                        }}
                      >
                        {file.name}- ({formatBytes(file.size)})
                        <IconButton size="small" onClick={() => handleRemoveAttachment(index)}>
                          <CloseIcon color="grey" />
                        </IconButton>
                      </Paper>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </Box>
          <Box>
            <Button
              onClick={handleSend}
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={isCharacterLimitReached}
            >
              Send
            </Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default MailCompose;
