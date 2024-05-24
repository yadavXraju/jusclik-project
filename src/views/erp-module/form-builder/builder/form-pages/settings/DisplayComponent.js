// @Page Owner-Tarun Pandey
import { Box, Radio, FormControlLabel, FormControl, FormLabel, RadioGroup, TextField, Grid, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import SelectList from 'components/ParamSelectList';

function DisplayComponent() {
  const [value, setValue] = React.useState('Show');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // ========= state for Attach Slab ============
  const [textDirection, setTextDirection] = useState('');
  const textDirectionOptions = [
    { value: '1', label: 'Left To Right' },
    { value: '2', label: 'Right To Left' },
  ];
  const textDirectionChange = (event) => {
    setTextDirection(event.target.value);
  };

  return (
    <>
      <Box p={2}>
        <Box sx={{width:{md:'100%', lg:'50%'}}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">Form Header</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Show" control={<Radio />} label="Show" />
                    <FormControlLabel value="Hide" control={<Radio />} label="Hide" />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <SelectList label="Text Direction" options={textDirectionOptions} value={textDirection} onChange={textDirectionChange} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <InputLabel>Submit Button Label</InputLabel>
                <TextField fullWidth placeholder="Submit Button Label" />
              </Box>
            </Grid>
            
            <Grid item xs={12}></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default DisplayComponent;
