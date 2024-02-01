import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CircularClassWise from './CircularClassWise';



const CircularTab = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <Paper>
    <TabContext value={value} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="CircularClassWise" value="1" />
          <Tab label="Transport" value="2" />
          </TabList>
      </Box>
      <TabPanel value="1">
        <CircularClassWise/>
      </TabPanel>
      <TabPanel value="2">
        {/* <Transportation/> */}
        </TabPanel>
        </TabContext>
        </Paper>
        </Box>
  )
}

export default CircularTab


