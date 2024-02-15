import React from 'react'
import TeacherTimeTable from 'views/common-section/TeacherTimeTable'
import { TeacherTimeTableDetails } from './TimeTableDetails'

const SubjectTeacherTimeTable = () => {
  return (
    <>
      <TeacherTimeTable TeacherTimeTableDetails={TeacherTimeTableDetails} />
    </>
  )
}

export default SubjectTeacherTimeTable