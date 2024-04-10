import React from 'react';
import { Grid } from '@mui/material';
import { VideoData } from './VideoData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const iFrameStyle = {
  height: '250px',
  width: '100%',
  border: 'none',
};

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
