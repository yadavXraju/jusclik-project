import * as React from 'react';
import TextField from '@mui/material/TextField';
import TextFieldsTwoToneIcon from '@mui/icons-material/TextFieldsTwoTone';
import { FormControl, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



const Address=()=>{
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
    
      const [selectedValue, setSelectedValue] = React.useState('');
    
      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
  return (
    <>
    <FormControl fullWidth>
        <Typography>Address</Typography>
        <TextField
        id=""
        label=""
        variant="outlined"
        placeholder='Street Address'
      />
      <TextField
        id=""
        label=""
        variant="outlined"
        placeholder='Address Line 2'
      />
      <TextField
        id=""
        label=""
        variant="outlined"
        placeholder='City'
      />
      <TextField
        id=""
        label=""
        variant="outlined"
        placeholder='State/Region/Province'
      />
      <TextField
        id=""
        label=""
        variant="outlined"
        placeholder='Postal/Zip Code'
      />
         <Select
        value={selectedValue}
        onChange={handleChange}
        startAdornment={<TextFieldsTwoToneIcon sx={{ mr: 1 }} />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </FormControl>
      </>
  );
}
export default Address