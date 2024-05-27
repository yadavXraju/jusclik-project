// sangeeta

import React, { useState } from 'react';
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Button,
  Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from './img/front-view-smiley-woman-with-fireworks.jpg';
import Image2 from './img/women-outdoor-park-using-mobiles.jpg';
import Image3 from './img/group-girlfriends-sitting-table-together-celebrating-birthday-outdoor-park.jpg';
import Image4 from './img/pic4.jpg';


// image slider start =============
const ImageSlider = ({ images }) => {
 
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign:'center' ,margin:'10px'}}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ maxWidth: '100%', height: '400px' }}
            onError={() => console.error(`Error loading image ${index}: ${image}`)}
          />
        </div>
      ))}
    </Slider>
  );
};

// image slider end =============

// pupular component start ==================
const PopupComponent = ({ isOpen, onClose, data }) => {
  

  return (
    <Dialog open={isOpen} onClose={onClose} height="400px" >
      <DialogTitle>{data?.title}</DialogTitle>
      <DialogContent style={{ overflow: 'hidden',background:"rgba(0,0,0,0.2)", margin:'10px', paddingTop:'20px' }}>
        {data && (
          <>
            <ImageSlider images={data.sliderImg} />
            <Grid container sx={{display:'flex',justifyContent:'flex-start'}}>
              <Typography sx={{color:'black'}}>{data?.description}</Typography>
              <Typography sx={{color:'black'}}>Date: {data?.date}</Typography>
            </Grid>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
// pupular component end ==================

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
