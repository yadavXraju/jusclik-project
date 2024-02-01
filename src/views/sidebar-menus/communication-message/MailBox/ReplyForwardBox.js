// ReplyForwardBox.jsx
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Box, Button, Paper, Toolbar, TextField, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReactQuill from 'react-quill';

const useStyles = makeStyles((theme) => ({
  editorContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const ReplyForwardBox = ({ isBoxVisible, onSend, onClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [editorValue, setEditorValue] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [attachments, setAttachments] = useState('');

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleClear = () => {
    setEditorValue('');
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSend = () => {
    const mailData = {
      userName: to,
      subject,
      message: editorValue,
      attachments,
    };
    onSend(mailData);

    // Reset state and hide the box after sending
    setTo('');
    setSubject('');
    setAttachments([]);
    setEditorValue('');
    onClose();
  };

  return isBoxVisible && (
    <Box sx={{ p: isMobile ? 1 : 3 }} fullWidth>
      <Paper className={classes.editorContainer} elevation={3} sx={{ p: isMobile ? 2 : 3 }}>
        <TextField
          id="filled-basic"
          label="To"
          variant="filled"
          fullWidth
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <ReactQuill
          style={{ height: isMobile ? '150px' : '200px' }}
          value={editorValue}
          onChange={handleEditorChange}
          theme="snow"
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, 4, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
            ],
          }}
        />
        <Toolbar className={classes.toolbar}></Toolbar>
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
          <Button variant="outlined" onClick={handleClear} sx={{ marginBottom: isMobile ? 2 : 0, marginRight: isMobile ? 0 : 2 }}>
            Clear
          </Button>
          <Button variant="outlined" onClick={handleCancel} sx={{ marginBottom: isMobile ? 2 : 0, marginRight: isMobile ? 0 : 2 }}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleSend}>
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ReplyForwardBox;
