// OWNER : DAMANDEEP
import { Box, FormControl, InputAdornment, TextField } from '@mui/material';
import React from 'react';
// this component will take 
// 1) initialColor : whis is the initial color value which is to be displayed
// 2) onColorChange : function which takes two params 1st is (key) and 2nd is (value)
// 3) colorKey: which is the key whose value is to be updated 
// 4) label : the lable which is to be displayed

// usage with React.States : ref: CommonDropZone 
export const CommonColorPicker=({ initialColor, onColorChange, colorKey, label ,enable })=>{
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
            inputProps: {  },
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
                  disabled={!enable}
                />
              </InputAdornment>
            )
          }}
          disabled={!enable}
        />
      </FormControl>
    </Box>
  );
}
