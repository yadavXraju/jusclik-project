// RemarkEditor.js   sangeeta
import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const useStyles = makeStyles((theme) => ({
  editorContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function RemarkEditor({ handleRemarkInputChange, remarkValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', { color: [] }, { background: [] }, { list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, false] }],
      [{ font: [] }],
    ],
  };

  // Function to handle onChange event of ReactQuill
  const handleQuillChange = (content) => {
    if (!content.trim()) {
      handleRemarkInputChange({ target: { value: '' } }); // Clear the remark value
    } else {
      handleRemarkInputChange({ target: { value: content } }); // Update remark value
    }
  };

  return (
    <Box className={classes.editorContainer}>
      <ReactQuill
        style={{ height: isMobile ? '150px' : '200px' }}
        value={remarkValue}
        theme="snow"
        modules={modules}
        onChange={handleQuillChange} // Call handleQuillChange to handle onChange event
      />
    </Box>
  );
}
export default RemarkEditor;
