import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function HomeworkTemplate() {
  const [template, setTemplate] = React.useState('');

  const handleChange = (event) => {
    setTemplate(event.target.value);
  };

  return (
    <Box sx={{ paddingLeft:'11px' }} >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Template</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={template}
          label="Template"
          onChange={handleChange}
        >
          <MenuItem value={1}>None</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
  );
}
