import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Settings } from './SliderSetting';
import { StudentLeaveData } from './StudentLeaveData';
// import MainCard from 'components/ui/cards/MainCard';
import { Grid, Typography, Box ,Paper} from '@mui/material';
// import { gridSpacing } from 'store/constant';
import { subTitle, subtitle2 , HeadingCss } from 'components/dashboard/CommonCss';
import { getCurrentDate } from 'utils/timeUtils';

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
      <Grid
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
         <Grid sx={{ padding: '24px' ,height:"150px"}}>
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
