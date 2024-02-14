import React from 'react'
import CheckIn from 'views/class-teacher-dashboard/common-section/CheckIn'
import { CheckInAndCheckOutData } from './CheckInDetails'


const SubjectTeacherCheckIn = () => {
  return (
    <>
      <CheckIn CheckInAndCheckOutData={CheckInAndCheckOutData} />
    </>
  )
}

export default SubjectTeacherCheckIn