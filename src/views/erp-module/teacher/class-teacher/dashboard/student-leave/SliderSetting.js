import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export const Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],


    nextArrow: <ArrowForwardIcon sx={{ backgroundColor: 'rgb(94, 53, 177 ) !important', color : '#fff !important', padding: '6px !important', width : '32px !important', height : '32px !important',borderRadius:'50%', }}/>,
    prevArrow: <ArrowBackIcon sx={{ backgroundColor: 'rgb(94, 53, 177 ) !important', color : '#fff !important', padding: '6px !important', width : '32px !important', height : '32px !important',borderRadius:'50%', }}/>,
  };