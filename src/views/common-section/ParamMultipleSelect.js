import React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

export default function ParamMultipleSelect({ options, value, setValue, label = '' , sx }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter out selected options from the available options
  const filteredOptions = options.filter(option => !value.some(val => val.id === option.id));

  return (
    <Autocomplete
      multiple
      id="student-autocomplete"
      options={filteredOptions}
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

