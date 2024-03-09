import React, { useState } from 'react'
import Organisation from './Organisation'
import ParamSearchBar from 'views/common-section/ParamSearchBar';
import SettingData from './SettingData';
import Typography from '@mui/material/Typography';

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
  
  return (
    <div>
      <ParamSearchBar onChange={(e) => setSearchTerm(e.target.value)} />
      {
        filterData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Typography>{item?.title}</Typography>
              {item?.items.map((submenu, subIndex) =>
                <Typography key={subIndex}>{submenu}</Typography>
              )}
            </React.Fragment>
          );
        })
      }
      <Organisation />
    </div>
  )
}

export default Setting