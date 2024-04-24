import React, { useState, useRef } from 'react';
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  InputAdornment,
  InputLabel,
  Select,
  FormControl,
  OutlinedInput
} from '@mui/material';
import SelectList from 'views/common-section/ParamSelectList';

const DrawerAddTransaction = () => {
  const [addTransaction, setAddTransaction] = useState('');
  const [merge, setMerge] = useState('');
  const [prefix, setPrefix] = useState('');
  const inputRef = useRef(null);

  const Transaction = [
    { value: 'admissionno.', label: 'Admission No.' },
    { value: 'feereciept', label: 'Fee Receipt' },
    { value: 'invoice', label: 'Invoice' }
  ];

  const addTransactionChange = (event) => {
    setAddTransaction(event.target.value);
  };

  const handleChange = (event) => {
    const selectedMerge = event.target.value;
    setMerge(selectedMerge);
    const cursorPosition = inputRef.current.selectionStart;
    const newPrefix = prefix.slice(0, cursorPosition) + `[[${selectedMerge}]]` + prefix.slice(cursorPosition);
    setPrefix(newPrefix);
    inputRef.current.focus();
    inputRef.current.setSelectionRange(cursorPosition + selectedMerge.length + 4, cursorPosition + selectedMerge.length + 4);
  };

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} sx={{ paddingTop: '20px', paddingLeft: '8px', paddingRight: '8px' }}>
            <TextField label="Series Name" fullWidth />
          </Grid>
          <Grid mt={1} item xs={12} sx={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '14px' }}>
            <SelectList
              label="Type of Series"
              options={Transaction}
              value={addTransaction}
              onChange={addTransactionChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '14px' }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="prefix-input">Prefix</InputLabel>
              <OutlinedInput
                id="prefix-input"
                label="Prefix"
                fullWidth
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                inputRef={inputRef}
                endAdornment={
                  <InputAdornment position="end">
                    <Select
                      id="merge-field"
                      value={merge}
                      variant="standard"
                      onChange={handleChange}
                      fullWidth
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="" disabled>
                        + Merge Field
                      </MenuItem>
                      <MenuItem value="Joining Class">Joining Class</MenuItem>
                      <MenuItem value="Joining Year">Joining Year</MenuItem>
                    </Select>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: '20px', paddingLeft: '8px', paddingRight: '8px' }}>
            <TextField
              label="Starting No."
              fullWidth
              inputProps={{
                type: 'number',
                pattern: '[0-9]*'
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default DrawerAddTransaction;
