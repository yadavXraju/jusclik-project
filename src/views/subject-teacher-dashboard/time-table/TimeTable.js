import React from 'react'
import TeacherTimeTable from 'views/class-teacher-dashboard/common-section/TeacherTimeTable'
import { TeacherTimeTableDetails } from './TimeTableDetails'

const SubjectTeacherTimeTable = () => {
  return (
    <>
      <TeacherTimeTable TeacherTimeTableDetails={TeacherTimeTableDetails} />
    </>
  )
}

export default SubjectTeacherTimeTable