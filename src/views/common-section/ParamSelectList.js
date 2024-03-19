import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectList = ({ label, options, value, setValue, size="small",customSytle={}, disabled=null }) => {
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    
  return (
    <div>
      <FormControl sx={{ width:'100%' }}>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="select-label"
          value={value}
          onChange={handleChange}
          label={label}
          sx={customSytle}
          size={size}
          disabled={disabled}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectList;