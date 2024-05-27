// owner sangeeta

import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const iFrameStyle = {
  height: '250px',
  width: '100%',
  border: 'none',
};

// sample data

export const VideoData = [
  {
      id : 1,
      url : 'https://www.youtube.com/embed/-IcPlNZTDRE?rel=0',
      title: 'The Wisdom Tree',
      subtitle : 'A day at Wisdom Tree School is not just about lessons and lectures.',
      postDate:'20-Jan-2024',
  },

  {
      id : 2,
      url: 'https://www.youtube.com/embed/-jcgsn7l9xg?rel=0',
      title: 'The Wisdom Tree',
      subtitle : 'A day at Wisdom Tree School is not just about lessons and lectures.',
      postDate:'20-Jan-2025',
  },


  {
      id : 3,
      url: 'https://www.youtube.com/embed/tU1sEPhen5s?rel=0',
      title: 'The Wisdom Tree',
      subtitle : 'A day at Wisdom Tree School is not just about lessons and lectures.',
      postDate:'20-Jan-2022',
  },


  {
      id : 4,
      url : 'https://www.youtube.com/embed/JRqvft3cSkM?rel=0',
      title: 'The Wisdom Tree',
      subtitle : 'A day at Wisdom Tree School is not just about lessons and lectures.',
      postDate:'20-Jan-2026',
  },


 
  {
      id : 5,
      url : 'https://www.youtube.com/embed/gUoOe_qFFeY',
      title: 'The Wisdom Tree',
      subtitle : 'A day at Wisdom Tree School is not just about lessons and lectures.',
      postDate:'20-Jun-2024',
  },


  {
      id : 6,
      url : 'https://www.youtube.com/embed/h-76c4h3EC8?rel=0',
      title: 'The Wisdom Tree',
      subtitle : 'A day at Wisdom Tree School is not just about lessons and lectures.',
      postDate:'20-July-2024',
  },

  {
      id : 7,
      url : 'https://www.youtube.com/embed/9kHAHNZPWJI?rel=0',
      title: 'The Wisdom Tree',
      subtitle : 'A day at Wisdom Tree School is not just about lessons and lectures.',
      postDate:'20-Jan-2021',
  },



  {
      id : 8,
      url : 'https://www.youtube.com/embed/10RNH2waYsI?rel=0',
      title: 'The Wisdom Tree',
      subtitle : 'A day at Wisdom Tree School is not just about lessons and lectures.',
      postDate:'20-Jan-2020',
  },


  {
      id : 9,
      url : 'https://www.youtube.com/embed/-IcPlNZTDRE?rel=0',
      title: 'The Wisdom Tree',
      subtitle : 'A day at Wisdom Tree School is not just about lessons and lectures.',
      postDate:'20-Jan-2029',
  }

]

const VideoCard = () => {
  return (
    <>
      {/* Grid container for video cards with spacing */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Mapping through VideoData to create video cards */}
        {VideoData.map((video, id) => (
          <Grid lg={4} md={6} sm={12} key={id} sx={{ padding: '20px' }}>
            {/* Individual video card */}
            <Card elevation={3}>
              {/* Card media with embedded iframe */}
              <CardMedia>
                <iframe
                  src={video.url}
                  allow='autoplay; encrypted-media'
                  allowfullscreen
                  title={video.title}
                  style={iFrameStyle}
                />
              </CardMedia>
              {/* Card content with video title and subtitle */}
              <CardContent>
                {/* Video title */}
                <Typography gutterBottom variant="h3" component="div">
                  {video.title}
                </Typography>
                {/* Video subtitle */}
                <Typography variant="body2" color="text.secondary">
                  {video.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default VideoCard;
