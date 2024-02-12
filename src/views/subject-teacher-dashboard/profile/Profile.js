import React from 'react'
import { TeacherProfileDetails } from 'layout/MainLayout/Header/subject-teacher/subject-teacher-profile-section/subjectTeacherProfile'
import Profile from 'views/class-teacher-dashboard/common-section/Profile'

const SubjectTeacherProfile = () => {
  return (
    <>
       <Profile  teacherDetails={TeacherProfileDetails}/>
    </>
  )
}

export default  SubjectTeacherProfile