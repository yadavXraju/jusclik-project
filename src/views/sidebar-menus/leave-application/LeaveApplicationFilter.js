import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { IconButton } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
//import { Divider } from '@mui/material';
import TablePagination from '@mui/material/TablePagination'; // Import TablePagination component
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Leave data
const leavedata = [
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 Fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Earned Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 Fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Medical Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Short Leave(SL)', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Half Day(H1)', status: 'Approved' },
  { Appno: 2723, leavetype: 'Earned Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 Fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Without Pay Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 Fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Earned Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Half Day(H1)', status: 'Pending' },
  { Appno: 2724, leavetype: 'Medical Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Half Day(H1)', status: 'Approved' },
  { Appno: 2723, leavetype: 'Medical Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Short Leave(SL)', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Half Day(H1)', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 Fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Medical Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Short Leave(SL)', status: 'Approved' },
  { Appno: 2723, leavetype: 'Casual Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Half Day(H1)', status: 'Pending' },
  { Appno: 2724, leavetype: 'Without Pay Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '1 Fullday', status: 'Approved' },
  { Appno: 2723, leavetype: 'Earned Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 Fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Medical Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Half Day(H1)', status: 'Approved' },
  { Appno: 2723, leavetype: 'Earned Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Short Leave(SL)', status: 'Pending' },
  { Appno: 2724, leavetype: 'Casual Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Half Day(H1)', status: 'Approved' },
  { Appno: 2723, leavetype: 'Earned Leave', Appdate: '02.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: '2 Fullday', status: 'Pending' },
  { Appno: 2724, leavetype: 'Medical Leave', Appdate: '08.Feb.2024', Details: 'Dear Sir/Ma`am, I am not feeling well today', plan: 'Planned', applied: 'Half Day(H1)', status: 'Approved' },
];
export default function LeaveTabs() {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0); // Page state for TablePagination
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page state for TablePagination

  // =========== Handle change in tab ===============
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(0); // Reset page when changing tabs
  };

  // ========== Handle change in page ============
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // ============= Handle change in rows per page ==========
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page when changing rows per page
  };

  // =========== Filter data if Pending & Approved =========
  const filteredData =
    value === 0
      ? leavedata.filter((item) => item.status === 'Pending')
      : value === 1
        ? leavedata.filter((item) => item.status === 'Approved')
        : leavedata;

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 2 }}>
      <Tabs sx={{ mb: 2 }} value={value} onChange={handleChange}>

        <Tab label="Pending" />
        <Tab label="Approved" />
        <Tab label="All" />
      </Tabs>

      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h4">
                App No
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">Leave Type</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                App Date
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                Details
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                Planned / Unplanned
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                Applied
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="h5">{item.Appno}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.leavetype}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.Appdate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" sx={{minWidth:'200px'}}>{item.Details}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.plan}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">{item.applied}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">
                    <Box
                      sx={{
                        color: item.status === 'Approved' ? 'rgb(0, 200, 83)' : (item.status === 'overdue' ? '#433e1a' : 'rgb(216, 67, 21)'),
                        borderRadius: '16px',
                        background: item.status === 'Approved' ? 'rgba(147, 213, 166, 0.38)' : (item.status === 'overdue' ? '#ffff003b' : 'rgb(251, 233, 231)'),
                        '&:hover': {
                          background: item.status === 'Approved' ? 'rgb(0, 200, 83)' : (item.status === 'overdue' ? '#b4aa10' : 'rgb(216, 67, 21)'),
                          color: 'white',
                        },
                        width: "100%",
                        padding: '2px',
                        paddingRight: '8px',
                        paddingLeft: '8px',
                        textAlign: 'center'
                      }}
                    >
                      {item.status}
                    </Box>
                  </Typography>
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
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>

      {/* ======== Render TablePagination component  ========== */}
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true,
        }}
        rowsPerPageOptions={[5, 10, 25, 50]}
      />
    </Box>
  );
}
