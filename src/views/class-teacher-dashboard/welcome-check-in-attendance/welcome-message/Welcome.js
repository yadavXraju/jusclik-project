// import { Typography , useMediaQuery } from '@mui/material'
// import { TeacherProfileDetails } from 'layout/MainLayout/Header/class-teacher/teacher-profile-section/TeacherProfile'
// import React from 'react'
// import { welcomeMsg } from 'views/dashboard/Default/dashboard-css/CommonCss'
// const WelcomeMessage = () => {
//   const isMobile = useMediaQuery('(max-width: 767px)');
//   return (
//     <>
//      <Typography  style={welcomeMsg}  variant='h1' sx={{py:2, fontSize: isMobile ? '32px' : '40px'}}>   Hello {TeacherProfileDetails.TeacherName} !</Typography>
//     </>
//   )
// }

// export default WelcomeMessage

import { Typography , useMediaQuery } from '@mui/material'
import { welcomeMsg } from 'views/dashboard/Default/dashboard-css/CommonCss'
import React from 'react'


const WelcomeMessage = ({ teacherName }) => { // Receive teacherName as a prop
  const isMobile = useMediaQuery('(max-width: 767px)');
    teacherName = 'Suraj Mishra';
  return (
    <>
      <Typography  style={welcomeMsg}  variant='h1' sx={{py:2, fontSize: isMobile ? '32px' : '40px'}}>
        Hello {teacherName} !
      </Typography>
    </>
  )
}

export default WelcomeMessage
