import React from 'react'
import { ClassTeacherProfileDetails } from 'layout/MainLayout/Header/class-teacher/teacher-profile-section/TeacherProfile'
import Profile from 'components/dashboard/Profile'

const ClassTeacherProfile = () => {
  return (
    <>
       <Profile  teacherDetails={ClassTeacherProfileDetails}/>
    </>
  )
}

export default  ClassTeacherProfile