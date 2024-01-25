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


// import parse from 'autosuggest-highlight/parse';
// import match from 'autosuggest-highlight/match';

import { data } from './AssignmentData';
const uniqueSubjects = [...new Set(data.map(item => item.name))];

// Create subjects array
const subjects = uniqueSubjects.map(subject => ({ title: subject }));






export default function SearchAssignment({ onSearch }) {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [selectedSubject, setSelectedSubject] = React.useState(null);
  const [searchText, setSearchText] = React.useState('');

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubjectChange = (event, newValue) => {
    setSelectedSubject(newValue);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
    // You can perform the search logic here
    const handleSearch = () => {
      const searchCriteria = {
        startDate,
        endDate,
        subject: selectedSubject ? selectedSubject.title : '',
        searchText,
      };

    // Pass the search criteria to the parent component
    onSearch(searchCriteria);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'start',
        gap: 2,
        // border: '1px solid black',
        borderRadius: '30px',
        padding: '20px',
        mb: '15px',
        backgroundColor:'#fff'
      }}
      noValidate
      autoComplete="off"
    >
      {/* Date picker */}
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
      {/* date picker end */}
      <Autocomplete
        id="highlights-demo"
        sx={{ width: 300, marginTop: '8px', marginBottom: '-1px' }}
        options={subjects}
        getOptionLabel={(option) => option.title}
        onChange={handleSubjectChange}
        renderInput={(params) => (
          <TextField {...params} label="Subjects" margin="normal" sx={{ marginBottom: '0px', marginTop: '0px' }} />
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
      {/* search textField */}
      <TextField
        id="outlined-search"
        label="Search"
        type="search"
        value={searchText}
        onChange={handleSearchTextChange}
      />
{/* search textField  end*/}
{/* search button */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<SearchTwoToneIcon />}
          sx={{ height: '48px', borderRadius: '12px', marginTop: '-3px !important' }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
      {/* search button */}
    </Box>
  );
      }
