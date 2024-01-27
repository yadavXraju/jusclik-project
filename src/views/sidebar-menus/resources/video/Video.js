import React from 'react';
import { Grid,  } from '@mui/material';
// getting sample data from video data
import { VideoData } from './VideoData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// this is style for iframe
export const iFrameStyle = {
  height: '300px',
  width: '100%',
  border:'none'
};

const Video = () => {

  return (
    <>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {VideoData.map((video, id) => (
          <Grid lg={3} md={6} sm={12} key={id} sx={{padding:'20px'}}>
            <Card sx={{boxShadow:'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px'}}>
              <CardMedia>
                  <iframe
                    src={video.url}
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title={video.title}
                    style={iFrameStyle}
                  />
                </CardMedia>

                <CardContent>
                  {/* title */}
                    <Typography gutterBottom variant="h3" component="div">
                         {video.title}
                    </Typography>
                    {/* subtitle */}
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

export default Video;


