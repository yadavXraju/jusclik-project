import React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

export default function ParamMultipleSelect({ options, value, setValue, label = '' }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Autocomplete
      multiple
      id="student-autocomplete"
      options={options} // Ensure options is an array
      getOptionLabel={(option) => option.name}
      value={value}
      onChange={handleChange}
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
