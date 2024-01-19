import React, { useState } from 'react';
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
import PopupComponent from './PopupComponent';
import Image1 from './img/front-view-smiley-woman-with-fireworks.jpg';
import Image2 from './img/women-outdoor-park-using-mobiles.jpg';
import Image3 from './img/group-girlfriends-sitting-table-together-celebrating-birthday-outdoor-park.jpg'

const PhotoGallery = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const handleSeeMoreClick = (data) => {
    console.log("Clicked See More", data);
    setPopupData(data);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const galleryData = [
    {
      cover: Image1,
      title: 'Diwali Celebration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      date: "2-jan-2024",
      sliderImg: [Image1, Image2,Image3]
    },
    {
      cover: Image3,
      title: 'Christmas Party',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      date: "25-dec-2023",
      sliderImg: [Image1, Image2]
    },
    {
      cover: Image2,
      title: 'New Year Bash',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      date: "1-jan-2024",
      sliderImg: [Image1, Image2]
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        {galleryData.map((item, index) => (
          <Grid key={index} item xs={12} md={3} lg={3}>
            <Card sx={{ maxWidth: '100%', height: '100%' }}>
              <CardActionArea onClick={() => handleSeeMoreClick(item)}>
                <div style={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    src={item.cover}
                    alt={item.title}
                  />
                </div>
                <CardContent sx={{ margin: "3px 4px", padding: "15px 10px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    <Typography variant="subtitle2" color="textSecondary">
                      <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                          <CalendarTodayIcon sx={{ width: "16px", height: "16px" }} /> {item.date}
                        </Grid>
                        <Grid>
                          <CardActions sx={{ padding: '0px' }}>
                            <Button
                              size="small"
                              color="primary"
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
      <PopupComponent isOpen={popupOpen} onClose={handleClosePopup} data={popupData} />
    </>
  );
};

export default PhotoGallery;
