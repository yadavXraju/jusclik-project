import React from 'react'
import { SubjectTeacherProfileDetails } from 'layout/MainLayout/Header/subject-teacher/subject-teacher-profile-section/subjectTeacherProfile'
import Profile from 'components/Profile'

const SubjectTeacherProfile = () => {
  return (
    <>
       <Profile  teacherDetails={SubjectTeacherProfileDetails}/>
    </>
  )
}

export default  SubjectTeacherProfile