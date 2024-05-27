import React, { useState } from 'react';
import ImgCard from './ImgCard';
import { Paper, Tab, Box } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import VideoCard from './VideoCard';
import useMediaQuery from '@mui/material/useMediaQuery';

const PhotoGallery = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const res2560 = useMediaQuery('(min-width:2000px)')
  const rem=res2560?'17rem':null;

  return (
    <Box>
      <Paper>
        <Box sx={{paddingLeft:rem , paddingRight:rem}}>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label="Photos" value="1" />
            <Tab label="Videos" value="2" />
          </TabList>
          <TabPanel value='1'>
            <ImgCard />
          </TabPanel>
          <TabPanel value='2'>
            {/* Place your video content here */}
            <VideoCard/>
          </TabPanel>
        </TabContext>
        </Box>
      </Paper>
    </Box>
  );
};

export default PhotoGallery;
