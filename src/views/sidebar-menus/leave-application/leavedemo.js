// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// export default function CustomDatePicker() {
//   const [leaveFrom, setLeaveFrom] = React.useState(null);
//   const [background, setBackground] = React.useState('#ccc');

//   const handleLeaveFromChange = (date) => {
//     setLeaveFrom(date);
//     setBackground('red');
//   };

//   const handleDatePickerClick = () => {
//     setBackground('red'); // Change background color when date picker is clicked
//   };

//   return (
//     <Box>
//       <Box pl={0.5} pb={1}>Leave From</Box>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           value={leaveFrom}
//           onChange={handleLeaveFromChange}
//           format="DD-MM-YYYY"
//           onClick={handleDatePickerClick} // Add onClick event to update background color
//           sx={{ background: background, color: background }} // Set background color dynamically
//         />
//       </LocalizationProvider>
//     </Box>
//   );
// }