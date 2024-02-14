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



import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LeaveForm() {
    const [defaultLeaveType, setDefaultLeaveType] = React.useState('');
    const [selectedLeaveTypes, setSelectedLeaveTypes] = React.useState([]);

    const handleLeaveTypeChange = (event) => {
        setDefaultLeaveType(event.target.value);
    };

    const handleAddLeave = () => {
        setSelectedLeaveTypes([...selectedLeaveTypes, defaultLeaveType]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to submit the form
    };

    const handleCancel = () => {
        // Logic to cancel the form
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ padding: 2 }}>
                <Box mb={1}>
                    <Box p={1} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
                        <Box mt={1} mb={2}>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-simple-select-label">Select Type Of Leave You Want to Apply</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={defaultLeaveType}
                                    label="Select Type Of Leave You Want to Apply"
                                    onChange={handleLeaveTypeChange}
                                >
                                    <MenuItem value={'Casual Leave'}>Casual Leave</MenuItem>
                                    <MenuItem value={'Earned Leave'}>Earned Leave</MenuItem>
                                    <MenuItem value={'Medical Leave'}>Medical Leave</MenuItem>
                                    <MenuItem value={'Festival Leave'}>Festival Leave</MenuItem>
                                    <MenuItem value={'Leave Without Pay'}>Leave Without Pay</MenuItem>
                                </Select>
                            </FormControl>

                        </Box>
                        <Button type="button" variant="contained" size="small" onClick={handleAddLeave}>
                            Add Leaves
                        </Button>
                    </Box>
                </Box>
                <Box mb={1}>
                    <Typography variant="h6" gutterBottom>
                        Selected Leave Types:
                    </Typography>
                    <ul>
                        {selectedLeaveTypes.map((leaveType, index) => (
                            <li key={index}>{leaveType}</li>
                        ))}
                    </ul>
                </Box>
                <Box sx={{ padding: 2 }}>
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                    <Button onClick={handleCancel} sx={{ alignSelf: 'flex-end' }}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </form>
    );
}