import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({onChange}) => {
  const paperStyle = {
    width:"100%",
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    border:'1px solid #eef2f6',
    borderRadius:"none",
    paddingTop:"5px"
  };

  const inputStyle = {
    marginLeft: '8px', // Adjust as needed
    flex: 1,
  };

  const iconButtonStyle = {
    padding: '10px', // Adjust as needed
  };

  return (
    <Paper component="form" sx={paperStyle}>
      <IconButton sx={iconButtonStyle} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={inputStyle}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={onChange}
      />
    </Paper>
  );
};

export default SearchBar;
