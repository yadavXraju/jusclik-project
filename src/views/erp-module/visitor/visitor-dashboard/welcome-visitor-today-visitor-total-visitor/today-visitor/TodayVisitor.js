import React from 'react'
import CheckIn from 'views/common-section/CheckIn'
import { CheckInAndCheckOutData } from 'views/class-teacher-dashboard/welcome-check-in-attendance/check-in/CheckInDeatils'

const TodayVisitor = () => {
  return (
    <>
          <CheckIn CheckInAndCheckOutData={CheckInAndCheckOutData} />
    </>
  )
}

export default TodayVisitor