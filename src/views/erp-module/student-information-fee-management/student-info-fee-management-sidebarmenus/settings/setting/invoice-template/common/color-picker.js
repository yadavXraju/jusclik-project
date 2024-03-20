import { Box, FormControl, InputAdornment, TextField } from '@mui/material';
import React from 'react';

function ColorPicker({ initialColor, onColorChange, colorKey, label }) {
  const handleColorChange = (event) => {
    onColorChange(colorKey, event.target.value);
  };
  const handleManualColorChange = (event) => {
    const inputColor = event.target.value;
    onColorChange(colorKey, inputColor);
  };
  return (
    <Box>

      <FormControl fullWidth variant="outlined">
        <TextField
          id={`manualColorInput-${colorKey}`}
          label={label}
          type="text"
          value={initialColor}
          onChange={handleManualColorChange}
          InputProps={{
            inputProps: { style: { fontSize: 20 } },
            style: { width: '100%' },
            endAdornment: (
              <InputAdornment position="end">
                <input
                  id={`colorPicker-${colorKey}`}
                  type="color"
                  value={initialColor}
                  onChange={handleColorChange}
                  style={{
                    width: '30px',
                    height: '30px',                    
                    cursor: 'pointer',
                    border:'none',
                    padding:'0',
                    margin:'0'
                  }}
                />
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    </Box>
  );
}

export default ColorPicker;
