import React from 'react';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import { TabItem } from './TabItem';

const TabLabel = ({ handleChange }) => {
  return (
    <Box sx={{ borderBottom: 0, borderColor: '#e3e8ef' }}>
      <TabList onChange={handleChange} aria-label="tabs" >
        {TabItem.map((label) => (
          <Tab
            key={label.id}
            label={label.label}
            value={label.value}
            icon={label.icon}
            // sx={{
            //   color: '#fff',
            //   '&.Mui-selected': {
            //     color: 'rgb(30, 136, 229)', // Change the color of the selected tab
            //     background: '#fff'
            //   },
  
            // }}
          />
        ))}
      </TabList>
    </Box>
  );
};

export default TabLabel;
