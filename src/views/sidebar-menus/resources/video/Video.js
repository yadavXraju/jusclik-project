import React from 'react';
import { Grid,  } from '@mui/material';
import { VideoData } from './VideoData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




const Video = () => {
  const iFrameStyle = {
    height: '300px',
    width: '100%',
    // padding:'20px',
    border:'none'
  };

  return (
    <>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {VideoData.map((data, id) => (
          <Grid lg={4} md={6} sm={12} key={id} sx={{padding:'20px'}}>
            <Card>
              <CardMedia>
                  <iframe
                    src={data.url}
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title={data.title}
                    style={iFrameStyle}
                  />
                </CardMedia>

                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                         {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.subtitle}
                    </Typography>
                </CardContent>
            </Card>

           {/* <Typography variant='h3'> {data.title} </Typography>
           <Typography variant='p'> {data.subtitle}</Typography> */}
           
          </Grid>          
        ))}

      </Grid>
    </>
  );
};

export default Video;


