// Dashboard.js
import React from 'react';
import { Typography , useMediaQuery , Grid , 
  Avatar, Box, Button
 } from '@mui/material';

import { gridSpacing } from 'store/constant';
import CircularAndNoticeHomeComp from './CircularAndNoticeHomeComp';
import AssignmentsHomeComp from './assignmentHome/AssignmentsHomeComp';
import TimeTableHome from './TimeTableHome';
import CommunicationHomeComp from './CommunicationHomeComp';
import AttandanceChartHomeComp from './AttendanceChartHomeComp';
import Alert from './Alerts';

// ============== user welcome message imports 

import { studentProfileDetails } from 'layout/MainLayout/Header/ProfileSection/ProfileDeatails'
import { welcomeMsg } from 'views/common-section/dashboard-css/CommonCss'

// ============== Counter imports 
import { useSelector } from 'react-redux';
import CommonCounter from 'views/common-section/CommonCounter';
import { useNavigate } from 'react-router';

// ============== Profile imports 


// user welcome Message start
const WelcomeMessage = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
     <Typography  style={welcomeMsg}  variant='h1' sx={{py:2, fontSize: isMobile ? '32px' : '40px'}}>   Hello {studentProfileDetails.StudentName} !</Typography>
    </>
  )
}
// user welcome Message end 

// Attendance Comp  start
export const AttendancetData  = {
  id :1,
  counterValue : '63.3%'  ,
  counterTitle : 'attendance',
}

export const present = '63.3%';
const AttendanceHomeComp = () => {
   // to store state in this varible
   const customization = useSelector((state) => state.customization);
   // Extract background color and set opacity
   const themeColor = customization.themeColor || '';

return (
 <>
   <CommonCounter CounterData={AttendancetData} themeColor={themeColor} className='themeColor'/>
 </>
)
}
// Attendance Comp  end

// Due Fee  start
export const DueFeeData  = {
  id :1,
  counterValue : '₹ -48,836%' ,
  counterTitle : 'fee due',
}

const DueFee = () => {
    // to store state in this varible
    const customization = useSelector((state) => state.customization);
    // Extract background color and set opacity
    const themeColor = customization.themeColorV2 || '';
 
 return (
  <>
    <CommonCounter CounterData={DueFeeData} themeColor={themeColor} className='themeColorV2'/>
  </>
 )
 }
// Due Fee  end 

// Profile fee  start
const Profile = () => {
  const navigate = useNavigate(); 


return (
  <>
    <Box sx={{ textAlign: 'center',  border: ' 1px solid rgb(227 227 227)',borderRadius:'7px', padding: '2rem' , background:'#fff' }}>
      <Avatar alt="Remy Sharp" src={studentProfileDetails.StudentImage} sx={{ width: 150, height: 150, margin: 'auto', marginBottom: '10px' }} />
      <Typography variant="h2">{studentProfileDetails.StudentName}</Typography>
      <Typography variant="h5" sx={{lineHeight:'1.6'}}>{studentProfileDetails.AdminNo}</Typography>
      <Typography variant="h5">Class : {studentProfileDetails.Class}</Typography>
      <Button sx={{ textTransform: 'uppercase', background: 'rgb(33, 150, 243)', color: '#fff' , marginTop:'1rem' }} variant="contained"  onClick={() => navigate('/parent/student-profile')}>
        View Profile
      </Button>
    </Box>
  </>
);
};

// Profile fee  end 

const Dashboard = ({ isLoading }) => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

         {/* Welcome message , Attandance and fee due comp */}
          <Grid item lg={8} md={12} sm={12} xs={12} >
            <Grid sx={{ backgroundColor: '#fff',  border: '1px solid rgb(227 227 227)', borderRadius: '7px',  px: 4, py: 3, }}
            >
                <Grid container spacing={gridSpacing} sx={{pb:'11px'}}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <WelcomeMessage isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <AttendanceHomeComp isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <DueFee isLoading={isLoading} />
                    </Grid>
               </Grid>
            </Grid>
          </Grid>

         {/* Profile comp */}
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={12} xs={12} md={12} lg={12}>
                <Profile />
              </Grid>
            </Grid>
          </Grid>

          {/* Communication comp */}
          <Grid item xs={12} lg={7} md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <CommunicationHomeComp isLoading={isLoading} />
          </Grid>

           {/* Alert comp */}
          <Grid item xs={12} lg={5}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
            <Alert isLoading={isLoading} /> 
          </Grid>

           {/* Assignment comp */}
          <Grid item xs={12} lg={7}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <AssignmentsHomeComp isLoading={isLoading} />
          </Grid>
          
           {/* Attandance chart comp */}
          <Grid item xs={12} lg={5}  md={12}>
              <AttandanceChartHomeComp isLoading={isLoading} />
          </Grid>

           {/* Time Table comp */}
          <Grid item xs={12} lg={7}  md={12} sx={{ marginTop: { md: '0px', lg: '0rem' } }}>
             <TimeTableHome isLoading={isLoading} /> 
          </Grid>

           {/* Circular and Notice or Updates comp */}
          <Grid item xs={12}  lg={5}  md={12}>
              <CircularAndNoticeHomeComp isLoading={isLoading} />
          </Grid>


        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
