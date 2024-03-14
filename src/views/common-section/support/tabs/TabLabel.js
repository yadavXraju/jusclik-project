import React from 'react';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import { TabItem } from './TabItem';

const TabLabel = ({ handleChange }) => {
  // sx={{borderBottom:'1px solid rgb(227, 227, 227),'}}
  
  return (
    <Box sx={{  borderColor: '#e3e8ef',borderBottom:'1px solid rgb(227, 227, 227)', }}>
      <TabList onChange={handleChange} aria-label="tabs" >
        {TabItem.map((label) => (
          <Tab
          className={'testc'}
            key={label.id}
            label={label.label}
            value={label.value}
            sx={{
              flexDirection:'row',
              gap:'6px',
              paddingBottom:'0',
              color:'#000',
              fontWeight:'500',
            }}
          />
        ))}
      </TabList>
    </Box>
  );
};

export default TabLabel;
