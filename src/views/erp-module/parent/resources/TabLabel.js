// Page owner : abhishek negi
// description : tabs in resources page

import React from 'react';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';


export const TabItem = [
  {
      id:1,
      label:'Video',
      value: '1'
  },

  {
      id:2,
      label:'Images',
      value: '2'
  },

  {
      id:3,
      label:'Documents',
      value: '3'
  },

  {
      id:4,
      label:'Links',
      value: '4'
  },
]


const TabLabel = ({ handleChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: '#e3e8ef' }}>
      <TabList onChange={handleChange} aria-label="tabs">
        {TabItem.map((label) => (
          <Tab key={label.id} label={label.label} value={label.value} />
        ))}
      </TabList>
    </Box>
  );
};

export default TabLabel;
