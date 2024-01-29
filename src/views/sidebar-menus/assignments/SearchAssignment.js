import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import { data } from './AssignmentData';

const uniqueSubjects = [...new Set(data.map(item => item.name))];
const subjects = uniqueSubjects.map(subject => ({ title: subject }));

const SearchAssignment = ({ onSearch }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const handleSubjectChange = (event, newValue) => {
    setSelectedSubject(newValue);
  };

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    const searchCriteria = {
      startDate,
      endDate,
      subject: selectedSubject ? selectedSubject.title : '',
      searchText,
    };

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
        borderRadius: '30px',
        padding: '20px',
        mb: '15px',
        backgroundColor: '#fff',
      }}
      noValidate
      autoComplete="off"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="From" value={startDate} onChange={handleStartDateChange} slots={{
    openPickerIcon: CalendarMonthTwoToneIcon
  }} />
          <DatePicker label="To" value={endDate} onChange={handleEndDateChange} slots={{
    openPickerIcon: CalendarMonthTwoToneIcon
  }} />
        </DemoContainer>
      </LocalizationProvider>
      <Autocomplete
        id="highlights-demo"
        sx={{ width: 300, marginTop: '8px', marginBottom: '-1px' }}
        options={subjects}
        getOptionLabel={option => option.title}
        onChange={handleSubjectChange}
        renderInput={params => (
          <TextField
            {...params}
            label="Subjects"
            margin="normal"
            sx={{ marginBottom: '0px', marginTop: '0px' }}
          />
        )}
       renderOption={(props, option, { inputValue }) => {
  const parts = option.title.split(new RegExp(`(${inputValue})`, 'gi'));

  return (
    <li {...props}>
      <div>
        {parts.map((part, index) => (
          <span
            key={index}
            style={{
              fontWeight: part.toLowerCase() === inputValue.toLowerCase() ? 700 : 400,
            }}
          >
            {part}
          </span>
        ))}
      </div>
    </li>
  );
}}
/>
      <TextField
        id="outlined-search"
        label="Search"
        type="search"
        value={searchText}
        onChange={handleSearchTextChange}
      />
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
    </Box>
  );
};

export default SearchAssignment;
