// Setting.js

import React, { useState } from 'react';
import Organisation from './SettingVisitor';
// import SettingData from './SettingData';
import { Typography, Box, Card } from '@mui/material';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Setting = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterData = searchTerm.trim() !== '' ? SettingData.filter(item => {
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
      <Organisation />
    </div>
  );
      }

export default Setting;
