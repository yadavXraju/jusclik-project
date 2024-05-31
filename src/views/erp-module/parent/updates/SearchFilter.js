import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';

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
        flexWrap:'wrap'}}
        
      
      noValidate
      autoComplete="off"
    >
    
<ParameterizedDateComponent name="startDate"   label="From"
          value={startDate}
          onChange={handleStartDateChange}  />

<ParameterizedDateComponent name="endDate"   label="To"
          value={endDate}
          onChange={handleEndDateChange}  />

      
     
      <TextField
        id="outlined-search"
        label="Search"
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{'& #outlined-search': {width:'170px !important'}}}

      />
      
      <Stack direction="row" spacing={2} sx={{marginBottom:'2px'}}>
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
