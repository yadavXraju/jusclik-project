import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';



  function DropDown({ data, onClassChange}) {
    // Check if data is not an array or is empty
    if (!Array.isArray(data) || data.length === 0) {
      return <div>No data available</div>;
    }
    const handleChange = (event) => {
      const selectedClass = event.target.value;
  
      // Call the onClassChange function with the selected class
      onClassChange(selectedClass);
    };

    
  return (
    <>
      <TextField
        id="outlined-select-currency"
        select
        value={data.length > 0 ? data[0].value : ''}
        sx={{margin:"0px 10px"}}
        onChange={handleChange} 
      >
        {data.map((option) => (
          <MenuItem  sx={{position:"relative",zIndex:"222"}}key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default DropDown;
