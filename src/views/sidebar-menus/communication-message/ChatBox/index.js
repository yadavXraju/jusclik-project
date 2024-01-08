import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [fileInput, setFileInput] = useState(null);
  const messageListRef = useRef();

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messageListRef.current) {
      messageListRef.current.scrollBottom = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  const handleSendClick = () => {
    if ((newMessage.trim() !== '' || fileInput) && newMessage.trim() !== '') {
      const currentTime = getCurrentTime();
      const newMessageObj = { text: newMessage, sender: 'You', timestamp: currentTime };

      if (fileInput) {
        newMessageObj.file = fileInput.name;
        setFileInput(null);
      }

      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  const handleAttachmentClick = () => {
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFileInput(file);
  };

  const getMessageBoxWidth = (message) => {
    // Calculate the width based on the message content
    const dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = message.text;
    dummyDiv.style.width = 'auto';
    dummyDiv.style.whiteSpace = 'pre-wrap';
    dummyDiv.style.position = 'absolute';
    dummyDiv.style.visibility = 'hidden';
    document.body.appendChild(dummyDiv);
    const width = dummyDiv.offsetWidth;
    document.body.removeChild(dummyDiv);
    return width + 40;
  };

  // Placeholder user information
  const userAvatar = 'url_to_avatar_image';
  const userName = 'Abhishek Negi';
  const userStatus = 'Online';

  return (
    <Box p={1} height="75vh" display="flex" flexDirection="column">
      <Paper style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}>
        <Box display="flex" alignItems="center">
          <Avatar src={userAvatar} alt={userName} sx={{ width: 50, height: 50, marginRight: 2 }} />
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {userName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {userStatus}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ paddingBottom: '10px' }} />
        <List ref={messageListRef} id="message-list">
          {messages.map((message, index) => (
            <ListItem
              key={index}
              alignItems={message.sender === 'You' ? 'flex-end' : 'flex-start'}
            >
              <ListItemText
                secondary={
                  <Box
                    bgcolor={message.sender === 'You' ? '#90caf9' : 'lightgray'}
                    p={3}
                    borderRadius={2}
                    width={getMessageBoxWidth(message)}
                    whiteSpace="pre-wrap"
                    display="flex-end"
                    maxWidth="70%"
                    flexDirection="column"
                    position="relative"
                  >
                    <Typography>
                      {message.text}
                      {message.file && <div>Attachment: {message.file}</div>}
                    </Typography>
                    <Typography
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        paddingRight: '10px',
                        color: message.sender === 'You' ? 'white' : 'black',
                      }}
                    >
                      {message.timestamp}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box display="flex" alignItems="center" mb={2} bgcolor="white" borderRadius={2} width="100%">
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .zip, .rar, .txt, .csv, .mp3, .mp4, .avi, .mkv, .gif, .svg,"
          style={{ display: 'none' }}
          ref={(input) => setFileInput(input)}
          onChange={handleFileInputChange}
        />
        <IconButton color="primary" onClick={handleAttachmentClick}>
          <AttachFileIcon />
        </IconButton>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSendClick();
            }
          }}
        />
        <IconButton color="primary" onClick={handleSendClick}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatComponent;
