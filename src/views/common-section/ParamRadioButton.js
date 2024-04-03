import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({ label="", defaultValue, options, onChange, rootStyle={},customSytle={}, disabled=null }) {

  return (
    <FormControl sx={{width:'100%',...rootStyle}}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup defaultValue={defaultValue} row onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            disabled={disabled}
            sx={customSytle}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
