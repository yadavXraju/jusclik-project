import React from 'react';
import { TextField } from '@mui/material';

export default function CustomTextField({ rowIndex, columnIndex, inputRefs, handleVerticalKeyDown, handleHorizontalKeyDown, isVerticalSwitchOn }) {
  const handleKeyDown = (event) => {
    // Conditionally call the appropriate key press handler based on the switch state
    if (isVerticalSwitchOn) {
      handleVerticalKeyDown(event, rowIndex, columnIndex);
    } else {
      handleHorizontalKeyDown(event, rowIndex, columnIndex);
    }
  };

  return (
    <TextField
      ref={(el) => {
        if (!inputRefs.current[rowIndex]) {
          inputRefs.current[rowIndex] = [];
        }
        inputRefs.current[rowIndex][columnIndex] = el;
      }}
      sx={{
        width: "50px",
        textAlign: "center", // Align text to the center
        '& .MuiInputBase-input': {
          textAlign: 'center', // Center the text within the input field
          cursor: 'text' // Ensure cursor appears in the center
        }
       
      }}
      onKeyDown={handleKeyDown} // Call the conditional handler
    />
  );
}
