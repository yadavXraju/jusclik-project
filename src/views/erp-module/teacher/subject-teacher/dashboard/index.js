// Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import WelcomeAttandanceCheckIn from './welcome-check-in-attendance';
import SubjectTeacherProfile from './profile/Profile';
import Communication from 'views/class-teacher-dashboard/recent-communication/Communication';
import SubjectTeacherAlert from './alerts/Alert';
import UpcomingBirthday from 'views/class-teacher-dashboard/upcoming-birthday/UpcomingBirthday';
// import FavPages from 'views/class-teacher-dashboard/fav-pages/FavPages';
import SubjectTeacherFavPages from './fav-pages/FavPages';
import StudentLeave from 'views/class-teacher-dashboard/student-leave/StudentLeave';
import SubjectTeacherTimeTable from './time-table/TimeTable';


const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

         {/* Welcome message , Check in  and  attendance */}
          <Grid item lg={8} md={12} sm={12} xs={12} spacing={gridSpacing}>
            <Grid
              spacing={gridSpacing}
              sx={{
                backgroundColor: '#fff',
                border: '1px solid rgb(227 227 227)',
                borderRadius: '7px',
                px: 4,
                py: 3,
              }}
            >
              <WelcomeAttandanceCheckIn isLoading={isLoading} />
            </Grid>
          </Grid>

          
           {/* Profile comp */}
           <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <SubjectTeacherProfile />
              </Grid>
            </Grid>
          </Grid>


           {/* Communication comp */}
           <Grid item xs={12} md={7} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
              <Communication isLoading={isLoading} />
          </Grid>

          {/* Alert comp */}
           <Grid item xs={12} md={5} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <SubjectTeacherAlert isLoading={isLoading} /> 
          </Grid>


          {/* Upcoming Birthday comp */}
          <Grid item xs={12} md={7} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>           
             <UpcomingBirthday isLoading={isLoading} />
          </Grid>

            {/* Fav pages comp */}
           <Grid item xs={12} md={5} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <SubjectTeacherFavPages isLoading={isLoading} />
          </Grid>

          {/* Student on Leave Comp */}
          <Grid item xs={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>           
              <StudentLeave isLoading={isLoading} />
          </Grid>
      
               {/* Subject teacher time table  Comp */}
           <Grid item xs={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>           
              <SubjectTeacherTimeTable isLoading={isLoading} />
          </Grid>
      
           
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
