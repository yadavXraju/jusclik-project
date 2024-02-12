// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import subject from './HomeStudentDatalist'; // Corrected import statement

// export default function HomeStudentSubject() {
//   const [selectedSubject, setSelectedSubject] = React.useState('');

//   const handleChange = (event) => {
//     setSelectedSubject(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={selectedSubject}
//           onChange={handleChange}
//           label="Select Subject"
//         >
//           {subject.map((subjectItem) => (
//             <MenuItem key={subjectItem.value} value={subjectItem.value}>
//               {subjectItem.label}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
