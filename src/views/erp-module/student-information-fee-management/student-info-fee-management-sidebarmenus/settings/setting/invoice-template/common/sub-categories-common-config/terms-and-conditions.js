import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Box} from '@mui/material'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTermsAndConditions } from 'store/student-info-and-fee/settings/Invoice-Template-Slice';

const TermsAndConditions = () => {
  const termsAndConditions=useSelector(state=>state.invoiceTemplate.termsAndConditions)
  const [content, setContent] = useState(termsAndConditions);
  const dispatch=useDispatch()
  const handleChange = (value) => {
    setContent(value);
  };
  useEffect(()=>{
    dispatch(updateTermsAndConditions(content))
  },[content])

  return (
      <>
        <Box minHeight='25rem'>
          <ReactQuill value={content} onChange={handleChange} style={{height:'21rem'}} />
        </Box>
      </>
  );
};

export default TermsAndConditions;
