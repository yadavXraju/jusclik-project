import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CircularCategory() {
  const [circular, setCircular] = React.useState('');

  const handleChange = (event) => {
    setCircular(event.target.value);
  };

  return (
    <Box sx={{ paddingLeft:'11px', m:'5' }} >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Circular Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={circular}
          label="Circular Category"
          onChange={handleChange}
        >
          <MenuItem value={1}>Circulars</MenuItem>
          <MenuItem value={2}>School Notices</MenuItem>
          <MenuItem value={3}>Syllabus</MenuItem>
          <MenuItem value={4}>Result Circulars</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
  );
}
