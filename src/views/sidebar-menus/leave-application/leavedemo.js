import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function LeaveForm() {
  const [selectedLeaveFrom, setSelectedLeaveFrom] = React.useState(null);
  const [selectedLeaveTo, setSelectedLeaveTo] = React.useState(null);
  const [selectedLeaveType, setSelectedLeaveType] = React.useState('');
  const [selectedLeaves, setSelectedLeaves] = React.useState([]);

  const handleLeaveFromChange = (date) => {
    setSelectedLeaveFrom(date);
  };

  const handleLeaveToChange = (date) => {
    setSelectedLeaveTo(date);
  };

  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };

  // Initialize leaveTypes1 with default values for each date
  const [leaveTypes1, setLeaveTypes1] = React.useState('');
  // ======== Function to handle changes in the leave type selection for a specific index ==========
  const handleLeaveTypeChange1 = (event, index) => {
    const newLeaveTypes = [...leaveTypes1];
    newLeaveTypes[index] = event.target.value;
    setLeaveTypes1(newLeaveTypes);
  };


  const handleAddLeave = () => {
    if (selectedLeaveFrom && selectedLeaveTo && selectedLeaveType) {
      const newLeave = {
        from: selectedLeaveFrom,
        to: selectedLeaveTo,
        type: selectedLeaveType
      };
  
      // Check if the selected date range overlaps with any existing leave
      const isOverlapping = selectedLeaves.some(leave => (
        (selectedLeaveFrom >= leave.from && selectedLeaveFrom <= leave.to) ||
        (selectedLeaveTo >= leave.from && selectedLeaveTo <= leave.to) ||
        (selectedLeaveFrom < leave.from && selectedLeaveTo > leave.to)
      ));
  
      if (isOverlapping) {
        // Show an alert or handle the overlapping case as required
        alert("Selected date range overlaps with existing leave.");
        return;
      }
  
      setSelectedLeaves([...selectedLeaves, newLeave]);
      // Clear selected values after adding a leave
      setSelectedLeaveFrom(null);
      setSelectedLeaveTo(null);
      setSelectedLeaveType('');
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to submit the form
  };

  const handleCancel = () => {
    // Logic to cancel the form
  };

  const getDatesInRange = (startDate, endDate) => {
    const dates = [];
    let currentDate = startDate.clone();
    while (currentDate <= endDate) {
      dates.push(currentDate.clone());
      currentDate = currentDate.add(1, 'day');
    }
    return dates;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ padding: 2 }}>
        <Box mb={1}>
          <Box
            mb={2}
            p={1}
            sx={{ border: '1px solid #ccc', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Box>
              <Box pl={0.5} pb={1}>
                Leave From
              </Box>
              <LocalizationProvider sx={{ background: '#ccc' }} dateAdapter={AdapterDayjs}>
                <DatePicker value={selectedLeaveFrom} onChange={handleLeaveFromChange} format="DD-MM-YYYY" />
              </LocalizationProvider>
            </Box>

            <Box mt={2.7} p={0.5} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
              {selectedLeaveTo && selectedLeaveFrom
                ? `${(selectedLeaveTo - selectedLeaveFrom) / (1000 * 60 * 60 * 24) + 1} days`
                : '0 days'}
            </Box>

            <Box>
              <Box pl={0.5} pb={1}>
                Leave To
              </Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={selectedLeaveTo} onChange={handleLeaveToChange} format="DD-MM-YYYY" />
              </LocalizationProvider>
            </Box>
          </Box>
          <Box p={1} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
            <Box mt={1} mb={2}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Select Type Of Leave You Want to Apply</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedLeaveType}
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
            Selected Leaves:
          </Typography>
          <ul>
            {selectedLeaves.map((leave, index) => (
              <li key={index}>
                <ul>
                  {getDatesInRange(leave.from, leave.to).map((date, index) => (
                    <li key={index}>
                      {/* <span>{leave.type}</span> */}
                      : {date.format('DD-MM-YYYY')}
                      <FormControl fullWidth size="small">
                                <InputLabel id={`leave-type-label-${index}`}>Leave Type</InputLabel>
                                <Select
                                  // disabled
                                  labelId={`leave-type-label-${index}`}
                                  id={`leave-type-select-${index}`}
                                  value={leaveTypes1[index] !== undefined ? leaveTypes1[index] : leave.type}
                                  label="Leave Type"
                                  onChange={(event) => handleLeaveTypeChange1(event, index)} // Handle change in leave type selection for this index
                                >
                                  <MenuItem value={'Casual Leave'}>Casual Leave</MenuItem>
                                  <MenuItem value={'Earned Leave'}>Earned Leave</MenuItem>
                                  <MenuItem value={'Medical Leave'}>Medical Leave</MenuItem>
                                  <MenuItem value={'Festival Leave'}>Festival Leave</MenuItem>
                                  <MenuItem value={'Leave Without Pay'}>Leave Without Pay</MenuItem>
                                </Select>
                              </FormControl>
                    </li>
                  ))}
                </ul>
              </li>
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