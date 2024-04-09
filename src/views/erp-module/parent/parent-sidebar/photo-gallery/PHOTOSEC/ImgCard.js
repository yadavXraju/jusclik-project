import React, { useState } from 'react';
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PopupComponent from './PopupComponent';
import Image1 from './img/front-view-smiley-woman-with-fireworks.jpg';
import Image2 from './img/women-outdoor-park-using-mobiles.jpg';
import Image3 from './img/group-girlfriends-sitting-table-together-celebrating-birthday-outdoor-park.jpg';
import Image4 from './img/pic4.jpg';

const galleryData = [
  {
    cover: Image1,
    title: 'Diwali Celebration',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    date: '2-jan-2024',
    sliderImg: [Image1, Image2, Image3],
  },
  {
    cover: Image3,
    title: 'Christmas Party',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    date: '25-dec-2023',
    sliderImg: [Image1, Image2],
  },
  {
    cover: Image2,
    title: 'New Year Bash',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    date: '1-jan-2024',
    sliderImg: [Image1, Image2],
  },
  {
    cover: Image4,
    title: 'School Tour',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    date: '13-jan-2024',
    sliderImg: [Image1, Image2],
  },
  {
    cover: Image4,
    title: 'School Tour',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    date: '13-jan-2024',
    sliderImg: [Image1, Image2],
  },
  {
    cover: Image4,
    title: 'School Tour',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    date: '13-jan-2024',
    sliderImg: [Image1, Image2],
  },
];

function ImgCard() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const handleSeeMoreClick = (data) => {
    console.log('Clicked See More', data);
    setPopupData(data);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {/* Grid container for image cards with spacing */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Mapping through galleryData to create image cards */}
        {galleryData.map((item, index) => (
          <Grid key={index} lg={4} md={6} sm={12} sx={{ padding: '20px' }}>
            {/* Individual image card */}
            <Card elevation={3}>
              <div style={{ position: 'relative' }}>
                {/* Card media with cover image */}
                <CardMedia
                  component="img"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                  }}
                  src={item.cover}
                  alt={item.title}
                />
              </div>
              {/* Card content with image title, date, and 'See More' button */}
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  <Typography variant="subtitle2" color="textSecondary">
                    {/* Displaying date and 'See More' button */}
                    <Grid
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                      }}
                    >
                      {/* Displaying date with calendar icon */}
                      <Grid
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <CalendarTodayIcon sx={{ width: '16px', height: '16px' }} />{' '}
                        {item.date}
                      </Grid>
                      {/* 'See More' button */}
                      <Grid>
                        <Button
                          size="small"
                          color="primary"
                          sx={{ padding: '0px' }}
                          onClick={() => handleSeeMoreClick(item)}
                        >
                          See More
                        </Button>
                      </Grid>
                    </Grid>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* PopupComponent for displaying detailed information */}
      <PopupComponent isOpen={popupOpen} onClose={handleClosePopup} data={popupData} />
    </>
  );
}

export default ImgCard;
