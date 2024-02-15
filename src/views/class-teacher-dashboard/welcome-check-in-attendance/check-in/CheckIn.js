import React from "react";
import { CheckInAndCheckOutData } from "./CheckInDeatils";
import CheckIn from "views/common-section/CheckIn";

const ClassTeacherCheckIn = () => {
  return (
    <>
      <CheckIn CheckInAndCheckOutData={CheckInAndCheckOutData} />
    </>
  )
}

export default ClassTeacherCheckIn