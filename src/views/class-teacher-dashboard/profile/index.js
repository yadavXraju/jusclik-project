import React from 'react'
import { ClassTeacherProfileDetails } from 'layout/MainLayout/Header/class-teacher/teacher-profile-section/TeacherProfile'
import Profile from 'views/common-section/Profile'

const ClassTeacherProfile = () => {
  return (
    <>
       <Profile  teacherDetails={ClassTeacherProfileDetails}/>
    </>
  )
}

export default  ClassTeacherProfile