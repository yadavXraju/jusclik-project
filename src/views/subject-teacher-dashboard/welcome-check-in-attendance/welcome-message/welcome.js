import React from 'react'
import WelcomeMessage from 'views/class-teacher-dashboard/welcome-check-in-attendance/welcome-message/Welcome'


const SubjectTeacherWelcomeMessage = () => {
  // Define the name you want to display
  const subjectTeacherName = 'Rubi Dhiman';

  return (
    <>
      {/* Pass the new name as a prop */}
      <WelcomeMessage teacherName={subjectTeacherName} />
    </>
  )
}

export default SubjectTeacherWelcomeMessage
