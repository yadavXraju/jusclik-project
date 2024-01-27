// import React from 'react';

// const ReceiptDetails = () => {
//   return (
//     <div>
      
//       <div>Print Date: {new Date().toLocaleDateString()}</div>
      
//     </div>
//   );
// };

// export default ReceiptDetails;





// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';



// export default function ReceiptDetails() {
  
//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 0 }}>
//       {/* Add a print button */}
//       <Button variant="contained" color="primary" onClick={handlePrint} sx={{ margin: 2 }}>
//         Print
//       </Button>
//       {/* Rest of your component code */}
//     </Paper>
//   );
// }






// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
// import Button from '@mui/material/Button';

// const columns = [
//   { id: 'documenttitle', label: 'DOCUMENT TITLE', minWidth: 170 },
//   { id: 'discription', label: 'DESCRIPTION', minWidth: 100 },
//   { id: 'action', label: 'STATUS', minWidth: 170, align: 'right' },
//   { id: 'lastupdated', label: 'LAST UPDATED', minWidth: 170, align: 'right' },
//   { id: 'status', label: 'VIEW', minWidth: 170, align: 'right' },
// ];

// function createData(documenttitle, discription, status, lastupdated) {
//   return { documenttitle, discription, status, lastupdated };
// }

// const rows = [
//   createData('Code of Conduct', 'Organization Code of Conduct...', 'true', '13 Jan, 2020'),
//   createData('Code of Conduct', 'Organization Code of Conduct...', 'false', '13 Jan, 2020'),
//   createData('Code of Conduct', 'Organization Code of Conduct...', 'true', '13 Jan, 2020'),
//   createData('Code of Conduct', 'Organization Code of Conduct...', 'false', '13 Jan, 2020'),
// ];



// export default function Policies() {
//   const handlePrint = () => {
//     const printableContent = document.getElementById('printable-content');
//     const printWindow = window.open('', '_blank');
    
//     // Write the HTML content for printing
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Print</title>
//         </head>
//         <body>
//           ${printableContent.innerHTML}
//         </body>
//       </html>
//     `);

//     // Close the document
//     printWindow.document.close();

//     // Print the content
//     printWindow.print();
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 0 }}>
//       {/* Print button */}
//       <Button variant="contained" color="primary" onClick={handlePrint} sx={{ margin: 2 }}>
//         Print
//       </Button>
//       {/* Table component */}
//       <div id="printable-content">
//       <TableContainer>
//       <Table stickyHeader aria-label="sticky table" sx={{ border: '1px solid #ccc' }}>
//         <TableHead>
//           <TableRow>
//             {columns.map((column) => (
//               <TableCell
//                 key={column.id}
//                 align={column.align}
//                 style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
//               >
//                 {column.label}
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, rowIndex) => (
//             <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
//               <TableCell sx={{ fontWeight: 'bold' }}>{row.documenttitle}</TableCell>
//               <TableCell>{row.discription}</TableCell>
//               <TableCell
//                 align="right"
//                 sx={{ color: row.status === 'true' ? 'rgb(0, 200, 83)' : 'rgb(216, 67, 21)' }}
//               >
//                 <CheckCircleOutlineOutlinedIcon />
//               </TableCell>
//               <TableCell align="right">{row.lastupdated}</TableCell>
//               <TableCell align="right">
//                 {<VisibilityOutlinedIcon color="primary" />}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//       </div>
//     </Paper>
//   );
// }




// import React, { useRef } from 'react';
// import { Button } from 'antd';
// import ReactToPrint from 'react-to-print';
// import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';

// const Policies = () => {
//     const ref = useRef();

//     return (
//         <div>
//             <div ref={ref}>
//                 <h1>Your Text Goes Here</h1>
//                 <p>This is an example text that will be printed.</p>
//             </div>
            
//             <ReactToPrint
//                 bodyClass="print-agreement"
//                 content={() => ref.current}
//                 trigger={() => (
//                     <Button type="primary" icon={<LocalPrintshopOutlinedIcon fontSize='1rem' />}>
//                         Print
//                     </Button>
//                 )}
//             />
//         </div>
//     );
// };

// export default Policies;






// import React, { useRef } from 'react';
// import Button from '@mui/material/Button';
// import Grid from '@syncfusion/ej2-react-grids';
// import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';

// const YourComponent = () => {
//   const gridRef = useRef(null);

//   const clickHandler = () => {
//     // Your click handler logic
//   };

//   const columns = [
//     { field: 'EmployeeID', headerText: 'Employee ID', width: '120', textAlign: 'Right' },
//     { field: 'FirstName', headerText: 'First Name', width: '150' },
//     { field: 'City', headerText: 'City', width: '150' },
//     { field: 'Country', headerText: 'Country', width: '150' },
//   ];

//   return (
//     <div>
//       <Button onClick={clickHandler} variant="contained">Print</Button>
//       <Grid dataSource={rows} height={280} ref={gridRef}>
//         <ColumnsDirective>
//           {columns.map((column, index) => (
//             <ColumnDirective key={index} {...column} />
//           ))}
//         </ColumnsDirective>
//       </Grid>
//     </div>
//   );
// };

// export default YourComponent;
