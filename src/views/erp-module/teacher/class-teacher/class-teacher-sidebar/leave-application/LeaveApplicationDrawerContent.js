// ======= Page Owner Vikash =========
// ======= Leave Application Form =========
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextArea from 'antd/es/input/TextArea';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Divider, ListItem, ListItemText } from '@mui/material';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Dialog, DialogTitle , DialogContent ,DialogContentText ,DialogActions } from '@mui/material';
import ParamMultipleSelect from 'components/ui/custom-input/MultipleSelect';

function LeaveApplicationDrawerContent() {
    const [state, setState] = React.useState({
      leaveFrom: null,
      leaveTo: null,
      leaveDuration: null
    });
    const [storedLeaveFromDate, setStoredLeaveFromDate] = React.useState(null);
    const [storedLeaveToDate, setStoredToFromDate] = React.useState(null);
    const [leaveType, setLeaveType] = React.useState('Leave Without Pay');
    const [DefaultleaveType, setDefaultleaveType] = React.useState('Leave Without Pay');
    const [leaveDays, setleaveDays] = React.useState('');
    const [AttendanceStatus, setAttendanceStatus] = React.useState('Full Day Leave(LV)');
    const [Statusfrom, setStatusfrom] = React.useState('Full Day Leave(LV)');
    const [StatusTo, setStatusTo] = React.useState('Full Day Leave(LV)');

    const [selectedStudent, setSelectedStudent] = React.useState([]);
    // =========== list of students for notify ===========
    const Students = [
      { id: 1, name: 'Suraj' },
      { id: 2, name: 'Abhishek' },
      { id: 3, name: 'Sangeeta' },
      { id: 4, name: 'Amit' },
      { id: 5, name: 'Ruby' },
      { id: 6, name: 'Tarun' },
    ];
  
    // ========= Update Default leave type =============
    const handleLeaveTypeChange = (event) => {
      setLeaveType(event.target.value); 
    };
  
    const handleLeaveFromChange = (date) => {
      setState({
        ...state,
        leaveFrom: date,
        leaveDuration: calculateLeaveDuration(date, state.leaveTo)

      });
      setStoredLeaveFromDate(date);
    };
    const handleLeaveToChange = (date) => {
      setState({
        ...state,
        leaveTo: date,
        leaveDuration: calculateLeaveDuration(state.leaveFrom, date)
      });
      setStoredToFromDate(date);
    };
  
    // ========== calculate leave ============
    const calculateLeaveDuration = (startDate, endDate) => {
      if (startDate && endDate) {
        const diffInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
        return diffInDays;
      }
      return null;
    };
  
    // ============ leave From Attendance Status Change method =======
    const handleselectleavechange1 = (event) => {
      const selectedValue = event.target.value;
      let updatedLeaveDuration = state.leaveDuration;
      if (selectedValue === 'Short Leave(SL)') {
        updatedLeaveDuration -= 0.75;
      } else if (selectedValue === 'Half Day 1 Leave(H1)') {
        updatedLeaveDuration -= 0.5;
      } else if (selectedValue === 'Half Day 2 Leave(H2)') {
        updatedLeaveDuration -= 0.5;
      }
      setState({
        ...state,
        leaveDuration: updatedLeaveDuration
      });
      setStatusfrom(selectedValue);
    };
  
    // ============ leave To Attendance Status Change method =======
    const handleselectleavechange2 = (event) => {
      const selectedValue = event.target.value;
      let updatedLeaveDuration = state.leaveDuration;
      if (selectedValue === 'Short Leave(SL)') {
        updatedLeaveDuration -= 0.75;
      } else if (selectedValue === 'Half Day 1 Leave(H1)') {
        updatedLeaveDuration -= 0.5;
      } else if (selectedValue === 'Half Day 2 Leave(H2)') {
        updatedLeaveDuration -= 0.5;
      }
      setState({
        ...state,
        leaveDuration: updatedLeaveDuration
      });
      setStatusTo(selectedValue);
    };
    // ============ Single Day leave Attendance Status Change method =======
    const handleselectleavechange3 = (event) => {
      const selectedValue = event.target.value;
      let updatedLeaveDuration = state.leaveDuration;
      if (selectedValue === 'Short Leave(SL)') {
        updatedLeaveDuration -= 0.75;
      } else if (selectedValue === 'Half Day 1 Leave(H1)') {
        updatedLeaveDuration -= 0.5;
      } else if (selectedValue === 'Half Day 2 Leave(H2)') {
        updatedLeaveDuration -= 0.5;
      }
      setState({
        ...state,
        leaveDuration: updatedLeaveDuration
      });
      setAttendanceStatus(selectedValue);
      setStatusfrom(selectedValue);
    };
  
    // ============ render full day / custom =============
    const [selectedButton, setSelectedButton] = React.useState(1);
    const handleButtonClick = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };
  
    // =============== Function to generate an array of dates between two dates ===========
    const getDatesBetween = (startDate, endDate) => {
      const dates = [];
      let currentDate = dayjs(startDate);
      const endDateObj = dayjs(endDate);
  
      while (currentDate <= endDateObj) {
        dates.push(currentDate.format('DD-MM-YYYY'));
        currentDate = currentDate.add(1, 'day');
      }
      return dates;
    };
  
    // Generate an array of dates between "Leave From" and "Leave To" dates
    const datesBetween = getDatesBetween(state.leaveFrom, state.leaveTo); 
  
    // ========= render list of leave =============
    const [addleave, setaddleave] = React.useState(false);
    const [selectedLeaveTypes, setSelectedLeaveTypes] = React.useState([]);
    const handleAddleave = () => {
      event.preventDefault();
      if (datesBetween && selectedLeaveTypes) {
        // ========== Check the selected date allready existing or not =========
        const isOverlapping = selectedLeaveTypes.some((leave) => {
          const storedLeaveFrom = dayjs(leave.from[0], 'DD-MM-YYYY');
          const storedLeaveTo = dayjs(leave.from[leave.from.length - 1], 'DD-MM-YYYY');
          return (
            (storedLeaveFrom.isBefore(storedLeaveToDate) && storedLeaveTo.isAfter(storedLeaveFromDate)) ||
            storedLeaveFrom.isSame(storedLeaveFromDate) ||
            storedLeaveTo.isSame(storedLeaveToDate)
          );
        });
  
        if (isOverlapping) {
          //alert('You Can Not Apply Leave For Same Date');
          handleModalOpen();
          return;
        }
  
        const newLeave = {
          from: datesBetween,
          type: leaveType,
          status: AttendanceStatus,
          statusfrom: Statusfrom,
          statusto: StatusTo
        };
        setSelectedLeaveTypes([...selectedLeaveTypes, newLeave]);
      }
      setaddleave(true);
      setshowleaveform(false);
      setaddmoreleave(true);
      setDefaultleaveType('Leave Without Pay');
      setStatusfrom('Full Day Leave(LV)');
      setAttendanceStatus('Full Day Leave(LV)');
      setStatusTo('Full Day Leave(LV)');
      setleaveDays(Number(leaveDays) + Number(state.leaveDuration));
      setState({
        ...state,
        leaveFrom: null,
        leaveTo: null,
        leaveDuration: null
      });
    };
  
    // ========= render leave application form =============
    const [showleaveform, setshowleaveform] = React.useState(true);
    const [addmoreleave, setaddmoreleave] = React.useState(true);
    const Showleaveapplication = () => {
      event.preventDefault();
      setshowleaveform(true);
      setaddmoreleave(false);
    };
  
    // Initialize leaveTypes1 with default values for each date
    const [leaveTypes1, setLeaveTypes1] = React.useState({});
  
    // ======== Function to handle changes in the leave type selection for a specific index ==========
    const handleLeaveTypeChange1 = (event, index) => {
      setLeaveTypes1((prevLeaveTypes) => ({
        ...prevLeaveTypes,
        [index]: event.target.value
      }));
    };
  
    // ========= render error model for duplicate date ==========
  const [modalopen, setmodalOpen] = React.useState(false);
  const handleModalOpen = () => {
    setmodalOpen(true);
  };
  const handleModalClose = () => {
    setmodalOpen(false);
  };
   
  return (
    <>
        <Box>
            {/* ========= list of all added leaves =========== */}
        <Box>
          {addleave === true && (
            <Box m={2} p={1} sx={{ border: '1px solid #ccc' }}>
              <Paper sx={{ listStyleType: 'none', p: 0 }}>
                <ListItem sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                  <ListItemText sx={{ flex: '0 0 30%' }}>
                    <Typography variant="h4">Leave Date</Typography>
                  </ListItemText>
                  <ListItemText sx={{ flex: '0 0 40%' }}>
                    <Typography variant="h4">Attendance Status</Typography>
                  </ListItemText>
                  <ListItemText sx={{ flex: '0 0 30%' }}>
                    <Typography variant="h4">Leave Status</Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
              </Paper>

              {selectedLeaveTypes.map((leave, Outerindex) => (
                <Box key={Outerindex}>
                  {leave.from.map((date, index) => (
                    <>
                      <Paper sx={{ display: 'flex', alignItems: 'center', p: 0 }} key={index}>
                        <ListItem>
                          <ListItemText sx={{ flex: '0 0 30%' }}>
                            <Typography variant="h5">{date}</Typography>
                            
                          </ListItemText>
                          <ListItemText sx={{ flex: '0 0 40%' }}>
                            <Typography variant="h5">
                              {/* {leave.statusfrom !== 'Full Day Leave(LV)' ? leave.statusfrom : leave.status} */}
                              {date === leave.from[0]
                                ? leave.statusfrom
                                : date === leave.from[leave.from.length - 1]
                                ? leave.statusto
                                : leave.status}
                            </Typography>
                          </ListItemText>
                          <ListItemText sx={{ flex: '0 0 30%' }}>
                            <Typography variant="h5">
                              {/* {leave.type} */}
                              <FormControl fullWidth size="small">
                                <InputLabel id={`leave-type-label-${index}`}>Leave Type</InputLabel>
                                <Select
                                  labelId={`leave-type-label-${index}`}
                                  id={`leave-type-select-${index}`}
                                  value={leaveTypes1[`${Outerindex}${index}`] !== undefined ? leaveTypes1[`${Outerindex}${index}`] : leave.type}
                                  label="Leave Type"
                                  onChange={(event) => handleLeaveTypeChange1(event, `${Outerindex}${index}`)} // Handle change in leave type selection for this index
                                >
                                  <MenuItem value={'Casual Leave'}>Casual Leave</MenuItem>
                                  <MenuItem value={'Earned Leave'}>Earned Leave</MenuItem>
                                  <MenuItem value={'Medical Leave'}>Medical Leave</MenuItem>
                                  <MenuItem value={'Festival Leave'}>Festival Leave</MenuItem>
                                  <MenuItem value={'Leave Without Pay'}>Leave Without Pay</MenuItem>
                                </Select>
                              </FormControl>
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </Paper>
                      <Divider />
                    </>
                  ))}
                </Box>
              ))}

              {addmoreleave === true && (
                <Button sx={{ marginTop: '1rem' }} type="submit" variant="contained" size="small" onClick={Showleaveapplication}>
                  Add More Leave
                </Button>
              )}
            </Box>
          )}
        </Box>

        {/* ========== Leave Application Form =========== */}
        <form>
          <Box sx={{ padding: 2 }}>
            {showleaveform === true && (
              <Box mb={1}>
                <Box
                  mb={2}
                  p={1}
                  sx={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Box mr={0.5}>
                    <Box pl={0.5} pb={1}>
                      Leave From
                    </Box>
                    <LocalizationProvider sx={{ background: '#ccc' }} dateAdapter={AdapterDayjs}>
                      <DatePicker value={state.leaveFrom} onChange={handleLeaveFromChange} format="DD-MM-YYYY" />
                    </LocalizationProvider>
                  </Box>

                  <Box mt={2.7} p={0.5} sx={{ border: state.leaveDuration === null ? 'none' : '1px solid #ccc', borderRadius: '5px' }}>
                    {/* {state.leaveDuration > 0 ? state.leaveDuration + ' ' + 'days' : '0 day'}  */}
                    {state.leaveDuration === null
                      ? ''
                      : state.leaveDuration === 1
                      ? state.leaveDuration + ' ' + 'day'
                      : state.leaveDuration + ' ' + 'days'}
                  </Box>
                  <Box ml={0.5}>
                    <Box pl={0.5} pb={1}>
                      Leave To
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker value={state.leaveTo} onChange={handleLeaveToChange} format="DD-MM-YYYY" />
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
                        value={DefaultleaveType}
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

                  <Box>
                    <ButtonGroup sx={{ padding: '5px', background: '#d3cfcf' }} aria-label="Basic button group">
                      <Button
                        sx={{
                          color: selectedButton === 1 ? 'black' : 'black',
                          background: selectedButton === 1 ? '#ffffff' : '#d3cfcf',
                          border: 'none',
                          '&:hover': {
                            border: 'none'
                          }
                        }}
                        onClick={() => handleButtonClick(1)}
                      >
                        Full Day
                      </Button>
                      <Button
                        sx={{
                          color: selectedButton === 2 ? 'black' : 'black',
                          background: selectedButton === 2 ? '#ffffff' : '#d3cfcf',
                          border: 'none',
                          '&:hover': {
                            border: 'none'
                          }
                        }}
                        onClick={() => handleButtonClick(2)}
                      >
                        Custom
                      </Button>
                    </ButtonGroup>

                    {selectedButton === 1 && <Box mt={2} p={1}></Box>}

                    {selectedButton === 2 &&
                      (state.leaveDuration > 1 ? (
                        <Box mb={1} mt={2} p={1} sx={{ border: '1px solid #ccc', borderRadius: '5px' }}>
                          <Grid container spacing={2}>
                            <Grid item xs={6} md={6}>
                              <Box>
                                <Box p={0.5}>From: {storedLeaveFromDate ? storedLeaveFromDate.format('DD-MM-YYYY') : ''} </Box>
                                <FormControl fullWidth size="small">
                                  <InputLabel id="demo-simple-select-label">Attendance Status</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Attendance Status"
                                    onChange={handleselectleavechange1}
                                  >
                                    <MenuItem value={'Short Leave(SL)'}>Short Leave(SL)</MenuItem>
                                    <MenuItem value={'Half Day 1 Leave(H1)'}>Half Day 1 Leave(H1)</MenuItem>
                                    <MenuItem value={'Half Day 2 Leave(H2)'}>Half Day 2 Leave(H2)</MenuItem>
                                    <MenuItem value={'On Duty(OD)'}>On Duty(OD)</MenuItem>
                                    <MenuItem value={'Full Day Leave(LV)'}>Full Day Leave(LV)</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={6}>
                              <Box>
                                <Box p={0.5}>To: {storedLeaveToDate ? storedLeaveToDate.format('DD-MM-YYYY') : ''} </Box>
                                <FormControl fullWidth size="small">
                                  <InputLabel id="Attendance_Status_custom">Attendance Status</InputLabel>
                                  <Select
                                    labelId="Attendance_Status_custom_label"
                                    id="Attendance-Status_custom-select"
                                    label="Attendance Status"
                                    onChange={handleselectleavechange2}
                                  >
                                    <MenuItem value={'Short Leave(SL)'}>Short Leave(SL)</MenuItem>
                                    <MenuItem value={'Half Day 1 Leave(H1)'}>Half Day 1 Leave(H1)</MenuItem>
                                    <MenuItem value={'Half Day 2 Leave(H2)'}>Half Day 2 Leave(H2)</MenuItem>
                                    <MenuItem value={'On Duty(OD)'}>On Duty(OD)</MenuItem>
                                    <MenuItem value={'Full Day Leave(LV)'}>Full Day Leave(LV)</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      ) : (
                        <Box mt={2} mb={2}>
                          <FormControl fullWidth size="small">
                            <InputLabel id="Attendance Status">Attendance Status</InputLabel>
                            <Select id="Attendance-Status_select" label="Attendance Status" onChange={handleselectleavechange3}>
                              <MenuItem value={'Short Leave(SL)'}>Short Leave(SL)</MenuItem>
                              <MenuItem value={'Half Day 1 Leave(H1)'}>Half Day 1 Leave(H1)</MenuItem>
                              <MenuItem value={'Half Day 2 Leave(H2)'}>Half Day 2 Leave(H2)</MenuItem>
                              <MenuItem value={'On Duty(OD)'}>On Duty(OD)</MenuItem>
                              <MenuItem value={'Full Day Leave(LV)'}>Full Day Leave(LV)</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      ))}
                  </Box>
                  <Button type="submit" variant="contained" size="small" onClick={handleAddleave}>
                    Add Leaves
                  </Button>
                </Box>
              </Box>
            )}

            <Box pb={1}>
              <Typography variant="h5" sx={{ display: leaveDays > 0 ? 'flex' : 'none', alignItems: 'center' }}>
                <QueryBuilderOutlinedIcon sx={{ paddingRight: '5px' }} /> You are requesting for{' '}
                {leaveDays === 1 ? leaveDays + ' ' + 'day' : leaveDays + ' ' + 'days'} of leave
              </Typography>
            </Box>

            <Box pb={2}>
              <Box p={0.5}>Note</Box>
              <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
            </Box>

            <Box>
              <ParamMultipleSelect options={Students} label="Notify" value={selectedStudent} setValue={setSelectedStudent} />
            </Box>
            <Box sx={{ padding: 2 }}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button sx={{ alignSelf: 'flex-end' }}>Cancal</Button>
            </Box>
          </Box>
        </form>
        </Box>
      <Dialog open={modalopen} onClose={handleModalClose}>
        <DialogTitle>  Warning</DialogTitle>
        <DialogContent>
          <DialogContentText>You Can Not Apply Leave For Same Date</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default LeaveApplicationDrawerContent
