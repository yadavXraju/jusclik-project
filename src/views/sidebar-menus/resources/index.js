import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import { Paper , Box } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from './Tab/TabLabel';
import Video from './video/Video';
import Document from './document/Document';
import UrlPage from 'views/navigation-for-pages';
import Image from './images/Image';




const Resources =()=> {

  // for active first item when page load
  const [value, setValue] = useState('2')


  // for change the setvalue into newvalue
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <UrlPage/>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Paper>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: '#e3e8efad' }}>
              <TabLabel handleChange={handleChange}/>
            </Box>
            {/* <TabPanel value="1">All</TabPanel> */}
            <TabPanel value="2"><Video/></TabPanel>
            <TabPanel value="3"><Image/></TabPanel>
            <TabPanel value="4"><Document/></TabPanel>
            <TabPanel value="5">Links</TabPanel>
          </TabContext>
      </Paper>

    </Box>
    </>
  );
}

export default Resources