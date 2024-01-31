// ImageSlider.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageSlider = ({ images }) => {
 
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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

export default ImageSlider;



