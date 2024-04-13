import React, { useState } from 'react';
import { Typography, Box, Card } from '@mui/material';
import SearchInvBar from './SearchInvBar';
import SettingOrg from './SettingInv';
// import SettingData from './SettingData';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Setting = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterData = searchTerm.trim() !== '' ? SettingData.filter(item => {
    if (item.title.toLowerCase().includes(searchTerm)) {
      return true;
    } else {
      return item?.items.some(submenu =>
        submenu.name.toLowerCase().includes(searchTerm) && submenu.path // Check if submenu has path defined
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
      <SearchInvBar onChange={(e) => setSearchTerm(e.target.value)} />
      <Card className='scrollbar '
        sx={{ 
          overflowY: 'scroll', 
          maxHeight: '300px',
          width: '75%', 
          margin: 'auto' ,
          paddingLeft:'30px'
        }}
      >
        {filterData.map((item, index) => (
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
        ))}
      </Card>
      <SettingOrg />
    </div>
  )
}

export default Setting;
