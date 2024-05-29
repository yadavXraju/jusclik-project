// OWNER DAMAN

import { TextField } from '@mui/material'
import React from 'react'

const CustomTextField = ({ name="", label="",varient='outlined', customStyle,handleChange,...props }) => {

 
  return (
    <>
      <TextField
        name={name}
        label={label}
        variant={varient}
        sx={customStyle}
        onChange={handleChange}
        {...props}
      />
    </>
  )
}

// label- name of the text Field
// customStyle for styling
// onChange any function from parent to child

export default CustomTextField
