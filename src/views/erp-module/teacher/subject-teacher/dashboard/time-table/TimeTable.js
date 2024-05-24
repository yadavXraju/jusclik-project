// ======= Page Owner Vikash =========
import React from 'react'
import TeacherTimeTable from 'components/TeacherTimeTable'
import { TeacherTimeTableDetails } from './TimeTableDetails'

const SubjectTeacherTimeTable = () => {
  return (
    <>
      <TeacherTimeTable TeacherTimeTableDetails={TeacherTimeTableDetails} />
    </>
  )
}

export default SubjectTeacherTimeTable