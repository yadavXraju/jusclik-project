import React from "react";
import WelcomeMessageTemplate from "views/common-section/Welcome";


const SubjectTeacherWelcomeMessage = () => {
  const teacherDetails = {
    name : 'Rubi Dhiman'
  }
  return (
    <>
      <WelcomeMessageTemplate teacherDetails={teacherDetails}/>
    </>
  )
}

export default SubjectTeacherWelcomeMessage