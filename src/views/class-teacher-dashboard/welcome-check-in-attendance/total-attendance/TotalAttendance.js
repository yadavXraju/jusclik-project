import React from 'react'
import TotalAttendance from 'views/class-teacher-dashboard/common-section/TotalAttendance'
import { TotalAttendanceDeatails } from './AttendanceDetails'

const ClassTeacherTotalAttendance = () => {
  return (
    <>
      <TotalAttendance TotalAttendanceDeatails={TotalAttendanceDeatails}/>
    </>
  )
}

export default ClassTeacherTotalAttendance