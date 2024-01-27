import React from 'react'
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';

const TabLabel = ({handleChange}) => {
  return (
    <>
       <Box sx={{ borderBottom: 1, borderColor: '#e3e8ef' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Video" value="2" />
            <Tab label="Images" value="3" />
            <Tab label="Documents" value="4" />
            <Tab label="Links" value="5" />
          </TabList>
        </Box>
    </>
  )
}

export default TabLabel