import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function NumericTextField({ rowIndex, cellIndex, admissionNo, handleTextFieldKeyPress }) {
  const [error, setError] = useState(false); // State to manage error state

  const handleKeyPress = (event) => {
    const inputValue = event.target.value;
    const regex = /^[0-9]*$/; // Regular expression to match only numbers

    if (!regex.test(inputValue) && inputValue.length > 0 ) {
      setError(true); // Set error state to true if input contains non-numeric characters
    } else {
      setError(false); // Reset error state if input is valid
    }

    // Call the parent handler regardless of the input to handle other keypress events
    handleTextFieldKeyPress(event, rowIndex, cellIndex);
  };

  // Inline CSS for shaking animation
  const shakeStyle = `
    @keyframes shake {
      0% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80%, 100% { transform: translateX(5px); }
    }

    .shake {
      animation: shake 0.2s; /* Decrease animation duration */
    }
  `;

  return (
    <>
      {/* Add style tag with CSS for shake animation */}
      <style>{shakeStyle}</style>
      <TextField
        fullWidth
        variant="outlined"
        inputProps={{ id: `textfield-${rowIndex}-${cellIndex}-${admissionNo}` }}
        onKeyDown={handleKeyPress}
        error={error} // Apply error state to change border color to red
        sx={{
          width: "50px",
          textAlign: "center",
          '& .MuiOutlinedInput-root': {
            borderColor: error ? 'red' : '', // Change border color to red if there's an error
          },
        }}
        className={error ? 'shake' : ''} // Add shake class if there's an error
      />
    </>
  );
}
