// Page Owner: Suraj
// Description: Email Reply Forward Message

import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Box, Button, Paper, Toolbar, InputAdornment, FormControl, InputBase, Chip, useMediaQuery, useTheme, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReactQuill from 'react-quill';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles((theme) => ({
  editorContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  inputRoot: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap' // Add this line to wrap items
  },
  inputInput: {
    flexGrow: 1,
    marginLeft: theme.spacing(1)
  },
  inputField: {
    flex: 1,
    marginLeft: theme.spacing(1)
  }
}));

const ReplyForwardBox = ({ isBoxVisible, onSend, onClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [editorValue, setEditorValue] = useState('');
  const [to, setTo] = useState([]);
  const [cc, setCC] = useState([]);
  const [bcc, setBCC] = useState([]);
  const [ccVisible, setCCVisible] = useState(false); // State to track CC field visibility
  const [bccVisible, setBCCVisible] = useState(false); // State to track BCC field visibility

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
      to,
      cc,
      bcc,
      message: editorValue
    };
    onSend(mailData);

    // Reset state and hide the box after sending
    setTo([]);
    setCC([]);
    setBCC([]);
    setEditorValue('');
    onClose();
  };

  const handleDeleteChip = (email, field) => {
    switch (field) {
      case 'to':
        setTo((prevTo) => prevTo.filter((item) => item !== email));
        break;
      case 'cc':
        setCC((prevCC) => prevCC.filter((item) => item !== email));
        break;
      case 'bcc':
        setBCC((prevBCC) => prevBCC.filter((item) => item !== email));
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value.trim();
    if (event.key === 'Enter' && value) {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        switch (field) {
          case 'to':
            setTo([...to, value]);
            break;
          case 'cc':
            setCC([...cc, value]);
            break;
          case 'bcc':
            setBCC([...bcc, value]);
            break;
          default:
            break;
        }
        event.target.value = ''; // Clear input after adding chip
      } else {
        // Handle invalid email format
        console.log('Invalid email format');
      }
    } else if (event.key === 'Backspace' && value === '') {
      // If input is empty and backspace is pressed, delete the last chip
      switch (field) {
        case 'to':
          setTo((prevTo) => prevTo.slice(0, -1));
          break;
        case 'cc':
          setCC((prevCC) => prevCC.slice(0, -1));
          break;
        case 'bcc':
          setBCC((prevBCC) => prevBCC.slice(0, -1));
          break;
        default:
          break;
      }
    }
  };

  return (
    isBoxVisible && (
      <Box sx={{ p: isMobile ? 1 : 3 }} fullWidth>
        <Paper className={classes.editorContainer} elevation={3} sx={{ p: isMobile ? 2 : 3 }}>
          <FormControl fullWidth>
            <div className={classes.inputRoot}>
              <InputAdornment position="start">To:</InputAdornment>
              {to.map((email, index) => (
                <Chip
                  key={index}
                  label={email}
                  onDelete={() => handleDeleteChip(email, 'to')}
                  className={classes.chip}
                  color="primary"
                  variant="outlined"
                  avatar={<Avatar>{email.charAt(0)}</Avatar>}
                  deleteIcon={<CancelIcon />}
                />
              ))}
              <InputBase
                id="to"
                className={classes.inputField}
                inputProps={{ 'aria-label': 'to' }}
                autoFocus
                onKeyDown={(event) => handleInputChange(event, 'to')}
              />
            </div>
          </FormControl>
          {ccVisible && (
            <FormControl fullWidth>
              <div className={classes.inputRoot}>
                <InputAdornment position="start">Cc:</InputAdornment>
                {cc.map((email, index) => (
                  <Chip
                    key={index}
                    label={email}
                    onDelete={() => handleDeleteChip(email, 'cc')}
                    className={classes.chip}
                    color="primary"
                    variant="outlined"
                    avatar={<Avatar>{email.charAt(0)}</Avatar>}
                    deleteIcon={<CancelIcon />}
                  />
                ))}
                <InputBase
                  id="cc"
                  className={classes.inputField}
                  inputProps={{ 'aria-label': 'cc' }}
                  onKeyDown={(event) => handleInputChange(event, 'cc')}
                />
              </div>
            </FormControl>
          )}
          {bccVisible && (
            <FormControl fullWidth>
              <div className={classes.inputRoot}>
                <InputAdornment position="start">Bcc:</InputAdornment>
                {bcc.map((email, index) => (
                  <Chip
                    key={index}
                    label={email}
                    onDelete={() => handleDeleteChip(email, 'bcc')}
                    className={classes.chip}
                    color="primary"
                    variant="outlined"
                    avatar={<Avatar>{email.charAt(0)}</Avatar>}
                    deleteIcon={<CancelIcon />}
                  />
                ))}
                <InputBase
                  id="bcc"
                  className={classes.inputField}
                  inputProps={{ 'aria-label': 'bcc' }}
                  onKeyDown={(event) => handleInputChange(event, 'bcc')}
                />
              </div>
            </FormControl>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {!ccVisible && <Button onClick={() => setCCVisible(true)} sx={{minWidth:'10px'}}>Cc</Button>}
            {!bccVisible && <Button onClick={() => setBCCVisible(true)} sx={{minWidth:'10px'}}>Bcc</Button>}
          </Box>
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
                ['link', 'image']
              ]
            }}
          />
          <Toolbar className={classes.toolbar}></Toolbar>
          <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', marginTop: isMobile ? 3 : 0 }}>
            <Button variant="outlined" onClick={handleClear} sx={{ marginBottom: isMobile ? 1 : 0, marginRight: isMobile ? 0 : 2 }}>
              Clear
            </Button>
            <Button variant="outlined" onClick={handleCancel} sx={{ marginBottom: isMobile ? 1 : 0, marginRight: isMobile ? 0 : 2 }}>
              Cancel
            </Button>
            <Button variant="outlined" onClick={handleSend}>
              Send
            </Button>
          </Box>
        </Paper>
      </Box>
    )
  );
  
};

export default ReplyForwardBox;
