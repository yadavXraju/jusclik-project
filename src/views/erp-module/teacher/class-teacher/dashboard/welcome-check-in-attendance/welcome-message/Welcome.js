
import React from 'react'
import WelcomeMessageTemplate from 'components/dashboard/Welcome'



const ClassTeacherWelcomeMessage = () => { 

  // sending teacher name as a props to the welcome msg template

  const teacherDetails = {
    name: 'Suraj Mishra',
  };

  return (
    <>
        <WelcomeMessageTemplate teacherDetails={teacherDetails} />
    </>
  )
}

export default ClassTeacherWelcomeMessage
