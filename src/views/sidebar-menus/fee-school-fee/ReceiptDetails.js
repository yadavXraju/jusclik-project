
import React from 'react'
import timeTableData1 from '../timetable/TimeTableData'

function ReceiptDetails() {
  console.log(timeTableData1)
  return (
    <div>
      Transport
    </div>
  )
}

export default ReceiptDetails






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ClassDisplay = () => {
//   const [timeTableData, setTimeTableData] = useState({
//     Mon: [],
//     Tue: [],
//     Wed: [],
//     Thu: [],
//   });

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         'https://uat.shauryasoft.com/api/student/timetable',
//         {
//           params: {
//             SCode: 6,
//             Session: '2023-2024',
//             UserCode: 0,
//             Class: 'IX',
//             Section: 'A',
//             ECode: 102030,
//             DateSpecific: '2023-08-05',
//           },
//           headers: {
//             ApiKey: 'CldbvvQeenSv5xs899AIgeN8r7fTtjOdf97cxPw4uMZ1nVfYyvkQsQ9Mn8zrOYyA',
//           },
//         }
//       );

//       const jResponse = response.data;

//       setTimeTableData(jResponse);

//       alert('Data fetched successfully');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       alert('Error fetching data');
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

//   return (
//     <>
//       {Object.entries(timeTableData).map(([day, periods]) => (
//         <div key={day}>
//           <h2>{day}</h2>
//           {periods.map((periodInfo, index) => (
//             <div key={index}>
//               <p>{periodInfo.period}</p>
//               {periodInfo.details.map((classInfo, classIndex) => (
//                 <div key={classIndex}>
//                   <p>{classInfo.subject}</p>
//                   <p>{classInfo.teacher}</p>
//                   <p>{classInfo.time}</p>
//                   {/* Add more elements as needed */}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// };

// export default ClassDisplay;