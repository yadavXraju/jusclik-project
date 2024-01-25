import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SearchFilter = ({ onSearch }) => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch({ searchTerm, startDate, endDate });
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
        marginRight: '25px',
        marginLeft: '25px',
        backgroundColor: '#fff',
        
      }}
      noValidate
      autoComplete="off"
    >
    

      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
      </LocalizationProvider>
      <TextField
        id="outlined-search"
        label="Search"
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
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

export default SearchFilter;
