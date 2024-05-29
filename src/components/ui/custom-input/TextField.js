// sangeeta

import { TextField } from '@mui/material'
import React from 'react'

const CustomTextField = ({ type, label, customStyle, variant, rowNo,handleChange }) => {

 
  return (
    <>
      <TextField
        multiline={type === 'multiline'} // Set multiline prop based on type
        type={type === 'multiline' ? 'text' : type} // Change type to 'text' if multiline
        label={label}
        variant={variant}
        sx={customStyle}
        rows={rowNo}
        onChange={handleChange}
      />
    </>
  )
}


// type -number,text,password,search
// variant -Outlined,filled,standard
// label- name of the text Field
// customStyle for styleing
// onChange any function from parent to child

export default CustomTextField
