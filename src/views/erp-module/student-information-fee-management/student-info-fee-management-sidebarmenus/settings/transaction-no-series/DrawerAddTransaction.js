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
import SelectList from 'component/ParamSelectList';

const DrawerAddTransaction = ({currEditItem}) => {
  // const [addTransaction, setAddTransaction] = useState('');
  const [merge, setMerge] = useState('');
  const [prefix, setPrefix] = useState('');
  const inputRef = useRef(null);

  const Transaction = [
    { value: 'Admission No.', label: 'Admission No.' },
    { value: 'Fee Reciept', label: 'Fee Receipt' },
    { value: 'Invoice', label: 'Invoice' }
  ];

  // const addTransactionChange = (event) => {
  //   setAddTransaction(event.target.value);
  // };

  const handleChange = (event) => {
    const selectedMerge = event.target.value;
    setMerge(selectedMerge);
    const cursorPosition = inputRef.current.selectionStart;
    const newPrefix = prefix.slice(0, cursorPosition) + `[[${selectedMerge}]]` + prefix.slice(cursorPosition);
    setPrefix(newPrefix);
    inputRef.current.focus();
    inputRef.current.setSelectionRange(cursorPosition + selectedMerge.length + 4, cursorPosition + selectedMerge.length + 4);
    handleChange1('prefix', selectedMerge);
  };




  // State for form fields
  const defaultFormFields = {
    seriesName: '',
    typeOfSeries: '',
    prefix: '',
    startingNo: '',

  };

  const [formFields, setFormFields] = React.useState(currEditItem ? {
    seriesName: currEditItem.seriesname || '',
    typeOfSeries: currEditItem.typeofseries || '', 
    prefix: currEditItem.prefix || '',
    startingNo: currEditItem.starting || '',
  } : defaultFormFields);

  // Update formFields when on changes
  React.useEffect(() => {
    if (currEditItem) {
      setFormFields({
        seriesName: currEditItem.seriesname || '',
        typeOfSeries: currEditItem.typeofseries || '',
        prefix: currEditItem.prefix || '',
        startingNo: currEditItem.starting || '',
      });
    } else {
      setFormFields(defaultFormFields);
    }
  }, [currEditItem]);

  const handleChange1 = (field, value) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  console.log(currEditItem)
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} sx={{ paddingTop: '20px', paddingLeft: '8px', paddingRight: '8px' }}>
            <TextField label="Series Name" fullWidth  value={formFields.seriesName} onChange={(e) => handleChange1('seriesName', e.target.value)} />
          </Grid>
          <Grid mt={1} item xs={12} sx={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '14px' }}>
            <SelectList
              label="Type of Series"
              options={Transaction}
              value={formFields.typeOfSeries}
              onChange={(e) => handleChange1('typeOfSeries', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '14px' }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="prefix-input">Prefix</InputLabel>
              <OutlinedInput
                id="prefix-input"
                label="Prefix"
                fullWidth
                value={formFields.prefix}
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
              value={formFields.startingNo}
              onChange={(e) => handleChange1('startingNo', e.target.value)}
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
