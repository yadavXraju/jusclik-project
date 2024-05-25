// Page Owner : Abhshek Negi 
// Description : Student Leave Widget

import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid, Typography, Box ,Paper} from '@mui/material';
import AvatarImg from 'assets/images/Avatar-images/avatar.png';
import { subTitle, subtitle2 , HeadingCss } from 'components/dashboard/CommonCss';
import { getCurrentDate } from 'utils/timeUtils';


// slider settings start
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

// Student Leave Data 
export const StudentLeaveData = [
  {
    id:0,
    name:  'Suraj1',
    class : ' V A',
    image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
    date : '06-02-2024'
   },

  {
   id:1,
   name:  'Suraj',
   class : ' V A',
   image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
   date : '06-02-2024'
  },

  {
    id:2,
    name:  'Vikash',
    class : ' V A',
    image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
    date : '06-02-2024'
   },


   {
    id:3,
    name:  'Rubi',
    class : ' V A',
    image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
    date : '06-02-2024'
   },

   {
    id:4,
    name:  'Suraj',
    class : ' V A',
    image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
    date : '06-02-2024'
   },
 
   {
     id:5,
     name:  'Vikash',
     class : ' V A',
     image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
     date : '06-02-2024'
    },
 
 
    {
     id:6,
     name:  'Rubi',
     class : ' V A',
     image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
     date : '06-02-2024'
    },


    {
      id:7,
      name:  'Suraj',
      class : ' V A',
      image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
      date : '04-02-2024'
     },
   
     {
       id:8,
       name:  'Vikash',
       class : ' V A',
       image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
       date : '04-02-2024'
      },
   
   
      {
       id:9,
       name:  'Rubi',
       class : ' V A',
       image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
       date : '06-02-2024'
      },


      {
        id:10,
        name:  'Suraj',
        class : ' V A',
        image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
        date : '04-02-2024'
       },
     
       {
         id:11,
         name:  'Vikash',
         class : ' V A',
         image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
         date : '06-02-2024'
        },
     
     
        {
         id:12,
         name:  'Rubi',
         class : ' V A',
         image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
         date : '04-02-2024'
        },

        {
          id:13,
          name:  'Suraj',
          class : ' V A',
          image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
          date : '04-02-2024'
         },
       
         {
           id:14,
           name:  'Vikash',
           class : ' V A',
           image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
           date : '06-02-2024'
          },
       
       
          {
           id:15,
           name:  'Rubi',
           class : ' V A',
           image: <img src={AvatarImg} alt="avatar" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />,
           date : '04-02-2024'
          },

]

const StudentLeave = () => {
 // getting current date
 const currentDate = getCurrentDate(); // Use getCurrentDate function
 const currentLeaveData = StudentLeaveData.filter(student => student.date === currentDate);

  return (
    <>
       <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid rgba(128, 128, 128, 0.25)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
        marginBottom: '20px', // Add some bottom margin for spacing
      }}
    >
      <Grid item
        sx={{
            padding: '24px 24px 0 24px',
            background: '#f9f9fb',
            borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
            borderRadius: '12px 12px 0px 0',
            display:'flex',
            justifyContent:'space-between',
        }}
      >
                <Typography variant="h2" style={HeadingCss}>
                  Students On Leave
                </Typography>

                <Typography variant="h2" style={HeadingCss}>
                  {currentDate}
                </Typography>
              </Grid>
          

         {/* setting  slider */}
         <Grid item sx={{ padding: '24px' ,height:"150px"}}>
            {currentLeaveData.length > 0
             ? (
              <Slider {...Settings}>

                {/* maping leave data */}
                {currentLeaveData.map((student, index) => (
                  <Grid key={index}>
                    <Grid>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        {student.image}
                        <Typography variant="h3" style={subTitle}>
                          {student.name}
                        </Typography>

                        <Typography variant="subtitle" style={subtitle2}>
                          {student.class}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                ))}
              </Slider>
            ) 
            
            // show the msg when no student on leave
            
            : (
              <Typography variant="h3">No students are on leave today.</Typography>
            )}
          </Grid>
      </Paper>
    </>
  );
};


export default StudentLeave;
