import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField label="Search" variant="outlined" onChange={handleSearch} />
      <IconButton aria-label="search" onClick={() => onSearch('')}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
