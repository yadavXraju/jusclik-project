// ================ sampal data ============
function createData(id, name, date, ldate, netpay, amtpay, bal, receiptno, receiptdate, paymode, status) {
    return {
      id,
      name,
      date,
      ldate,
      netpay,
      amtpay,
      bal,
      receiptno,
      receiptdate,
      paymode,
      status,
    };
  }
const rows = [
    createData(1, 'Regular', '01-May-24', '28-Jan-23', 305, 4000, 40000, '1', '23-Jan-24', 'Adj Entry', 'Pending'),
    createData(2, 'Tution', '01-Mar-24', '22-Dec-24', 30, 45000, 45000, '2', '28-Feb-24', 'Demand Draft', 'Paid'),
    createData(3, 'Practical', '01-Jul-24', '24-Dec-23', 3067, 9000, 23000, '3', '28-Mar-24', 'Adj Entry', 'Pending'),
    createData(4, 'Tution', '24-Jun-24', '22-Sep-24', 3088, 5000, 35000, '4', '28-Apr-24', 'Credit/Debit Card', 'Paid'),
    createData(5, 'Regular', '01-Aug-24', '21-Nov-24', 3043, 8000, 4000, '5', '28-Dec-23', 'Adj Entry', 'Pending'),
    createData(6, 'Practical', '06-Aug-24', '23-Nov-24', 3043, 8000, 54000, '6', '21-May-24', 'Credit/Debit Card', 'Pending'),
    createData(7, 'Practical', '06-Aug-24', '20-Nov-24', 3043, 8000, 45000, '7', '21-May-24', 'Credit/Debit Card', 'Pending'),
  ];

  export default rows
  




//   import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Function to create a data row
// function createData(id, name, date, ldate, netpay, amtpay, bal, receiptno, receiptdate, paymode, status) {
//   return {
//     id,
//     name,
//     date,
//     ldate,
//     netpay,
//     amtpay,
//     bal,
//     receiptno,
//     receiptdate,
//     paymode,
//     status,
//   };
// }

// // Component to display the fetched data
// const DisplayData = () => {
//   const [rows, setRows] = useState([]);

//   useEffect(() => {
//     // Function to fetch data from the API using Axios
//     const fetchData = async () => {
//       try {
//         // Replace 'your-api-endpoint' with the actual endpoint of your API
//         const response = await axios.get('your-api-endpoint');

//         // Map the API response data to create rows
//         const apiRows = response.data.map((data) =>
//           createData(
//             data.id,
//             data.name,
//             data.date,
//             data.ldate,
//             data.netpay,
//             data.amtpay,
//             data.bal,
//             data.receiptno,
//             data.receiptdate,
//             data.paymode,
//             data.status
//           )
//         );

//         // Set the state with the fetched rows
//         setRows(apiRows);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetchData function when the component mounts
//     fetchData();
//   }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

//   // Render the component with the fetched rows
//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//         {rows.map((row) => (
//           <li key={row.id}>{JSON.stringify(row)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DisplayData;
