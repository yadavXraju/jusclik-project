// Page Owner : Abhishek Negi
// Description : Class Teacher Dashboard

import React from 'react';
import {  Grid, Paper , } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { useSelector } from "react-redux";
import ClassTeacherAlert from 'views/erp-module/teacher/class-teacher/dashboard/Alert';
import UpcomingBirthday from 'views/erp-module/teacher/class-teacher/dashboard/UpcomingBirthday';
import LowStudentAttendance from 'views/erp-module/teacher/class-teacher/dashboard/LowStudentAttendance';
import StudentStrength from 'views/erp-module/teacher/class-teacher/dashboard/StudentStrength';
import StudentLeave from 'views/erp-module/teacher/class-teacher/dashboard/StudentLeave';
import MostVisitedPages from 'views/erp-module/teacher/class-teacher/dashboard/MostVisitedPages';
import { ClassTeacherProfileDetails } from 'layout/MainLayout/Header/TeacherProfile'
import Profile from 'components/dashboard/Profile'
import {  boxHeight } from 'components/dashboard/CommonCss';
import GmailInboxTemplate from 'views/erp-module/parent/communication-message/MailBox';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';
import WelcomeMessageTemplate from 'components/dashboard/Welcome';
import CommonCounter from "components/dashboard/CommonCounter";
// import TeacherTimeTable from 'components/table-data-grid/temp-TeacherTimeTable';

// Welcome  section start
const ClassTeacherWelcomeMessage = () => { 
  const teacherDetails = {
    name: 'Suraj Mishra',
  };

  return (
    <>
        <WelcomeMessageTemplate teacherDetails={teacherDetails} />
    </>
  )
}

// Check in counter section start
export const CheckInAndCheckOutData  = {
  id :1,
  counterValue : '09:21 AM'  ,
  counterTitle : 'CHECK IN TIME',
}

const ClassTeacherCheckIn = () => {
      // to store state in this varible
      const customization = useSelector((state) => state.customization);
      // Extract background color and set opacity
      const themeColor = customization.themeColor || '';

  return (
    <>
      <CommonCounter CounterData={CheckInAndCheckOutData} themeColor={themeColor} className='themeColor'/>
    </>
  )
}

// Attendance counter section start
const TotalAttendanceDeatails  = {
  id :1,
  counterValue : '92%'  ,
  counterTitle : 'TOTAL ATTENDANCE',
}
const ClassTeacherTotalAttendance = () => {
    // to store state in this varible
    const customization = useSelector((state) => state.customization);
    // Extract background color and set opacity
    const themeColor = customization.themeColorV2 || '';
    
  return (
    <>
      <CommonCounter CounterData={TotalAttendanceDeatails} themeColor={themeColor} className='themeColorV2'/>
    </>
  )
}

// ========= profile section start
const ClassTeacherProfile = () => {
  return (
    <>
       <Profile  teacherDetails={ClassTeacherProfileDetails}/>
    </>
  )
}
// =========== communication
const Communication = () => {
  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
          border: '1px solid rgba(128, 128, 128, 0.25)',
          boxShadow: '4px 4px 9px 2px #ddddddc2',
          marginBottom: '20px' // Add some bottom margin for spacing
        }}
      >
        <ParamWidgetHeader title=" Recent  communication" />
        <Grid item sx={{ padding: '24px' }} style={boxHeight}>
          <GmailInboxTemplate />
        </Grid>
      </Paper>
    </>
  );
};



const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

         {/* Welcome message , Check in  and  attendance */}

          <Grid  item lg={8} md={12} sm={12} xs={12} >
            <Grid
              sx={{
                backgroundColor: '#fff',
                border: '1px solid rgb(227 227 227)',
                borderRadius: '7px',
                px: 4,
                py: 3,
              }}
            >
                <Grid container spacing={gridSpacing} sx={{pb:'11px'}}>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <ClassTeacherWelcomeMessage isLoading={isLoading} />
                      </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <ClassTeacherCheckIn  isLoading={isLoading} />
                        </Grid>
                          <Grid item lg={6} md={6} sm={6} xs={12}>
                            <ClassTeacherTotalAttendance isLoading={isLoading} />
                          </Grid>
                    </Grid>
             </Grid>
          </Grid>

           {/* Profile comp */}
           <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={12} xs={12} md={12} lg={12}>
                <ClassTeacherProfile/>
              </Grid>
            </Grid>
          </Grid>

         {/* Communication comp */}
          <Grid item xs={12} lg={7} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <Communication isLoading={isLoading} />
          </Grid>


           {/* Alert comp */}
           <Grid item xs={12} lg={5} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <ClassTeacherAlert isLoading={isLoading} /> 
          </Grid>

            {/* Upcoming Birthday comp */}
           <Grid item xs={12} lg={7} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>           
             <UpcomingBirthday isLoading={isLoading} />
          </Grid>

          {/* Fav pages comp */}
           <Grid item xs={12} lg={5} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <MostVisitedPages isLoading={isLoading} />
          </Grid>

          {/* Low Students Attendance comp */}
          <Grid item xs={12} lg={7} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <LowStudentAttendance isLoading={isLoading} />
           </Grid>

         {/* StudentStrength Comp */}
          <Grid item xs={12} lg={5} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>           
             <StudentStrength isLoading={isLoading} />
          </Grid>

         {/* Student on Leave Comp */}
         <Grid item xs={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>           
             <StudentLeave isLoading={isLoading} />
          </Grid>
     
          {/* <Grid item xs={12} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>           
             <ClassTeacherTimeTable isLoading={isLoading} />
          </Grid> */}

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
