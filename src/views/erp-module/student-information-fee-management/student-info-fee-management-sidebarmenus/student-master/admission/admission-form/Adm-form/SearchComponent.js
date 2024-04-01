import React, { useState } from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchComponent = ({ data={} }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [showSearch, setShowSearch] = useState(false); // State to toggle search field

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleInputChange = (event) => {
    handleSearch(event.target.value);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchQuery(''); // Clear search query when showing search field
    }
  };

  return (
    <div style={{ position: 'relative', margin: '20px' }}>
      <IconButton onClick={toggleSearch}>
        <SearchOutlinedIcon />
      </IconButton>
      {/* Apply conditional style based on showSearch state */}
      <Paper
        style={{
          display: showSearch ? 'inline-block' : 'none',
          position: 'absolute',
          top: 0,
          right: 0,
          transition: 'opacity 0.5s ease-in-out',
          backgroundColor: '#fff',
          padding: '5px',
          borderRadius: '5px',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
          opacity: showSearch ? 1 : 0,
        }}
      >
        <InputBase
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </Paper>
      {/* Render filtered data */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredData.map(item => (
          <li key={item} style={{ marginBottom: '5px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;