// ImageCarousel.jsx
import React from 'react';
import { Paper } from '@mui/material';
import { Carousel } from 'react-material-ui-carousel'; // Make sure to import Carousel

const ImageCarousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Paper key={index} >
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onError={() => console.error(`Error loading image ${index}: ${image}`)}
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
