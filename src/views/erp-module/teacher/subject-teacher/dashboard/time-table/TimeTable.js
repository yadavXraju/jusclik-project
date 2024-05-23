// ======= Page Owner Vikash =========
import React from 'react'
import TeacherTimeTable from 'component/TeacherTimeTable'
import { TeacherTimeTableDetails } from './TimeTableDetails'

const SubjectTeacherTimeTable = () => {
  return (
    <>
      <TeacherTimeTable TeacherTimeTableDetails={TeacherTimeTableDetails} />
    </>
  )
}

export default SubjectTeacherTimeTable