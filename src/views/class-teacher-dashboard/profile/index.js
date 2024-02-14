import React from 'react'
import { TeacherProfileDetails } from 'layout/MainLayout/Header/class-teacher/teacher-profile-section/TeacherProfile'
import Profile from 'views/class-teacher-dashboard/common-section/Profile'

const ClassTeacherProfile = () => {
  return (
    <>
       <Profile  teacherDetails={TeacherProfileDetails}/>
    </>
  )
}

export default  ClassTeacherProfile