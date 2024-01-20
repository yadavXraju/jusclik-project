import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

export default function FormPropsTextFields() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        gap: 2,
        border: '1px solid black', // Add border
        borderRadius: '30px',      // Add border radius
        padding: '20px',           // Add padding for better aesthetics
        mb:'15px',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-search" label="Search" type="search" />
      </div>
      {/* date picker range */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="From"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <DatePicker
            label="To"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </DemoContainer>
      </LocalizationProvider>
      {/* subject */}
      <Autocomplete
      id="highlights-demo"
      sx={{ width: 300,marginTop:'8px',marginBottom:'-1px' }}
      options={subjects}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="Highlights" margin="normal" />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue, { insideWords: true });
        const parts = parse(option.title, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
      {/* search field */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<SearchTwoToneIcon />}
          sx={{  height: '48px',borderRadius:'12px', marginTop:'-3px !important'}}
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
}
const subjects = [
    { title: 'English'},
    { title: 'Mathematics' },
    { title: 'Hindi' },
    { title: 'Music' },
    { title: 'Science'},
    { title: 'SST' },
    { title: 'Computer' }
  ];