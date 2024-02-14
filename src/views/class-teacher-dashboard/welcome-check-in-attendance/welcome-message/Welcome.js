
import React from 'react'
import WelcomeMessageTemplate from 'views/class-teacher-dashboard/common-section/Welcome'



const ClassTeacherWelcomeMessage = () => { 

  // sending teacher name as a props to the welcome msg template

  const teacherDetails = {
    TeacherName: 'Suraj Mishra',
  };

  return (
    <>
        <WelcomeMessageTemplate teacherDetails={teacherDetails} />
    </>
  )
}

export default ClassTeacherWelcomeMessage
