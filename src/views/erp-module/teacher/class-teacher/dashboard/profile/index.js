import React from 'react'
import { ClassTeacherProfileDetails } from 'layout/MainLayout/Header/TeacherProfile'
import Profile from 'components/dashboard/Profile'

const ClassTeacherProfile = () => {
  return (
    <>
       <Profile  teacherDetails={ClassTeacherProfileDetails}/>
    </>
  )
}

export default  ClassTeacherProfile