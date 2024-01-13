import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { makeStyles } from '@mui/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  arrowIcon: {
    color: '#000000',
  },
}));

const ImageSlider = ({ images }) => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon className={classes.arrowIcon} />,
    prevArrow: <ArrowBackIosIcon className={classes.arrowIcon} />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
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
