import { useState } from 'react';
import Grid from '@mui/material/Grid';
import AttendanceLog from './AttandanceLog';
import MainCard from 'components/ui/cards/MainCard';
import { Box, Typography, MenuItem, Select, IconButton , LinearProgress } from '@mui/material';
import {  Info, Person, PersonOutline } from '@mui/icons-material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import Popper from '@mui/material/Popper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// ================= Attendance status start
function AttandanceStatus() {
  const [selectedValue, setSelectedValue] = useState('Last Week');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '5px' }} p={2} backgroundColor={'#fff'}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Select
            value={selectedValue}
            size='small'
            sx={{ minWidth: 100 }}
            onChange={handleChange}
          >
            <MenuItem value={'Last Week'}>Last Week</MenuItem>
            <MenuItem value={'Last Month'}>Last Month</MenuItem>
            <MenuItem value={'Custom Range'}>Custom Range</MenuItem>
          </Select>
          <IconButton>
            <Info className="cursor-pointer" />
          </IconButton>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: 110 }}>
              <Box >
                <Person />
              </Box>
              <Typography variant="h6">Me</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ width: 110 }}>
                <Typography variant="h6" sx={{color:'#777'}}>Avg Hrs / Day</Typography>
                <Typography variant="h4">0h</Typography>
              </Box>
              <Box sx={{ width: 110 }}>
                <Typography variant="h6" sx={{color:'#777'}}>On time Arrival</Typography>
                <Typography variant="h4">0%</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: 110 }}>
              <Box className="dot dot-xl bg-accent-blue mr-10">
                <PersonOutline />
              </Box>
              <Typography variant="h6">My Team</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h4">8h 24m</Typography>
              <Typography variant="h4">67%</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
// ================= Attendance status end


// ==================== Timing  Start
function Timing() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentDayIndex, setCurrentDayIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpen = (index, event) => {
    setCurrentDayIndex(index);
    setAnchorEl(event.currentTarget);
    setOpen(true);
    // Get current date and add index days to it
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // Get current day (0-6)
    const offset = index - currentDay; // Calculate offset to adjust the selected date
    currentDate.setDate(currentDate.getDate() + offset);
    setSelectedDate(currentDate);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentDayIndex(-1);
  };

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = new Date().getDay();
  return (
    <>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '5px' }} p={2} backgroundColor={'#fff'}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            {days.map((day, index) => (
              <Box
                key={index}
                onMouseEnter={(e) => handleOpen(index, e)}
                onMouseLeave={handleClose}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: index === currentDayIndex ? '1px solid #64c3d1' : '1px solid #ccc',
                  borderRadius: '50%',
                  marginRight: '10px',
                  height: '24px',
                  width: '24px',
                  backgroundColor: index === currentDay ? '#64c3d1' : 'transparent'
                }}
              >
                <span style={{ margin: 'auto' }}>{day[0]}</span> {/* Center the text horizontally and vertically */}
              </Box>
            ))}
            <Popper id="popper" open={open} anchorEl={anchorEl} placement="top">
              <Box sx={{ border: 1, p: 2, bgcolor: '#364152', color: '#fff', borderRadius: '5px' }}>
                {selectedDate && <span>{selectedDate.toDateString()}</span>}
                {/* <Typography variant="body1" color={'#fff'}>
                  27-Feb-2024
                </Typography> */}
                <Typography variant="body1" color={'#fff'}>
                  Today (9:00 AM - 6:00 PM)
                </Typography>
              </Box>
              <ArrowDropDownIcon sx={{ marginTop: '-10px', marginLeft: '95px' }} />
            </Popper>
          </Box>
          <Box>
            <SignalCellularAltOutlinedIcon />
            <FingerprintIcon />                                                                                                          
          </Box>
        </Box>
        <Box mt={'33px'}>
          <Typography variant="body2" className="text-small">
            Today (9:00 AM - 6:00 PM)
          </Typography>
          <Box my={1}>
            <LinearProgress variant="determinate" value={25} sx={{ width: '100%', height: '8px', bgcolor: 'accent.aqua' }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" className="text-label text-capitalize text-secondary">
              Duration: 9h 0m
            </Typography>
            <Typography variant="body2" className="text-label text-capitalize text-secondary">
              Break: 60 min
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
} 
// ==================== Timing  End
const BiometricDetailsOrAttendanceDetails = () => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(0);
  };

  const filterDataByMonth = (month) => {
    return leavedata.filter((item) => item.date.includes(month));
  };

  const renderMonthTabs = () => {
    return months.map((month, index) => <Tab key={index} label={month} onClick={() => handleMonthTabClick(index)} />);
  };

  const handleMonthTabClick = (index) => {
    setValue(index);
    setPage(0);
  };

  //const filteredData = value === 0 ? leavedata : filterDataByMonth(months[value]);
  const filteredData = filterDataByMonth(months[value]);

  return (
    <>
      <Grid container spacing={2} pb={2}>
        <Grid item xs={12} md={6}>
          <AttandanceStatus />
        </Grid>
        <Grid item xs={12} md={6}>
          <Timing />
        </Grid>
      </Grid>
      <MainCard>
        <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 2 }}>
          <Tabs sx={{ mb: 2 }} value={value} onChange={handleChange}>
            {renderMonthTabs()}
          </Tabs>

          <TableContainer sx={{ border: '1px solid #ccc' }}>
            <Table>
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

          <Pagination count={filteredData.length} page={page} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} setPage={setPage} />
        </Box>
      </MainCard>
    </>
  );
};

export default BiometricDetailsOrAttendanceDetails;
