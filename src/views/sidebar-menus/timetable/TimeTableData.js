const timeTableData = {
    Monday :[
         { id:1 , Teacher : 'Mr. kavin' , time : '8:15 - 9:15am' , subject:'English', period:'1'},
         { id:2 , Teacher : 'Mr. Suraj' , time : '9:15 - 10:15am' , subject:'Mathematics' ,period:'2'},
         { id:3 , Teacher : 'Mr. Abhishek' , time : '10:15 - 11:00am' , subject:'Science' ,period:'3' },
         { id:null , Teacher : null , time : '11:00 - 11:15am' , subject:'Break' ,period:null},
         { id:4 , Teacher : 'Mr. Pawan' , time : '11:15 - 12:00am' , subject:'Hindi' ,period:'4'},
         { id:5 , Teacher : 'Mr. Rakesh' , time : '12:00 - 12:45pm' , subject:'Physics' ,period:'5'},
         { id:null , Teacher : null , time : '12:45 - 01:45pm' , subject:'Lunch Break' ,period:null},
         { id:6 , Teacher : 'Mrs. Sobha' , time : '12:45 - 01:45pm' , subject:'Chemistry' ,period:'6'},
         { id:7 , Teacher : 'Mr. kavin' , time : '12:45 - 01:45pm' , subject:'Monday' ,period:'7'}
    ],

    Tuesday :[
      { id:1 , Teacher : 'Mr. kavin' , time : '8:15 - 9:15am' , subject:'English', period:'1'},
         { id:2 , Teacher : 'Mr. Suraj' , time : '9:15 - 10:15am' , subject:'Mathematics' ,period:'2'},
         { id:3 , Teacher : 'Mr. Abhishek' , time : '10:15 - 11:00am' , subject:'Science' ,period:'3' },
         { id:null , Teacher : null , time : '11:00am - 11:15' , subject:'Break' ,period:null},
         { id:4 , Teacher : 'Mr. Pawan' , time : '11:15 - 12:00am' , subject:'Hindi' ,period:'4'},
         { id:5 , Teacher : 'Mr. Rakesh' , time : '12:00 - 12:45pm' , subject:'Physics' ,period:'5'},
         { id:null , Teacher : null , time : '12:45 - 01:45pm' , subject:'Lunch Break' ,period:null},
         { id:6 , Teacher : 'Mrs. Sobha' , time : '12:45 - 01:45pm' , subject:'Chemistry' ,period:'6'},
         { id:7 , Teacher : 'Mr. kavin' , time : '12:45 - 01:45pm' , subject:'Tuesday' ,period:'7'}
  ],

  Wednesday :[
   { id:1 , Teacher : 'Mr. kavin' , time : '8:15 - 9:15am' , subject:'English', period:'1'},
         { id:2 , Teacher : 'Mr. Suraj' , time : '9:15 - 10:15am' , subject:'Mathematics' ,period:'2'},
         { id:3 , Teacher : 'Mr. Abhishek' , time : '10:15 - 11:00am' , subject:'Science' ,period:'3' },
         { id:null , Teacher : null , time : '11:00 - 11:15am' , subject:'Break' ,period:null},
         { id:4 , Teacher : 'Mr. Pawan' , time : '11:15 - 12:00am' , subject:'Hindi' ,period:'4'},
         { id:5 , Teacher : 'Mr. Rakesh' , time : '12:00 - 12:45pm' , subject:'Physics' ,period:'5'},
         { id:null , Teacher : null , time : '12:45 - 01:45pm' , subject:'Lunch Break' ,period:null},
         { id:6 , Teacher : 'Mrs. Sobha' , time : '12:45 - 01:45pm' , subject:'Chemistry' ,period:'6'},
         { id:7 , Teacher : 'Mr. kavin' , time : '12:45 - 01:45pm' , subject:'Wednesday' ,period:'7'}
],

Thursday:[
   { id:1 , Teacher : 'Mr. kavin' , time : '8:15 - 9:15am' , subject:'English', period:'1'},
         { id:2 , Teacher : 'Mr. Suraj' , time : '9:15 - 10:15am' , subject:'Mathematics' ,period:'2'},
         { id:3 , Teacher : 'Mr. Abhishek' , time : '10:15 - 11:00am' , subject:'Science' ,period:'3' },
         { id:null , Teacher : null , time : '11:00 - 11:15am' , subject:'Break' ,period:null},
         { id:4 , Teacher : 'Mr. Pawan' , time : '11:15 - 12:00am' , subject:'Hindi' ,period:'4'},
         { id:5 , Teacher : 'Mr. Rakesh' , time : '12:00 - 12:45pm' , subject:'Physics' ,period:'5'},
         { id:null , Teacher : null , time : '12:45 - 01:45pm' , subject:'Lunch Break' ,period:null},
         { id:6 , Teacher : 'Mrs. Sobha' , time : '12:45 - 01:45pm' , subject:'Chemistry' ,period:'6'},
         { id:7 , Teacher : 'Mr. kavin' , time : '12:45 - 01:45pm' , subject:'Thursday' ,period:'7'}
],


Friday:[
   { id:1 , Teacher : 'Mr. kavin' , time : '8:15 - 9:15am' , subject:'English', period:'1'},
   { id:2 , Teacher : 'Mr. Suraj' , time : '9:15 - 10:15am' , subject:'Mathematics' ,period:'2'},
   { id:3 , Teacher : 'Mr. Abhishek' , time : '10:15 - 11:00am' , subject:'Science' ,period:'3' },
   { id:null , Teacher : null , time : '11:00 - 11:15am' , subject:'Break' ,period:null},
   { id:4 , Teacher : 'Mr. Pawan' , time : '11:15 - 12:00am' , subject:'Hindi' ,period:'4'},
   { id:5 , Teacher : 'Mr. Rakesh' , time : '12:00 - 12:45pm' , subject:'Physics' ,period:'5'},
   { id:null , Teacher : null , time : '12:45 - 01:45pm' , subject:'Lunch Break' ,period:null},
   { id:6 , Teacher : 'Mrs. Sobha' , time : '12:45 - 01:45pm' , subject:'Chemistry' ,period:'6'},
   { id:7 , Teacher : 'Mr. kavin' , time : '12:45 - 01:45pm' , subject:'Friday' ,period:'7'}
],

Saturday:[
   { id:1 , Teacher : 'Mr. kavin' , time : '8:15 - 9:15am' , subject:'English', period:'1'},
         { id:2 , Teacher : 'Mr. Suraj' , time : '9:15 - 10:15am' , subject:'Mathematics' ,period:'2'},
         { id:3 , Teacher : 'Mr. Abhishek' , time : '10:15 - 11:00am' , subject:'Science' ,period:'3' },
         { id:null , Teacher : null , time : '11:00 - 11:15am' , subject:'Break' ,period:null},
         { id:4 , Teacher : 'Mr. Pawan' , time : '11:15 - 12:00am' , subject:'Hindi' ,period:'4'},
         { id:5 , Teacher : 'Mr. Rakesh' , time : '12:00 - 12:45pm' , subject:'Physics' ,period:'5'},
         { id:null , Teacher : null , time : '12:45 - 01:45pm' , subject:'Lunch Break' ,period:null},
         { id:6 , Teacher : 'Mrs. Sobha' , time : '12:45 - 01:45pm' , subject:'Chemistry' ,period:'6'},
         { id:7 , Teacher : 'Mr. kavin' , time : '12:45 - 01:45pm' , subject:'Saturday' ,period:'7'}
],

}

export default timeTableData;













// const fetchData = async (Data) => {
//    const response = await axios.get("https://uat.shauryasoft.com/api/student/timetable", {
//      params: {
//        SCode: 6,
//        Session: '2023-2024',
//        UserCode: 0,
//        Class: 'IX',
//        Section: "A",
//        ECode: 102030,
//        DateSpecific: '2023-08-05',
//      },
//      headers: {
//        ApiKey:
//          "CldbvvQeenSv5xs899AIgeN8r7fTtjOdf97cxPw4uMZ1nVfYyvkQsQ9Mn8zrOYyA",
//      },
//    });
//    var jResponse = JSON.parse(response.data);
//    if (
//      jResponse.authcode !== null &&
//      jResponse.authcode !== "" &&
//      jResponse.authcode !== undefined
//    ) {
//      alert("login successfull");
//      console.log(jResponse);
//    } else {
//      alert("login unsuccessfull");
//    }
//  };
 





// const fetchData = async () => {
//    const response = await axios.get(
//        'https://uat.shauryasoft.com/api/student/timetable',
//        {
//            params: {
//                SCode: 6,
//                Session: '2023-2024',
//                UserCode: 0,
//                Class: 'IX',
//                Section: "A",
//                ECode: 102030,
//                DateSpecific: '2023-08-05',
//            },
//            headers: {
//                ApiKey: "CldbvvQeenSv5xs899AIgeN8r7fTtjOdf97cxPw4uMZ1nVfYyvkQsQ9Mn8zrOYyA",
//            },

//        }
//    );
//    console.log(response.data);
//    alert(response.data.EnrollNo);
//    if (response.data.EnrollNo === 'D00023') {
//        alert(' successfull');
//        console.log(jResponse);

//    } else {
//        alert('login unsuccessfull');
//    }

// };
// const timeTableData =  fetchData();


// export default timeTableData;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ClassDisplay = () => {
//   const [apiData, setApiData] = useState([]); // New state to store API data

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

//       setApiData(jResponse);
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
//       {apiData.map(([day, periods]) => (
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





