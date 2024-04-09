import React, { useState } from 'react';
import ImgCard from './PHOTOSEC/ImgCard';
import { Paper, Tab, Box } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import VideoCard from './VideoSec/VideoCard';

const PhotoGallery = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Paper>
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
      </Paper>
    </Box>
  );
};

export default PhotoGallery;
