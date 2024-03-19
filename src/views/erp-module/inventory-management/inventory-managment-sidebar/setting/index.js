

import React, { useState } from 'react';
// import Organisation from './Organisation';
import SettingData from './SettingData';
import { Typography, Box, Card } from '@mui/material';
import SearchInvBar from './SearchInvBar';
import SettingOrg from './SettingOrg';

const Setting = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterData = searchTerm.trim() !== '' ? SettingData.filter(item => {
    if (item.title.toLowerCase().includes(searchTerm)) {
      return true;
    } else {
      return item?.items.some(submenu =>
        submenu.toLowerCase().includes(searchTerm)
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
      > {/* Set a fixed height and scrolling */}
        {
          filterData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Box>
                  <Typography component="div" sx={{paddingBottom:'10px',paddingTop:'10px' }}>
                    <span style={{ fontWeight: 'bold', }} dangerouslySetInnerHTML={{__html: highlightSearchTerm(item.title)}}></span>
                  </Typography>
                  {item?.items.map((submenu, subIndex) =>
                    <Typography sx={{padding:'4px 0'}} key={subIndex} dangerouslySetInnerHTML={{__html: highlightSearchTerm(submenu)}}></Typography>
                  )}
                </Box>
              </React.Fragment>
            );
          })
        }
      </Card>
      <SettingOrg />
    </div>
  )
}

export default Setting;
