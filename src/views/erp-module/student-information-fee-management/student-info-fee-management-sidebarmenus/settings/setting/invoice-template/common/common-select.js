import { InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

// Functional component with ES6 arrow function syntax
const CommonSelect = ({label,stateHandler,updatekey,defaultValue,options}) => {
  // Component logic and JSX here
  const renderedItems = Object.keys(options).map(key => (
    <MenuItem key={key} value={key}>{options[key]}</MenuItem>
  ));
  return (

    <>
     <InputLabel>{label}</InputLabel>
    <Select label={label} onChange={(e) => stateHandler(updatekey, e.target.value)} defaultValue={defaultValue}>
        {renderedItems}
        </Select></>
  );
};

export default CommonSelect;