import React from 'react';
import { TextField } from '@mui/material';

export default function CustomTextField({ rowIndex, columnIndex, inputRefs, handleKeyDown }) {
  return (
    <TextField
      ref={(el) => {
        if (!inputRefs.current[rowIndex]) {
          inputRefs.current[rowIndex] = [];
        }
        inputRefs.current[rowIndex][columnIndex] = el;
      }}
      sx={{ width: "50px", textAlign: "center" }}
      onKeyDown={(event) => handleKeyDown(event, rowIndex, columnIndex)}
    />
  );
}
