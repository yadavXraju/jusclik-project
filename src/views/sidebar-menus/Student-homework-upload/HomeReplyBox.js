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

const TextEditor = ({ value, onChange }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleEditorChange = (value) => {
    onChange(value);
  };

  const modules = {
    toolbar: [
      
      ['bold', 'italic', 'underline', 'strike', { color: [] }, { background: [] },{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, false] }],
      [{ font: [] }],
      // [{ size: ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'] }]
    ],
  };

  return (
    <Box className={classes.editorContainer} >
  
      <ReactQuill
        style={{ height: isMobile ? '150px' : '200px', paddingLeft:'11px', paddingRight:'3px' }}
        value={value}
        onChange={handleEditorChange}
        theme="snow"
        modules={modules}
      />
    </Box>
  );
};

export default TextEditor;
