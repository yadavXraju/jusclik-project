import React from 'react'
import AttendanceGraph from './AttendanceGraph';

const MainAttendance = () => {
    const attendanceData = [
        { date: '2022-01-01', present: 20, absent: 5 },
        { date: '2022-01-02', present: 18, absent: 7 },
        // Add more data as needed
      ];

  return (
    <div>
           <AttendanceGraph data={attendanceData} />
    </div>
  )
}

export default MainAttendance