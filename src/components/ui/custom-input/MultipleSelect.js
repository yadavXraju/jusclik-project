// ======= Page Owner Vikash =========
// ======= Multiple Select Chip Component ========
import React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

export default function ParamMultipleSelect({ options, value, setValue, label = '' , sx ,multiple=true}) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);
  // Filter out selected options from the available options
    let filteredOptions  
    if(multiple)
    filteredOptions=options.filter(option => !value.some(val => val.id === option.id));

  return (
    <Autocomplete
      multiple={multiple}
      id="student-autocomplete"
      options={multiple?filteredOptions:options}
      getOptionLabel={(option) => option.name}
      value={value}
      onChange={handleChange}
      sx={sx}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder="Search"
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={option.id}
            label={option.name}
            {...getTagProps({ index })}
            onDelete={() => {
              const newValue = [...value];
              newValue.splice(index, 1);
              setValue(newValue);
            }}
          />
        ))
      }
    />
  );
}

