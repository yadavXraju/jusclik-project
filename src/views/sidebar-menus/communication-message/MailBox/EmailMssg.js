import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardIcon from '@mui/icons-material/Forward';
import MainCard from 'ui-component/cards/MainCard';

const Message = ({ email }) => {
  const [isReplyOpen, setReplyOpen] = useState(false);
  const [isForwardOpen, setForwardOpen] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [forwardContent, setForwardContent] = useState('');

  const handleReplyOpen = () => setReplyOpen(true);
  const handleReplyClose = () => setReplyOpen(false);

  const handleForwardOpen = () => setForwardOpen(true);
  const handleForwardClose = () => setForwardOpen(false);

  const handleReplySend = () => {
    console.log('Reply Sent:', replyContent);
    handleReplyClose();
  };

  const handleForwardSend = () => {
    console.log('Forward Sent:', forwardContent);
    handleForwardClose();
  };

  return (
    <MainCard title="Mail Message">
    <Card>
      <CardContent>
        <Typography variant="h5">{email.subject}</Typography>
        <Typography variant="body1">{email.sender}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2">{email.body}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleReplyOpen}>
          <ReplyIcon />
        </IconButton>
        <IconButton onClick={handleForwardOpen}>
          <ForwardIcon />
        </IconButton>
      </CardActions>

      <Dialog open={isReplyOpen} onClose={handleReplyClose}>
        <DialogTitle>Reply to Email</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            label="Reply Content"
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReplyClose}>Cancel</Button>
          <Button onClick={handleReplySend} color="primary">
            Send Reply
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isForwardOpen} onClose={handleForwardClose}>
        <DialogTitle>Forward Email</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            label="Forward Content"
            value={forwardContent}
            onChange={(e) => setForwardContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleForwardClose}>Cancel</Button>
          <Button onClick={handleForwardSend} color="primary">
            Send Forward
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
    </MainCard>

  );
};

export default Message;
