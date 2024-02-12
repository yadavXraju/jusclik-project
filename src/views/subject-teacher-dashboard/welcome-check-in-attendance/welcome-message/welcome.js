import React from "react";
import WelcomeMessageTemplate from "views/class-teacher-dashboard/common-section/Welcome";


const SubjectTeacherWelcomeMessage = () => {
  const teacherDetails = {
    TeacherName : 'Rubi Dhiman'
  }
  return (
    <>
      <WelcomeMessageTemplate teacherDetails={teacherDetails}/>
    </>
  )
}

export default SubjectTeacherWelcomeMessage