import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function NumericTextField({ rowIndex, cellIndex, admissionNo, handleTextFieldKeyPress }) {
  const [error, setError] = useState(false); // State to manage error state

  const handleKeyPress = (event) => {
    const inputValue = event.target.value;
    const regex = /^[0-9]*$/; // Regular expression to match only numbers
  
    if (!regex.test(inputValue)) {
      event.preventDefault(); // Prevent typing non-numeric characters
      setError(true); // Set error state to true if input contains non-numeric characters
    } else {
      // Check if the entered marks exceed the total marks
      if (event.key === 'Enter' && parseInt(inputValue) > 20) {
        event.preventDefault(); // Prevent typing marks exceeding total marks
        setError(true); // Set error state to true
        alert(`Enter marks cannot be greater than the marks of the subject`);
      } else {
        setError(false); // Reset error state if input is valid
      }
    }
    
    // Set a flag to indicate whether the input should be cleared
    const clearInput = event.key === 'Enter' && parseInt(inputValue) > 20;

    handleTextFieldKeyPress(event, rowIndex, cellIndex, clearInput);
    if (clearInput && event.key === 'Backspace') {
      event.target.value = ''; // Clear the input value
    }
  }

  return (
    <TextField
      fullWidth
      autoFocus={rowIndex === 0 && cellIndex === 0} // Autofocus only if the switch is on
     
      variant="outlined"
      inputProps={{ id: `textfield-${rowIndex}-${cellIndex}-${admissionNo}` }}
      onKeyDown={handleKeyPress}
      onInput={(event) => {
        const userInput = event.target.value;
        const numericRegex = /^[0-9]*$/; // Regular expression to match only numeric characters
    
        // Check if the input matches the numeric regex pattern
        if (!numericRegex.test(userInput)) {
          // If input doesn't match, remove non-numeric characters
          const numericValue = userInput.replace(/[^0-9]/g, '');
          event.target.value = numericValue; // Update the input value
          event.target.style.border = '1px solid red'; // Change border color to red
        } else {
          event.target.style.border = ''; // Reset border color
        }
      }}
      error={error} // Apply error state to change border color to red
      sx={{
        width: "50px",
        textAlign: "center", // Align text to the center
        '& .MuiInputBase-input': {
          textAlign: 'center', // Center the text within the input field
          cursor: 'text' // Ensure cursor appears in the center
        },
        '& .MuiOutlinedInput-root': {
          borderColor: error ? 'red' : '', // Change border color to red if there's an error
        },
      }}
    />
  );
}
