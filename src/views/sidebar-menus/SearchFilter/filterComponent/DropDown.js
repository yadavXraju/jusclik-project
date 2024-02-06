import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';



  function DropDown({ data }) {
    // Check if data is not an array or is empty
    if (!Array.isArray(data) || data.length === 0) {
      return <div>No data available</div>;
    }
  return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        label="Select Class"
        value={data.length > 0 ? data[0].value : ''}
        sx={{margin:"0px 10px"}}
      >
        {data.map((option) => (
          <MenuItem  sx={{position:"relative",zIndex:"222"}}key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default DropDown;
