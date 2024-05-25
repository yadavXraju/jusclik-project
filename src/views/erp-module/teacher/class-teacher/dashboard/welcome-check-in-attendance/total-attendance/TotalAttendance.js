import React from 'react'
import CommonCounter from 'components/dashboard/CommonCounter';
import { useSelector } from "react-redux";

 const TotalAttendanceDeatails  = {
  id :1,
  counterValue : '92%'  ,
  counterTitle : 'TOTAL ATTENDANCE',
}


const ClassTeacherTotalAttendance = () => {
    // to store state in this varible
    const customization = useSelector((state) => state.customization);
    // Extract background color and set opacity
    const themeColor = customization.themeColorV2 || '';
    
  return (
    <>
      <CommonCounter CounterData={TotalAttendanceDeatails} themeColor={themeColor} className='themeColorV2'/>
    </>
  )
}

export default ClassTeacherTotalAttendance