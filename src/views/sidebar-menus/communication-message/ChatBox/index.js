import React, { useState } from 'react';
import { Box, Paper, List, ListItem, ListItemText, TextField, IconButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleSendClick = () => {
    if (newMessage.trim() !== '') {
      const currentTime = getCurrentTime();
      setMessages([...messages, { text: newMessage, sender: 'You', timestamp: currentTime }]);
      setNewMessage('');
    }
  };

  return (
    <Box p={1} height="75vh" display="flex" flexDirection="column">
      <Paper style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}>
        <List>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              alignItems={message.sender === 'You' ? 'flex-end' : 'flex-start'}
            >
              <ListItemText
                primary={
                  <>
                    <Typography variant="body2" color="textSecondary" component="div">
                      {message.sender}
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Box
                      bgcolor={message.sender === 'You' ? '#90caf9' : 'white'}
                      p={2}
                      borderRadius={2}
                      width="70%"
                      whiteSpace="pre-wrap"
                      display="flex"
                      justifyContent={'space-between'}
                    >
                      <Typography>
                        {message.text}
                      </Typography>
                      <Typography>{message.timestamp}</Typography>
                    </Box>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box display="flex" alignItems="center" mb={2} bgcolor="white" borderRadius={2} width="100%">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <IconButton color="primary" onClick={handleSendClick}>
          <AttachFileIcon />
        </IconButton>
        <IconButton color="primary" onClick={handleSendClick}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatComponent;
