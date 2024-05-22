import React from 'react'
import {TextField, Box, Select, FormControl, MenuItem, InputLabel} from '@mui/material';
import TextArea from 'antd/es/input/TextArea';

export default function RoleForm() {
    const [Branch, setBranch] = React.useState('');

  const handleChange = (event) => {
    setBranch(event.target.value);
  };

  return (
    <>
      <form>
          <Box mt={{xs: '0rem',md:'1.1rem'}} sx={{ padding: 2, border:'1px solid #ccc', borderRadius:'5px' }}>
            <Box pb={2}>
            <TextField id="outlined-basic" label="Role Name" variant="outlined" fullWidth />
            </Box>
            <Box pb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Copy Role From</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={Branch} label="Copy Role From" onChange={handleChange}>
                <MenuItem value={10}>GURUGRAM [SHAURYA INTERNATIONAL sCHOOL]</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </Box>
            <Box pb={2}>
              <Box p={0.5}>Description</Box>
              <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
            </Box>
        
          </Box>
        </form>
    </>
  )
}
