import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Box, Button, Paper, Toolbar, TextField } from '@mui/material';
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

const ReplyForwardBox = () => {
    const classes = useStyles();
    const [editorValue, setEditorValue] = useState('');

    const handleEditorChange = (value) => {
        setEditorValue(value);
    };

    const handleClear = () => {
        setEditorValue('');
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

    return (
        <Box sx={{ p: 3 }} fullWidth>
            <Paper className={classes.editorContainer} elevation={3} sx={{ p: 3 }}>
            <TextField id="filled-basic" label="To" variant="filled" fullWidth/>
                <ReactQuill
                    style={{ height: '200px' }}
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
                <Toolbar className={classes.toolbar}>
                </Toolbar>
                <Box>
                <Button variant="outlined" onClick={handleClear}>
                    Clear
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
