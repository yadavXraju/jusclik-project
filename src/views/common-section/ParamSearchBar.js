import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({
  onChange,
  paperStyle,
  iconButtonStyle,
  searchIconStyle,
  inputStyle,
}) => {
  const defaultPaperStyle = {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #eef2f6',
  };

  const defaultIconButtonStyle = {
    padding:"10px"
  };

  const defaultInputStyle = {
    marginLeft: '8px',
    flex: 1,
  };

  const mergedPaperStyle = { ...defaultPaperStyle, ...paperStyle };
  const mergedIconButtonStyle = { ...defaultIconButtonStyle, ...iconButtonStyle };
  const mergedInputStyle = { ...defaultInputStyle, ...inputStyle };

  return (
    <Paper component="form" sx={mergedPaperStyle}>
      <IconButton sx={mergedIconButtonStyle} aria-label="search" className="search-button">
        <SearchIcon sx={searchIconStyle} />
      </IconButton>
      <InputBase
        sx={mergedInputStyle}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={onChange}
      />
    </Paper>
  );
};

export default SearchBar;
