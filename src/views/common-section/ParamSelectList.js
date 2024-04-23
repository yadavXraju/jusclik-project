import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectList = ({ label, options, value, onChange, name="", size="",rootStyle={},customStyle={}, disabled=null , className=''}) => {
    
  return (
      <FormControl sx={{width:'100%',...rootStyle}}>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="select-label"
          value={value}
          onChange={onChange}
          name={name}
          label={label}
          sx={customStyle}
          size={size}
          disabled={disabled}
          className={className}
        >
          {options&&options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

export default SelectList;