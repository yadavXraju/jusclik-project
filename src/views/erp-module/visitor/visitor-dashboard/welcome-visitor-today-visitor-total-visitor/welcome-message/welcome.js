import React from "react";
import WelcomeMessageTemplate from "views/common-section/Welcome";


const VisitorWelcomeMessage = () => {

    const VisitorDetails = {
        name: 'Vikash Poonia',
      };

  return (
    <>
        <WelcomeMessageTemplate teacherDetails={VisitorDetails} />
    </>
  )
}

export default VisitorWelcomeMessage