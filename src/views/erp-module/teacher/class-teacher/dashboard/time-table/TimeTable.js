import React from 'react'
import TeacherTimeTable from 'components/TeacherTimeTable'
import { TeacherTimeTableDetails } from './TimeTableDetails'

const ClassTeacherTimeTable = () => {
  return (
    <>
       <TeacherTimeTable TeacherTimeTableDetails={TeacherTimeTableDetails}/>
    </>
  )
}

export default ClassTeacherTimeTable