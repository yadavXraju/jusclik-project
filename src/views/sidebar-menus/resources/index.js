import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from './TabLabel';
import Video from './video/Video';
import { Paper , Box } from '@mui/material';


const Resources =()=> {

  // for active first item when page load
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Paper>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: '#e3e8efad' }}>
              <TabLabel handleChange={handleChange}/>
            </Box>
            <TabPanel value="1">All</TabPanel>
            <TabPanel value="2"><Video/></TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
      </Paper>

    </Box>
  );
}

export default Resources