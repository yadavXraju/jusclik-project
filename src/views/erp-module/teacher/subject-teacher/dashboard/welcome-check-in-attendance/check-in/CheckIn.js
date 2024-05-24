import React from 'react'
import Counter1 from 'components/CommonCounter'
import { CheckInAndCheckOutData } from './CheckInDetails'


const SubjectTeacherCheckIn = () => {
  return (
    <>
      <Counter1 Counter1Data={CheckInAndCheckOutData} />
    </>
  )
}

export default SubjectTeacherCheckIn