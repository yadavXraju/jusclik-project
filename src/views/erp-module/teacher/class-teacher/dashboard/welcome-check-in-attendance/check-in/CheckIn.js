import React from "react";
import CommonCounter from "views/common-section/CommonCounter";
import { useSelector } from "react-redux";

export const CheckInAndCheckOutData  = {
  id :1,
  counterValue : '09:21 AM'  ,
  counterTitle : 'CHECK IN TIME',
}


const ClassTeacherCheckIn = () => {
      // to store state in this varible
      const customization = useSelector((state) => state.customization);
      // Extract background color and set opacity
      const themeColor = customization.themeColor || '';

  return (
    <>
      <CommonCounter CounterData={CheckInAndCheckOutData} themeColor={themeColor} className='themeColor'/>
    </>
  )
}

export default ClassTeacherCheckIn