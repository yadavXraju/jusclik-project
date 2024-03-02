import React, { useState } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import Popper from '@mui/material/Popper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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

export default Timing;
