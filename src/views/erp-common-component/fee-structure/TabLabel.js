import React from 'react';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';


const TabItem = [
    {
        id:1,
        label:'Optional Head',
        value: '1'
        
    },

    {
        id:2,
        label:'Regular Head',
        value: '2'
    },


]




const TabLabel = ({ handleChange }) => {
  return (
    <Box >
      <TabList onChange={handleChange} aria-label="tabs"  sx={{marginLeft:'230px' , }} >
        {TabItem.map((label) => (
          <Tab key={label.id} label={label.label} value={label.value} sx={{alignItems:'flex-start', minWidth:'200px', }}/>
        ))}
      </TabList>
    </Box>
  );
};

export default TabLabel;
