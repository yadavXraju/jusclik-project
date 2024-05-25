import { TextField } from '@mui/material'
import React from 'react'

const CustomTextField= ({type,label,customStyle,variant}) => {
  return (
    <>
      <TextField
      type={type}
      label={label}
      variant={variant}
      sx={customStyle}
      />
    </>
  )
}


// type -number,text,password,search
// variant -Outlined,filled,standard
// label- name of the text Field
// customStyle for styleing

export default CustomTextField
