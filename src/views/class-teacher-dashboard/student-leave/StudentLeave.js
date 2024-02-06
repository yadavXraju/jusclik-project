import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Settings } from './SliderSetting';
import { StudentLeaveData } from './StudentLeaveData';
import MainCard from 'ui-component/cards/MainCard';
import { Grid, Typography, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { HeadingCss } from 'views/dashboard/Default/dashboard-css/CommonCss';
import { subTitle , subtitle2 } from 'views/dashboard/Default/dashboard-css/CommonCss';

const StudentLeave = () => {
  // Get current date in 'dd-mm-yyyy' format
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = today.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  // Filter the StudentLeaveData based on current date
  const currentLeaveData = StudentLeaveData.filter(student => student.date === currentDate);

  return (
    <>
      <MainCard>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sx={{ mb: 3, padding: '10px 40px !important' }}>
            <Grid alignContent="center" justifyContent="space-between" sx={{ marginBottom: '3rem' }}>
              <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h2" style={HeadingCss}>
                  Students On Leave
                </Typography>

                <Typography variant="h2" style={HeadingCss}>
                  {currentDate}
                </Typography>
              </Grid>
            </Grid>

            <Slider {...Settings}>
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
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default StudentLeave;
