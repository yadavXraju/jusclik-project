// import React from 'react'

// function AttandanceLog() {
//   return (
//     <div>
//       AttandanceLog
//     </div>
//   )
// }

// export default AttandanceLog

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { Button, Paper } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import Popover from '@mui/material/Popover';
// import { IconButton } from '@mui/material';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// //import { Divider } from '@mui/material';
// import TablePagination from '@mui/material/TablePagination'; // Import TablePagination component
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// // Leave data
// const leavedata = [
//     { date: "2024-02-01", attendanceVisual: "Present", effectiveHours: "8h 30m", grossHours: "8h 45m", arrival: "9:00 AM", log: "Entry 1" },

// ];
// export default function AttandanceLog() {
//   const [value, setValue] = useState(0);
//   const [page, setPage] = useState(0); // Page state for TablePagination
//   const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page state for TablePagination

//   // =========== Handle change in tab ===============
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     setPage(0); // Reset page when changing tabs
//   };

//   // ========== Handle change in page ============
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // ============= Handle change in rows per page ==========
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0); // Reset page when changing rows per page
//   };

//   // =========== Filter data if Pending & Approved =========
//   const filteredData =
//     value === 0
//       ? leavedata.filter((item) => item.status === 'Pending')
//       : value === 1
//         ? leavedata.filter((item) => item.status === 'Approved')
//         : leavedata;

//   return (
//     <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 2 }}>
//       <Tabs sx={{ mb: 2 }} value={value} onChange={handleChange}>

//         <Tab label="Pending" />
//         <Tab label="Approved" />
//         <Tab label="All" />
//       </Tabs>

//       <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>
//               <Typography variant="h4">
//                 Date
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h4">ATTENDANCE VISUAL</Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h4">
//               EFFECTIVE HOURS
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h4">
//               GROSS HOURS
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h4">
//               ARRIVAL
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h4">
//               LOG
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
//                 Action
//               </Typography>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {filteredData
//             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((item, index) => (
//               <TableRow key={index}>
//                 <TableCell>
//                   <Typography variant="h5">{item.date}</Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="h5">{item.attendanceVisual}</Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="h5">{item.effectiveHours}</Typography>
//                 </TableCell>

//                 <TableCell>
//                   <Typography variant="h5">{item.grossHours}</Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="h5">{item.arrival}</Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="h5">{item.log}</Typography>
//                 </TableCell>
//                 {/* <TableCell>
//                   <Typography variant="h5">
//                     <Box
//                       sx={{
//                         color: item.status === 'Approved' ? 'rgb(0, 200, 83)' : (item.status === 'overdue' ? '#433e1a' : 'rgb(216, 67, 21)'),
//                         borderRadius: '16px',
//                         background: item.status === 'Approved' ? 'rgba(147, 213, 166, 0.38)' : (item.status === 'overdue' ? '#ffff003b' : 'rgb(251, 233, 231)'),
//                         '&:hover': {
//                           background: item.status === 'Approved' ? 'rgb(0, 200, 83)' : (item.status === 'overdue' ? '#b4aa10' : 'rgb(216, 67, 21)'),
//                           color: 'white',
//                         },
//                         width: "100%",
//                         padding: '2px',
//                         paddingRight: '8px',
//                         paddingLeft: '8px',
//                         textAlign: 'center'
//                       }}
//                     >
//                       {item.status}
//                     </Box>
//                   </Typography>
//                 </TableCell> */}
//                 <TableCell>
//                   <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
//                     <PopupState variant="popover" popupId="demo-popup-popover">
//                       {(popupState) => (
//                         <div>
//                           <IconButton {...bindTrigger(popupState)}>
//                             <MoreHorizIcon />
//                           </IconButton>
//                           <Popover
//                             {...bindPopover(popupState)}
//                             anchorOrigin={{
//                               vertical: 'bottom',
//                               horizontal: 'center',
//                             }}
//                             transformOrigin={{
//                               vertical: 'top',
//                               horizontal: 'center',
//                             }}
//                           >
//                             <Typography sx={{ p: 1, display: 'Grid' }}>
//                               <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
//                               <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
//                               <Button sx={{ color: 'black' }}>Cancel</Button>
//                             </Typography>
//                           </Popover>
//                         </div>
//                       )}
//                     </PopupState>
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//       {/* ======== Render TablePagination component  ========== */}
//       <TablePagination
//         component="div"
//         count={filteredData.length}
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         SelectProps={{
//           inputProps: { 'aria-label': 'rows per page' },
//           native: true,
//         }}
//         rowsPerPageOptions={[5, 10, 25, 50]}
//       />
//     </Box>
//   );
// }









import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Table,  TableCell, TableContainer, TableHead, TableRow, Typography, TableBody, Button, Popover } from '@mui/material';
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Pagination from '../../common-section/Pagination';


const leavedata = [
  { date: '05-Mar-2024', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 1' },
  { date: '12-Mar-2024', attendanceVisual: 'Absent', effectiveHours: '7h 0m', grossHours: '7h 30m', arrival: '8:00 AM', log: 'Entry 2' },
  { date: '19-Mar-2024', attendanceVisual: 'Present', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 3' },
  { date: '26-Mar-2024', attendanceVisual: 'Present', effectiveHours: '8h 30m', grossHours: '9h 0m', arrival: '8:30 AM', log: 'Entry 4' },
  { date: '02-Apr-2024', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 5' },
  { date: '09-Apr-2024', attendanceVisual: 'Present', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 6' },
  { date: '16-Apr-2024', attendanceVisual: 'Present', effectiveHours: '8h 30m', grossHours: '9h 0m', arrival: '8:30 AM', log: 'Entry 7' },
  { date: '23-Apr-2024', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 8' },
  { date: '30-Apr-2024', attendanceVisual: 'Absent', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 9' },
  { date: '05-Mar-2023', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 1' },
  { date: '12-Aug-2023', attendanceVisual: 'Absent', effectiveHours: '7h 0m', grossHours: '7h 30m', arrival: '8:00 AM', log: 'Entry 2' },
  { date: '19-July-2023', attendanceVisual: 'Present', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 3' },
  { date: '26-Mar-2023', attendanceVisual: 'Present', effectiveHours: '8h 30m', grossHours: '9h 0m', arrival: '8:30 AM', log: 'Entry 4' },
  { date: '02-Jun-2023', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 5' },
  { date: '09-Apr-2023', attendanceVisual: 'Present', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 6' },
  { date: '16-May-2023', attendanceVisual: 'Present', effectiveHours: '8h 30m', grossHours: '9h 0m', arrival: '8:30 AM', log: 'Entry 7' },
  { date: '23-Apr-2023', attendanceVisual: 'Present', effectiveHours: '7h 45m', grossHours: '8h 15m', arrival: '8:30 AM', log: 'Entry 8' },
  { date: '30-Dec-2023', attendanceVisual: 'Absent', effectiveHours: '8h 0m', grossHours: '8h 30m', arrival: '8:15 AM', log: 'Entry 9' },
];


const months = [ 'Jan','Feb', 'Mar', 'Apr','May', 'Jun', 'July','Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // Define the months you want to filter by

export default function AttandanceLog() {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);



  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(0);
  };

  const filterDataByMonth = (month) => {
    return leavedata.filter(item => item.date.includes(month));
  };

  const renderMonthTabs = () => {
    return months.map((month, index) => (
      <Tab key={index} label={month} onClick={() => handleMonthTabClick(index)} />
    ));
  };

  const handleMonthTabClick = (index) => {
    setValue(index);
    setPage(0);
  };
 

  const filteredData = value === 0 ? leavedata : filterDataByMonth(months[value]);
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 2 }}>
      <Tabs sx={{ mb: 2 }} value={value} onChange={handleChange}>
        {renderMonthTabs()}
      </Tabs>
      
      <TableContainer sx={{border:'1px solid #ccc'}}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h4">Date</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">ATTENDANCE VISUAL</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">EFFECTIVE HOURS</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">GROSS HOURS</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">ARRIVAL</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">LOG</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="h5">{item.date}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.attendanceVisual}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.effectiveHours}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.grossHours}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.arrival}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.log}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <div>
                          <IconButton {...bindTrigger(popupState)}>
                            <MoreHorizIcon />
                          </IconButton>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'center'
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center'
                            }}
                          >
                            <Typography sx={{ p: 1, display: 'Grid' }}>
                              <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>View</Button>
                              <Button sx={{ color: 'black', borderBottom: '1px dotted #ccc' }}>Edit</Button>
                              <Button sx={{ color: 'black' }}>Cancel</Button>
                            </Typography>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={filteredData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
      />
    </Box>
  );
}
