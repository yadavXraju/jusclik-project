// Page Owner Abhishek Negi
// Description : Slider Used in Circular in Teacher Dashboard

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// default style
const style = {
     NavIconStyle : {
     color: '#c8c8c8 !important', 
     width: '32px !important',
     height: '32px !important',
     borderRadius: '50%', 
     zIndex: '1', 
     left: '24px !important' 
  } ,
  NavIconStyleRight : {
    right: '24px !important' ,
    left:'auto !important',
 } 
}

const Carousel = ({
  children,
  dots = false,
  slidesToShow = 4,
  responsiveSettings = [],
  prevArrow = <ArrowBackIosIcon sx={{...style.NavIconStyle  }} />,
  nextArrow = <ArrowForwardIosIcon sx={{...style.NavIconStyle , ...style.NavIconStyleRight ,  }} />,
}) => {
  const settings = {
    dots: dots,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    responsive: [
      ...responsiveSettings,
      {
        breakpoint: 1500, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default Carousel;


