import React from 'react'
import { VisitorProfileDetails } from 'layout/MainLayout/Header/visitor-profile/visitor-profile-section/VisitorProfile'
import Profile from 'views/common-section/Profile'

const VisitorProfile = () => {
  return (
    <>
       <Profile  teacherDetails={VisitorProfileDetails}/>
    </>
  )
}

export default  VisitorProfile