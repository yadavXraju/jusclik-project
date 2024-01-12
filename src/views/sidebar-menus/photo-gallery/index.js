import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import image1 from './img/front-view-smiley-woman-with-fireworks.jpg';

const PhotoGallery = () => {
  const galleryData = [
    {
      image: image1,
      title: 'Diwali Celebration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      date:"2-jan-2024"
    },
    // Add more objects for additional gallery items if needed
    {
      image: image1,
      title: 'Diwali Celebration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      date:"23-jan-2024"
    },
    {
      image: image1,
      title: 'Diwali Celebration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      date:"22-jan-2024"
    },
  ];

  return (
    <Grid container spacing={2}>
      {galleryData.map((item, index) => (
        <Grid key={index} item xs={12} md={3} lg={3}>
          <Card sx={{ maxWidth: '100%', height: '100%' }}>
            <CardActionArea>
              <div style={{ position: 'relative'}}>
                <CardMedia
                  component="img"
                  style={{
                
                  
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <CardContent sx={{margin:"3px 4px",padding:"15px 10px"}}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography  color="text.secondary">
                <Typography variant="subtitle2" color="textSecondary"> 
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}><CalendarTodayIcon sx={{width:"16px" ,height:"16px"}}/> {item.date} </Grid>  
                <Grid>
                <CardActions sx={{ padding: '0px' }}>
                  <Button size="small" color="primary" 
                  sx={{ padding: '0px' }}
                  >
                     See More
                 </Button>
            </CardActions>
                </Grid>
             
            </Grid> 
            </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotoGallery;
