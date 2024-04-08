import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Box} from '@mui/material'

const TermsAndConditions = () => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
        <>
        <Box minHeight='25rem'>
      <ReactQuill value={content} onChange={handleChange} style={{height:'21rem'}} />
      </Box>
      </>
  );
};

export default TermsAndConditions;
