import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import { Paper , Box } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabLabel from './Tab/TabLabel';
import Video from './video/Video';
import Document from './document/Document';
import Image from './images/Image';
import Link from './links/Link';
import useMediaQuery from '@mui/material/useMediaQuery';


const Resources =()=> {

  // for active first item when page load
  const [value, setValue] = useState('1')


  // for change the setvalue into newvalue
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const res2560 = useMediaQuery('(min-width:2000px)')
const rem=res2560?'17rem':null


  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Paper>
        <Box sx={{paddingLeft:rem , paddingRight:rem}}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: '#e3e8efad' }}>
              <TabLabel handleChange={handleChange}/>
            </Box>
       
            <TabPanel value="1"><Video/></TabPanel>
            <TabPanel value="2"><Image/></TabPanel>
            <TabPanel value="3"><Document/></TabPanel>
            <TabPanel value="4"><Link/></TabPanel>
          </TabContext>
          </Box>
      </Paper>

    </Box>
    </>
  );
}

export default Resources