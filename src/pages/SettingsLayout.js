// Setting.js

import React, { useState } from 'react';
import { Typography, Box, Card, Paper, InputBase, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ParamSetting from './Settings';


const SearchBar = ({onChange}) => {
  const paperStyle = {
    width:"75%",
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    border:'1px solid #eef2f6',
    borderRadius:"none",
    paddingTop:"5px",
    
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

export const ReuseableSettings = ({data}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterData = searchTerm.trim() !== '' ? data.filter(item => {
    if (item.title.toLowerCase().includes(searchTerm)) {
      return true;
    } else {
      return item?.items.some(submenu =>
        submenu.name.toLowerCase().includes(searchTerm) && submenu.path
      );
    }
  }) : [];
  
  const highlightSearchTerm = (text) => {
    if (!searchTerm.trim()) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span style="background-color: yellow;">$1</span>');
  };

  return (
    <div>
      <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
      <Card className='scrollbar'
        sx={{
          overflowY: 'scroll',
          maxHeight: '300px',
          width: '75%',
          margin: 'auto',
          paddingLeft: '30px'
        }}
      > {/* Set a fixed height and scrolling */}
        {
          filterData.map((item, index) => (
            <Box key={index}>
              <Typography component="div" sx={{paddingBottom:'10px',paddingTop:'10px' }}>
                <span style={{ fontWeight: 'bold' }} dangerouslySetInnerHTML={{__html: highlightSearchTerm(item.title)}}></span>
              </Typography>
              {item?.items.map((submenu, subIndex) => (
                submenu.path && // Check if submenu has path defined
                <Link key={subIndex} to={submenu.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {/* Use Link to navigate to the specified path */}
                  <Typography sx={{padding:'4px 0'}} key={subIndex} dangerouslySetInnerHTML={{__html: highlightSearchTerm(submenu.name)}}></Typography>
                </Link>
              ))}
            </Box>
          ))
        }
      </Card>
      {/* main settings page */}
      <ParamSetting SettingData={data} />
    </div>
  );
      }

