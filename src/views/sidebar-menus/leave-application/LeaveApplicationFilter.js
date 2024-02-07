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
import { Divider, ListItem, ListItemText } from '@mui/material';


const leavedata = [
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 fullday', status: 'Approved' },
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


      <Paper sx={{ listStyleType: 'none', p: 0 }}>
        <ListItem sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <ListItemText sx={{ flex: '0 0 10%' }}>
            <Typography variant="h4" >
              App No
            </Typography>
          </ListItemText>
          <ListItemText sx={{ flex: '0 0 10%' }}>
            <Typography variant="h4">Leave Type</Typography>
          </ListItemText>
          <ListItemText sx={{ flex: '0 0 10%' }}>
            <Typography variant="h4">
              App Date
            </Typography>
          </ListItemText>
          <ListItemText sx={{ flex: '0 0 30%' }}>
            <Typography variant="h4">
              Details
            </Typography>
          </ListItemText>
          <ListItemText sx={{ flex: '0 0 10%' }}>
            <Typography variant="h4">
              Planned / Unplanned
            </Typography>
          </ListItemText>
          <ListItemText sx={{ flex: '0 0 10%' }}>
            <Typography variant="h4">
              Applied
            </Typography>
          </ListItemText>
          <ListItemText sx={{ flex: '0 0 10%' }}>
            <Typography variant="h4">
              Status
            </Typography>
          </ListItemText>
          <ListItemText sx={{ flex: '0 0 10%', display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h4">
              Action
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />
      </Paper>

      {paginatedData.map((item, index) => (
        <>

          <Paper sx={{ listStyleType: 'none', p: 0 }} key={index}>
            <ListItem sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
              <ListItemText sx={{ flex: '0 0 10%' }}>
                <Typography variant="h5" >
                  {item.Appno}
                </Typography>
              </ListItemText>
              <ListItemText sx={{ flex: '0 0 10%' }}>
                <Typography variant="h5">{item.leavetype}</Typography>
              </ListItemText>
              <ListItemText sx={{ flex: '0 0 10%' }}>
                <Typography variant="h5">
                  {item.Appdate}
                </Typography>
              </ListItemText>
              <ListItemText sx={{ flex: '0 0 30%' }}>
                <Typography variant="h5">
                  {item.Details}
                </Typography>
              </ListItemText>
              <ListItemText sx={{ flex: '0 0 10%' }}>
                <Typography variant="h5">
                  {item.plan}
                </Typography>
              </ListItemText>
              <ListItemText sx={{ flex: '0 0 10%' }}>
                <Typography variant="h5">
                  {item.applied}
                </Typography>
              </ListItemText>
              <ListItemText sx={{ flex: '0 0 10%' }}>
                <Typography variant="h5">
                  <Box sx={{
                    color: item.status === 'Approved' ? 'rgb(0, 200, 83)' : (item.status === 'overdue' ? '#433e1a' : 'rgb(216, 67, 21)'),
                    borderRadius: '16px',
                    background: item.status === 'Approved' ? 'rgba(147, 213, 166, 0.38)' : (item.status === 'overdue' ? '#ffff003b' : 'rgb(251, 233, 231)'),
                    '&:hover': {
                      background: item.status === 'Approved' ? 'rgb(0, 200, 83)' : (item.status === 'overdue' ? '#b4aa10' : 'rgb(216, 67, 21)'),
                      color: 'white',
                    },
                    width:'70%',
                    padding: '2px',
                    paddingRight: '8px',
                    paddingLeft: '8px',
                    textAlign: 'center'
                  }}>
                   {item.status}
                  </Box>
                </Typography>
              </ListItemText>
              <ListItemText sx={{ flex: '0 0 10%', display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h4">
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
                </Typography>
              </ListItemText>

            </ListItem>
            <Divider />
          </Paper>


        </>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
        <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} />
      </Box>
    </Box>
  );
}




{/* <Box sx={{
  color: row.status === 'Paid' ? 'rgb(0, 200, 83)' : (row.status === 'overdue' ? '#433e1a' : 'rgb(216, 67, 21)'),
  borderRadius: '16px',
  background: row.status === 'Paid' ? 'rgba(147, 213, 166, 0.38)' : (row.status === 'overdue' ? '#ffff003b' : 'rgb(251, 233, 231)'),
  '&:hover': {
    background: row.status === 'Paid' ? 'rgb(0, 200, 83)' : (row.status === 'overdue' ? '#b4aa10' : 'rgb(216, 67, 21)'),
    color: 'white',
  },
  padding: '2px',
  paddingRight: '8px',
  paddingLeft: '8px',
  textAlign: 'center'
}}>

  {new Date(row.ldate) < new Date() ? 'Overdue' : row.status}
</Box> */}



{/* <Paper sx={{ p: 2, borderRadius: '0px', border: '1px solid #ccc6', overflowX: 'auto', marginBottom: '4px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <span style={{}}>
    <span style={{ color: '#808080', fontSize: '12px' }}>Past Leave</span><br />
  </span>
  <span>
    <span style={{ color: '#808080', fontSize: '12px' }}>Leave Type</span><br />
  </span>
  <span>
    <span style={{ color: '#808080', fontSize: '12px' }}>Requested On</span><br />
  </span>
  <span>
    <span style={{ color: '#808080', fontSize: '12px' }}>Status</span><br />
  </span>
  <span></span>
</div>
</Paper> */}

{/* <Paper sx={{ p: 1, borderRadius: '0px', border: '1px solid #ccc6', overflowX: 'auto', marginBottom: '4px' }} key={index}>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <span style={{}}>
    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Apr 20,2023 (1 day)</span>
  </span>
  <span>
    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Paid Leave</span>
  </span>
  <span>
    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Apr 06,2023</span>
  </span>
  <span>
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
</div>
</Paper> */}