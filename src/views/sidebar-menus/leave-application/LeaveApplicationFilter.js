import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Pagination from '@mui/material/Pagination';
import { Button, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { IconButton } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const leavedata = [
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
  { status: 'Pending' },
  { status: 'Approved' },
];

const itemsPerPage = 5;

export default function LeaveTabs() {
  const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1); // Reset current page when changing tabs
  };

  // =========== Filter data if Pending & Approved
  const filteredData =
    value === 0
      ? leavedata
      : value === 1
        ? leavedata.filter((item) => item.status === 'Pending')
        : leavedata.filter((item) => item.status === 'Approved');

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);


  // ========= Implement pagination of list ==========
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 2 }}>
      <Tabs sx={{ mb: 2 }} value={value} onChange={handleChange}>
        <Tab label="All" />
        <Tab label="Pending" />
        <Tab label="Approved" />
      </Tabs>

      {paginatedData.map((item, index) => (
        <Paper sx={{ p: 2, borderRadius: '0px', border: '1px solid #ccc6', overflowX: 'auto', marginBottom: '4px' }} key={index}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{}}>
                <span style={{ color: '#808080', fontSize: '12px' }}>Past Leave</span><br />
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Apr 20,2023 (1 day)</span>
              </span>
              <span>
                <span style={{ color: '#808080', fontSize: '12px' }}>Leave Type</span><br />
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Paid Leave</span>
              </span>
              <span>
                <span style={{ color: '#808080', fontSize: '12px' }}>Requested On</span><br />
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Apr 06,2023</span>
              </span>
              <span>
                <span style={{ color: '#808080', fontSize: '12px' }}>Status</span><br />
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.status}</span>
              </span>
              <span>
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
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
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
              </span>
            {/* Add other fields as needed */}
          </div>
        </Paper>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} />
      </Box>
    </Box>
  );
}