// OWNER : DAMANDEEP
import React from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

const FontSize = ({ label, value, stateHandler,updatekey }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Check if the input is a valid positive number or empty
    if (/^\d*\.?\d*$/.test(inputValue) || inputValue === '') {
      stateHandler(updatekey,inputValue); // Update parent component's state or value
    }
  };

  return (
    <TextField
      type="number"
      label={label}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" disabled>
            pt
          </InputAdornment>
        ),
        inputProps: { min: 0 }, // Ensure input is non-negative
      }}
    />
  );
};

export default FontSize;
